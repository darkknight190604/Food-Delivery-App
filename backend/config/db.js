import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect(
        "mongodb+srv://aadisasmit90_db_user:PYh9VvuafwuYeXWb@cluster0.jur2pmu.mongodb.net/?appName=Cluster0"
    );
    console.log("DB CONNECTED");
};