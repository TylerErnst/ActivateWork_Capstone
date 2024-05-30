import mongoose from "mongoose";
import "dotenv/config";


const mongoConfig = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Connected to MongoDB");
    } catch (error) {
        console.log("Error connecting to MongoDB:", error);
    }
}

export default mongoConfig;