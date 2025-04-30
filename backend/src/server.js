import express from "express";
import "dotenv/config";
import cookieParser from "cookie-parser";

// * Route imports
import authRoutes from "./routes/userRoute.js";
import { connectDB } from "./config/connectDB.js";

const app = express();

const PORT = process.env.PORT || 5002;

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);

app.listen(PORT, () => {connectDB()
  console.log(`Server running on http://localhost:${PORT}`);
});
