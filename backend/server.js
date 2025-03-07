require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const transactionsRoutes = require("./routes/transactions");
const authRoutes = require("./routes/auth");

const app = express(); 

app.use(express.json()); 
app.use(express.urlencoded({ extended: true })); 
app.use(cors());

app.get("/", (req, res) => {
  res.send("Backend is running!");
});

app.use("/api/auth", authRoutes);
app.use("/api/transactions", transactionsRoutes);

const PORT = process.env.PORT || 5000;
const mongoURI = process.env.MONGO_URI; 

if (!mongoURI) {
  console.error("❌ MongoDB URI is missing. Check .env file!");
  process.exit(1);
}
const connectDB = async () => {
  try {
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("✅ MongoDB connected successfully");

    app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
  } catch (error) {
    console.error("❌ MongoDB connection error:", error);
    process.exit(1);
  }
};

connectDB(); 
