const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User'); // Path to your Mongoose User model
import express from "express";
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken'
import userModel from "../models/userModel.js"

const router = express.Router();
router.post ('/signup',async (req,res=>{
     const {name,email,password}=req.body;
      if(!name||!email||!password){
    return res.status(400).json({message:"Please Enter all the fields"})
  try{
  const existingUser=await User.findOne({email})
  if(existingUser){
    return res.status(400).json({message:"User already exists"})
  }
  const salt= await bcrypt.genSalt(10);
  const hashPassword= await bcrypt.hash(password,salt)
 
  

  }
  catch(error){

  }
 
})