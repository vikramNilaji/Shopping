import mongoose from "mongoose";
const connectDB=async()=>{
    try {
        const dbConnect = await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB connected successfully: ${dbConnect.connection.host}`);
    } catch (error) {
        console.error(`MongoDB connection error: ${error.message}`);
        process.exit(1);
    }
}

export default connectDB;