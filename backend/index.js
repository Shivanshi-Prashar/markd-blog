import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import authRoutes from './routes/auth.js';
import userRoutes from './routes/users.js';
import articleRoutes from './routes/articles.js';
import cors from 'cors'; // ✅ Proper CORS middleware

// Load the environment variables from .env file.
dotenv.config();

// Initialize the express app!
const app = express();
const port = process.env.PORT;

// Connect to MongoDB
mongoose
  .connect(process.env.DB_CONNECTION_STRING)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log("Error connecting to the server:", err);
  });

// Middlewares to parse JSON data
app.use(express.json());

// ✅ Recommended CORS setup
app.use(cors({
  origin: 'http://localhost:5173',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
}));

app.options('*', cors()); // ✅ Handle preflight requests globally

/*
// ❌ Old custom CORS middleware — commenting out as it's not reliable
app.use("*", (req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", `*`);
  res.setHeader("Access-Control-Allow-Headers", "Content-type, Authorization");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, OPTIONS"
  );
  next();
});
*/

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/articles', articleRoutes);

// ✅ Optional: add a health check route
app.get("/", (req, res) => {
  res.send("API is running...");
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
