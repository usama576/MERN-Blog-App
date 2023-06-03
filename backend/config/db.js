const mongoose = require("mongoose");

const connectDB = async ()=>{
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log("MongoDB Databse Connected");
    } catch (error) {
        console.log("Database connection error");
    }
};
module.exports = connectDB;