import mongoose from "mongoose";

// 1. Define the Blueprint (Schema)
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please add a name'],
    },
    email: {
      type: String,
      required: [true, 'Please add an email'],
      unique: true, // Prevents two users from signing up with the same email
      trim: true,   // Automatically removes accidental spaces before/after the email
      lowercase: true,
    },
    password: {
      type: String,
      required: [true, 'Please add a password'],
      minlength: [6, 'Password must be at least 6 characters long'],
    },
    isAdmin: {
      type: Boolean,
      required: true,
      default: false, // Normal users are not admins by default
    },
  },
  {
    timestamps: true, // Automatically creates 'createdAt' and 'updatedAt' fields for us
  }
);

// 2. Create the Model tool based on the schema
const User = mongoose.model('User', userSchema);

// 3. Export it so our controllers can use it later
module.exports = User;