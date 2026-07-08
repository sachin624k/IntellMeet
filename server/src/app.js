import express from "express";
import cors from "cors";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import morgan from "morgan";
import authRoutes from "./routes/auth.routes.js";
import errorHandler from "./middlewares/errorHandler.js";

const app = express();

// Middlewares
app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(cookieParser());
app.use(morgan("dev"));
app.use("/api/auth", authRoutes);

// Test Route
app.get("/", (req, res) => {
  res.send("IntellMeet Backend Running...");
});



// Global Error Handler (must be last)
app.use(errorHandler);

export default app;
