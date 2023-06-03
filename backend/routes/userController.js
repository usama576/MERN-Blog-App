const express = require("express");
const userModel = require("../models/userModel");
const bcrypt = require("bcrypt");

//router
const router = express.Router();

//Get All user
router.get("/all", async (req, res) => {
  const results = await userModel.find();
  res.status(200).send({
    userCount: results.length,
    message: "data fetched successfully",
    results,
  });
});

// Create User
router.post("/register", async (req, res) => {
  try {
    const { username, email, password } = req.body;
    //Validation
    if (!username || !email || !password) {
      return res.status(500).send("Please fill all feilds");
    }
    //If existing user
    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      return res.status(500).send({
        success: false,
        message: "user already exists",
      });
    }
    //hashing password
    const hashedPassword = await bcrypt.hash(password, 10);

    //Save new user
    const user = new userModel({ username, email, password: hashedPassword });
    await user.save();
    return res.status(201).send({
      success: true,
      message: "new user created",
      user,
    });
  } catch (error) {
    console.log(error.message);
    return res.status(500).send({
      message: "Error in register",
      success: false,
      error,
    });
  }
});

//Login /Post
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(401).send({
        success: false,
        message: "Please provide email or password",
      });
    }
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(200).send({
        success: false,
        message: "email is not registered",
      });
    }
    // Password comaprison
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).send({
        success: false,
        message: "Invalid username or password",
      });
    }
    res.status(200).send({
      success: true,
      message: "login suucessfully",
      user,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in Login",
      error,
    });
  }
});

module.exports = router;
