require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cryptoRoutes = require("./routes/cryptoRoutes");
const { scheduleCryptoFetch } = require("./utils/cronJob");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Database connection
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Routes
app.use("/api", cryptoRoutes);

// Start cron job
scheduleCryptoFetch();

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
