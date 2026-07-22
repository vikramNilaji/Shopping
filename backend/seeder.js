import mongoose from 'mongoose';
import dotenv from "dotenv";
import users from "./data/users.js";
import products from "./data/products.js";
import User from './models/userModel.js'; // Notice the extra 's' in userModels
import Product from "./models/productModel.js";
import connectDB from "./config/db.js";

dotenv.config();

connectDB();

const importData = async () => {
    try {
        //Wipe out any existing data to avoid duplicates
        await Product.deleteMany()
        await User.deleteMany();
        //Insert the mock users
        const createdUsers = await User.insertMany(users);
        //Extract the Admin user's id (the first user in our aray)
        const adminUser = createdUsers[0]._id;
        //map through products and assign the admin Id to each one
        const sampleProducts = products.map((product) => {
            return { ...product, user: adminUser };
        });
        //Insert the newly linked products into the database
        await Product.insertMany(sampleProducts);
        console.log("Data Successfully Imported to Atlas!");
        process.exit(); //Exit cleanly
    } catch (error) {
        console.error(`Error importing data : ${error.message}`)
        process.exit(1) //Exit with failure code

    }
};

//Check the terminal flag argument to decide whether to import or destroy

if (process.argv[2] === '-d') {
    destroyData();
}
else {
    importData()
}