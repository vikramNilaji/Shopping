import mongoose from 'mongoose';

const userSchema=new mongoose.Schema(
  {
    name:{
      type:String,
      required:[true,"Add a user name"]
    },
    email:{
      type:String,
      required:[true,"Add an user email"],
      unique:true,
      trim:true,
      lowercase:true,

    },
    password:{
      type:String,
      required:[true,"Please add a password"],
      minlength:[6,"minimum 6 characters required"]
    },
    isAdmin:{
      type:Boolean,
      required:true,
      default:false
    }
  },{
    temestamps:true,
  }
)

const User=mongoose.model("User",userSchema)

export default User