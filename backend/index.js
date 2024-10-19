const port = 4000;
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const jwt = require('jsonwebtoken');
const multer = require("multer");
const path = require("path");
const cors = require("cors");
const wifi = require('node-wifi');
const ping = require('ping');

app.use(express.json())
app.use(cors())

mongoose.connect("mongodb+srv://bkipgaa:abcde54321@cluster0.m6k9s.mongodb.net/webanet")

//API Creation
app.get("/", (req, res) => {
    res.send("Express App is Running")
})

app.listen(port, (error) => {
    if (!error) {
        console.log("Server Running on port " + port)
    }
    else {
        console.log("Error: " + error)
    }
})


// Schema Creation for User model
const Users = mongoose.model('Users', {
  name: {
      type: String,
      required: true,   // Name is required
  },
  email: {
      type: String,
      unique: true,
      required: true,   // Email is required
  },
  password: {
      type: String,
      required: true,   // Password is required
  },
  phoneNumber: {
      type: String,    // Adding phone number field
      required: true   // Phone number is required
  },
  location: {
      type: String,    // Adding location field
      required: true   // Location is required
  },
  additionalInfo: {
      type: String,    // Field to capture additional information
  },
  heardFrom: {
      type: String,    // How the user heard about the service
      enum: ['facebook', 'twitter', 'tiktok', 'searchEngines', 'friend', 'referrals'], // Predefined options
      required: true   // Field is required
  },
  cartData: {
      type: Object,    // Assuming this is related to invoices or user-specific data
  },
  date: {
      type: Date,
      default: Date.now,
  }
});

const UserLocationSchema = new mongoose.Schema({
  latitude: {
      type: Number,
      required: true, // Ensure latitude is provided
  },
  longitude: {
      type: Number,
      required: true, // Ensure longitude is provided
  },
  userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Users', // Reference to the Users model for better data integrity
      required: true, // Ensure userId is provided
  },
  date: {
      type: Date,
      default: Date.now,
  },
  name: {
    type: String,  // Store user's name
  },
  email: {
    type: String,  // Store user's email
  },
  phoneNumber: {
    type: String,  // Store user's phone number
  },
});

// Create the model
const UserLocation = mongoose.model('UserLocation', UserLocationSchema);

module.exports = UserLocation;

//API Endpoint for registering users

app.post('/signup', async (req, res) => {
    // Check if a user with the same email already exists
    let check = await Users.findOne({ email: req.body.email })
    if (check) {
        return res.status(400).json({ success: false, errors: "Existing user found with the same email" });
    }
    // Create a new user with the provided information and initialized cart
    const user = new Users({
      name: req.body.username,
      email: req.body.email,
      password: req.body.password,
      phoneNumber: req.body.phoneNumber,   // Capture phone number
      location: req.body.location,         // Capture location
      additionalInfo: req.body.additionalInfo,  // Capture additional information (optional)
      heardFrom: req.body.heardFrom        // Capture how the user heard about the service
  });
  
    await user.save()
    // Create a token with the user's ID
    const data = {
        user: {
            id: user.id
        }
    };
    const token = jwt.sign(data, 'secret_ecom');
    // Send a success response with the token
    res.json({ success: true, token });

});

//Creating endpoint for userlogin
app.post('/login', async (req, res) => {
    let user = await Users.findOne({ email: req.body.email })
      
        if (user) {
          const passCompare = req.body.password === user.password;
          if (passCompare) {
            const data = {
              user: {
                id: user.id
              }
            };
            const token = jwt.sign(data, 'secret_ecom');
            res.json({ success: true, token });
          } else {
            res.json({ success: false, errors: "Wrong Password" });
          }
        } else {
          res.json({ success: false, errors: "Wrong Email Id" });
        }
  });

  wifi.init({
    iface: null // Use default interface
  });

  // Function to perform a ping to Google DNS (8.8.8.8)
const performPing = async () => {
  const res = await ping.promise.probe('8.8.8.8', { timeout: 10 });
  return {
      success: res.alive,
      ms: res.time
  };
};

// Dummy function to simulate scanning devices on the local network
const scanAndPingSubnet = async (baseIP) => {
  // You can implement actual scanning logic here or use a library to scan the subnet
  // For simplicity, this will return a fixed number of devices
  return 5; // Dummy value for now
};
  
  

  // Route to scan the network and return the status
app.get('/scan-network', async (req, res) => {
    try {
        // Get the current SSID
        const currentConnections = await wifi.getCurrentConnections();
        const ssid = currentConnections.length > 0 ? currentConnections[0].ssid : 'No Wi-Fi connection found';

        // Perform ping test to external IP (Google DNS)
        const pingResults = await performPing();

        // Scan the local network (dummy implementation)
        const devicesCount = await scanAndPingSubnet('10.10.28');  // Replace with actual subnet

        // Send the network details as JSON response
        res.json({
            ssid: ssid,
            connectionStatus: pingResults.success ? 'Connected' : 'Not connected',
            latency: pingResults.ms,
            connectionStrength: pingResults.ms < 80 ? 'Strong' : 'Weak',
            devicesCount: devicesCount
        });
    } catch (error) {
        res.status(500).send('Error processing network scan');
    }
});



// API route to handle location submission
// Middleware to authenticate the user and extract user ID
const authenticateToken = (req, res, next) => {
  const token = req.header('auth-token'); // Extract token from request headers
  if (!token) return res.status(401).json({ success: false, message: "Access Denied. No token provided." });

  try {
    const verified = jwt.verify(token, 'secret_ecom');  // Verify token with your secret
    req.user = verified.user; // Attach user data to request object
    next(); // Proceed to the next middleware
  } catch (err) {
    res.status(400).json({ success: false, message: "Invalid Token" });
  }
};

// API route to handle location submission
app.post('/api/location', authenticateToken, async (req, res) => {
  const { latitude, longitude } = req.body;

  if (!latitude || !longitude) {
    return res.status(400).json({ success: false, message: 'Latitude and longitude are required' });
  }

  try {
    // Fetch the logged-in user's details using their ID from the token
    const user = await Users.findById(req.user.id);  // Assuming req.user.id contains the userId

    if (!user) {
      return res.status(404).json({ success: false, message: 'User not found' });
    }
    const newLocation = new UserLocation({
      latitude,
      longitude,
      userId: user._id,  // User's ID
      name: user.name,  // User's name
      email: user.email,  // User's email
      phoneNumber: user.phoneNumber,  // User's phone number
    });

    await newLocation.save();
    res.json({ success: true, message: 'Location saved successfully!' });
  } catch (error) {
    console.error('Error saving location:', error);
    res.status(500).json({ success: false, message: 'Failed to save location.' });
  }
});

  
  
  