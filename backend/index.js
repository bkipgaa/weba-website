const port = 4000;
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const multer = require('multer');
const cors = require("cors");
const wifi = require('node-wifi');
const ping = require('ping');

app.use(express.json());
app.use(cors());

mongoose.connect("mongodb+srv://bkipgaa:abcde54321@cluster0.m6k9s.mongodb.net/webanet", { useNewUrlParser: true, useUnifiedTopology: true })

// Start the server
app.listen(port, (error) => {
  if (!error) {
    console.log("Server Running on port " + port);
  } else {
    console.log("Error: " + error);
  }
});

// Schema for Users model
const Users = mongoose.model('Users', {
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  additionalInfo: {
    type: String,
  },
  heardFrom: {
    type: String,
    enum: ['facebook', 'twitter', 'tiktok', 'searchEngines', 'friend', 'referrals'],
  },
  cartData: {
    type: Object,
  },

  profilePic: {
    type: String,
    default: 'uploads/profilePic-1729972324278-705286620-profile-pic-default.png' // Set your default profile picture URL here
  },

  date: {
    type: Date,
    default: Date.now,
  }
});

const UserLocationSchema = new mongoose.Schema({
  latitude: {
    type: Number,
    required: true,
  },
  longitude: {
    type: Number,
    required: true,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Users',
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  phoneNumber: {
    type: String,
  },
});

const UserLocation = mongoose.model('UserLocation', UserLocationSchema);



app.use('/uploads', express.static('uploads'));


// Middleware to authenticate the token
const authenticateToken = (req, res, next) => {
  let token = req.header('auth-token');
  if (token && token.startsWith('Bearer ')) {
    token = token.slice(7, token.length).trimLeft();
  }
  if (!token) {
    return res.status(401).json({ success: false, message: "Access Denied. No token provided." });
  }

  try {
    const verified = jwt.verify(token, 'secret_ecom');
    req.user = verified.user;
    next();
  } catch (err) {
    res.status(400).json({ success: false, message: "Invalid Token" });
  }
};

// Configure multer storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // Ensure 'uploads' folder exists
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, file.fieldname + '-' + uniqueSuffix + '-' + file.originalname);
  }
});


const upload = multer({ storage: storage });

// Profile picture upload endpoint
app.post("/upload-profile-pic", authenticateToken, upload.single("profilePic"), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ success: false, message: "No file uploaded." });
    }

    const userId = req.user.id;
    const filePath = req.file.path.replace(/\\/g, "/"); // Ensure forward slashes for URL compatibility

    // Update user's profilePic URL in the database
    const updatedUser = await Users.findByIdAndUpdate(userId, { profilePic: filePath }, { new: true });

   // Add base URL to the profilePic for frontend display
   const fullProfilePicUrl = `${req.protocol}://${req.get("host")}/${updatedUser.profilePic}`;
   updatedUser.profilePic = fullProfilePicUrl;
   
    res.json({
      success: true,
      message: "Profile picture uploaded successfully!",
      updatedUser,
    });
  } catch (error) {
    console.error("Error uploading profile picture:", error);
    res.status(500).json({ success: false, message: "Profile picture upload failed." });
  }
});

// API Endpoint for registering users
app.post('/signup', async (req, res) => {
  try {
    let check = await Users.findOne({ email: req.body.email });
    if (check) {
      return res.status(400).json({ success: false, errors: "User with this email already exists." });
    }

    // Hash the password before saving
    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    const user = new Users({
      name: req.body.username,
      email: req.body.email,
      password: hashedPassword,
      phoneNumber: req.body.phoneNumber,
      location: req.body.location,
      additionalInfo: req.body.additionalInfo,
      heardFrom: req.body.heardFrom,
      profilePic: req.body.profilePic || "uploads/profilePic-1729972324278-705286620-profile-pic-default.png", // Default picture path
    });

    await user.save();
    const data = { user: { id: user.id } };
    const token = jwt.sign(data, 'secret_ecom', { expiresIn: '1h' });

    // Return token and user information for frontend display
    res.json({
      success: true,
      token,
      user: {
        name: user.name,
        email: user.email,
        profilePic: `${req.protocol}://${req.get("host")}/${user.profilePic.replace(/\\/g, "/")}`
      }
    });
  } catch (error) {
    console.error('Error during signup:', error);
    res.status(500).json({ success: false, message: 'Internal server error during signup.' });
  }
});

// API Endpoint for user login
app.post('/login', async (req, res) => {
  try {
    const user = await Users.findOne({ email: req.body.email });

    if (user) {
      // Compare the hashed password
      const passCompare = await bcrypt.compare(req.body.password, user.password);

      if (passCompare) {
        const data = { user: { id: user.id } };
        const token = jwt.sign(data, 'secret_ecom', { expiresIn: '1h' });

        res.json({
          success: true,
          token,
          user: {
            name: user.name,
            email: user.email,
            profilePic: `${req.protocol}://${req.get("host")}/${user.profilePic.replace(/\\/g, "/")}`, // Ensuring URL format
      },
        });
      } else {
        res.json({ success: false, errors: "Wrong Password" });
      }
    } else {
      res.json({ success: false, errors: "Email not found" });
    }
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ success: false, message: 'Server error during login.' });
  }
});

// Route to get the logged-in user's profile
app.get('/profile', authenticateToken, async (req, res) => {
  try {
    const user = await Users.findById(req.user.id);
    if (!user) {
      return res.status(404).json({ success: false, message: 'User not found' });
    }
    res.json({
      success: true,
      user: {
        name: user.name,
        profilePic: user.profilePic // Add this line
        
      }
    });
  } catch (error) {
    console.error('Error fetching profile:', error);
    res.status(500).json({ success: false, message: 'Error fetching profile.' });
  }
});

// Ping and network scan
wifi.init({ iface: null });

const performPing = async () => {
  const res = await ping.promise.probe('8.8.8.8', { timeout: 10 });
  return { success: res.alive, ms: res.time };
};

const scanAndPingSubnet = async (baseIP) => {
  return 5; // Dummy value
};

app.get('/scan-network', async (req, res) => {
  try {
    const currentConnections = await wifi.getCurrentConnections();
    const ssid = currentConnections.length > 0 ? currentConnections[0].ssid : 'No Wi-Fi connection found';
    const pingResults = await performPing();
    const devicesCount = await scanAndPingSubnet('10.10.28');
    res.json({
      ssid: ssid,
      connectionStatus: pingResults.success ? 'Connected' : 'Not connected',
      devices: devicesCount,
      responseTime: pingResults.ms
    });
  } catch (error) {
    console.error('Error scanning network:', error);
    res.status(500).json({ success: false, message: 'Network scanning failed.' });
  }
});

// API route to handle location submission
app.post('/api/location', authenticateToken, async (req, res) => {
  const { latitude, longitude } = req.body;

  if (!latitude || !longitude) {
    return res.status(400).json({ success: false, message: 'Latitude and longitude are required' });
  }

  try {
    const user = await Users.findById(req.user.id);
    if (!user) {
      return res.status(404).json({ success: false, message: 'User not found' });
    }

    const newLocation = new UserLocation({
      latitude,
      longitude,
      userId: user._id,
      name: user.name,
      email: user.email,
      phoneNumber: user.phoneNumber,
    });

    await newLocation.save();
    res.json({ success: true, message: 'Location saved successfully!' });
  } catch (error) {
    console.error('Error saving location:', error);
    res.status(500).json({ success: false, message: 'Failed to save location.' });
  }
});




