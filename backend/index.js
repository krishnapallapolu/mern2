import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import authRoutes from "./routes/auth.js";

// Load environment variables
dotenv.config();

// Initialize express app
const app = express();

app.use(cors({
    origin: ["http://localhost:3000", "https://mern2-m74p.vercel.app/"], // Add your Vercel domain here
    methods: ["GET", "POST", "PUT", "DELETE"],
}));
app.use(express.json());

app.use("/api/auth", authRoutes);

// MongoDB connection
const connectDB = async () => {
    try {
        // Connect to MongoDB without deprecated options
        await mongoose.connect(process.env.MONGO_URI);
        console.log("MongoDB connected");
    } catch (err) {
        console.error("MongoDB connection error:", err);
        process.exit(1);
    }
};


// Connect to DB
connectDB();

// Start server
const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
