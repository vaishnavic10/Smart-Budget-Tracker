const mongoose = require("mongoose");

const TransactionSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  amount: {
    type: Number,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  description: String,
  transactionType: {
    type: String,
    enum: ["income", "expense"],
    required: true
  },
  date: {
    type: Date,
    required: true
  }
});

module.exports = mongoose.model("Transaction", TransactionSchema);
