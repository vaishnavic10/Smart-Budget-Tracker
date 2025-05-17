require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const transactionsRoutes = require("./routes/transactions");
const authRoutes = require("./routes/auth");

const app = express(); 

// ✅ Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ✅ Root API Response
app.get("/", (req, res) => {
  res.send("✅ Backend is running!");
});

// ✅ Routes
app.use("/api/auth", authRoutes);
app.use("/api/transactions", transactionsRoutes);

// ✅ MongoDB Connection & Server Start
const PORT = process.env.PORT || 5000;
const mongoURI = process.env.MONGO_URI; 

if (!mongoURI) {
  console.error("❌ ERROR: MongoDB URI is missing. Check .env file!");
  process.exit(1);
}

const connectDB = async () => {
  try {
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("✅ SUCCESS: MongoDB connected!");

    app.listen(PORT, () => console.log(`🚀 SERVER READY at http://localhost:${PORT}`));
  } catch (error) {
    console.error("❌ ERROR: MongoDB connection failed!", error);
    process.exit(1);
  }
};

connectDB();
