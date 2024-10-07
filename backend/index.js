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
    },
    email: {
        type: String,
        unique: true,
    },
    password: {
        type: String,
    },
    cartData: {    //type of data you want to be associated with user ie invoice
        type: Object,
    },
    date: {
        type: Date,
        default: Date.now,
    }
});

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
        password: req.body.password
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
 

  
  
  