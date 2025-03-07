const express = require("express");
const router = express.Router();
const Transaction = require("../models/Transaction"); 

router.get("/test", (req, res) => {
  res.send("Transactions API is working!");
});

router.post("/add", async (req, res) => {
  console.log("🔹 POST /api/transactions/add hit", req.body);

  try {
    const { userId, title, amount, category, description, transactionType, date } = req.body;

    if (!userId) {
      return res.status(400).json({ error: "User ID is required" });
    }

    if (!date || isNaN(new Date(date).getTime())) {
      return res.status(400).json({ error: "Invalid date format" });
    }

    const newTransaction = new Transaction({
      userId,
      title,
      amount,
      category,
      description,
      transactionType,
      date: new Date(date),
    });

    await newTransaction.save();
    res.status(201).json({ message: "Transaction added successfully", transaction: newTransaction });
  } catch (error) {
    console.error("❌ Error adding transaction:", error);
    res.status(500).json({ error: "Error adding transaction" });
  }
});

module.exports = router;
