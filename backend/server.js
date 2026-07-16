import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "./models/userModels.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.post("/api/users/register", async (req, res) => {
    try {
        const {name,email,password}=req.body;
        const userExists= await User.findOne({email});
        

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})