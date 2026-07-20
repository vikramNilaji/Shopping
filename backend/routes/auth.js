import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/userModel.js";
import cors from "cors";

const router = express.Router();

router.post("/post", async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    return res.status(401).json("All fields are required");
  }

  try {
    let existingUser = await User.findOne({ email });
    if (existingUser) {
      return res
        .status(400)
        .json({ message: "User with this email already exists" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      name,
      email,
      password: hashPassword,
    });

    await newUser.save();
    const payload = { userId: newUser._id };
    const token = jwt.sign(
      payload, 
      process.env.JWT_SECRET, 
      { expiresIn: '1d' }
    );

    // Send the response straight away without nesting
    return res.status(201).json({
      token,
      user: { id: newUser._id, name: newUser.name, email: newUser.email }
    });

  } catch (error) {
    console.error("Signup error", error.message);
    res.status(500).json({ message: "Server error during signup" });
  }
});

export default router;
