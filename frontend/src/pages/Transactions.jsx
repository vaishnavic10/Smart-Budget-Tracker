import React, { useState } from "react";
import Navbar from "../components/Navbar/Navbar.jsx";
import "./Transactions.css";
import {
  BsCashStack,
  BsPlusCircleFill,
  BsTrash,
  BsCalendarDate,
  BsCreditCard2Back,
} from "react-icons/bs";

export default function TransactionForm() {
  const [formData, setFormData] = useState({
    type: "expense",
    amount: "",
    category: "",
    description: "",
    date: new Date().toISOString().split("T")[0],
    paymentMethod: "cash",
  });

  const [transactions, setTransactions] = useState([
    {
      id: 1,
      type: "expense",
      amount: 5000,
      category: "Food",
      description: "Grocery Shopping",
      date: "2024-11-15",
      paymentMethod: "card",
    },
    {
      id: 2,
      type: "income",
      amount: 75000,
      category: "Salary",
      description: "Monthly Salary",
      date: "2024-11-01",
      paymentMethod: "bank",
    },
  ]);

  const expenseCategories = [
    "Food",
    "Travel",
    "Shopping",
    "Entertainment",
    "Bills",
    "Healthcare",
    "Education",
    "Other",
  ];
  const incomeCategories = [
    "Salary",
    "Freelance",
    "Investment",
    "Gift",
    "Bonus",
    "Other",
  ];

  const categories =
    formData.type === "expense" ? expenseCategories : incomeCategories;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
      ...(name === "type" && { category: "" }),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.amount || !formData.category) {
      alert("Please fill the required fields!");
      return;
    }

    const newTransaction = {
      id: Date.now(),
      ...formData,
      amount: parseFloat(formData.amount),
    };

    setTransactions([newTransaction, ...transactions]);

    setFormData({
      type: "expense",
      amount: "",
      category: "",
      description: "",
      date: new Date().toISOString().split("T")[0],
      paymentMethod: "cash",
    });

    alert("Transaction added!");
  };

  const handleDelete = (id) => {
    if (window.confirm("Delete this transaction?")) {
      setTransactions(transactions.filter((t) => t.id !== id));
    }
  };

  return (
    <div className="transaction-page">
      <Navbar />

      <div className="transaction-container">
        <h2 className="title">Manage Transactions</h2>

        <div className="transaction-layout">
          {/* ------------------------------------------------------------
               Add Transaction Form 
          ------------------------------------------------------------- */}
          <div className="form-section">
            <div className="form-card glass-card">
              <div className="form-header">
                <BsCashStack size={28} className="header-icon" />
                <h3>Add Transaction</h3>
              </div>

              <form onSubmit={handleSubmit} className="transaction-form">
                {/* Type Selector */}
                <div className="type-selector">
                  <label
                    className={`type-option ${
                      formData.type === "expense" ? "active expense" : ""
                    }`}
                  >
                    <input
                      type="radio"
                      name="type"
                      value="expense"
                      checked={formData.type === "expense"}
                      onChange={handleChange}
                    />
                    <span>💸 Expense</span>
                  </label>

                  <label
                    className={`type-option ${
                      formData.type === "income" ? "active income" : ""
                    }`}
                  >
                    <input
                      type="radio"
                      name="type"
                      value="income"
                      checked={formData.type === "income"}
                      onChange={handleChange}
                    />
                    <span>💰 Income</span>
                  </label>
                </div>

                {/* Amount */}
                <div className="form-group">
                  <label>Amount *</label>
                  <div className="input-with-icon">
                    <span className="input-icon">₹</span>
                    <input
                      type="number"
                      name="amount"
                      value={formData.amount}
                      onChange={handleChange}
                      placeholder="0.00"
                      min="0"
                      required
                    />
                  </div>
                </div>

                {/* Category */}
                <div className="form-group">
                  <label>Category *</label>
                  <select
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select category</option>
                    {categories.map((cat) => (
                      <option key={cat}>{cat}</option>
                    ))}
                  </select>
                </div>

                {/* Description */}
                <div className="form-group">
                  <label>Description</label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    placeholder="Add transaction notes..."
                    rows="3"
                  />
                </div>

                {/* Date */}
                <div className="form-group">
                  <label>Date *</label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                  />
                </div>

                {/* Payment Method */}
                <div className="form-group">
                  <label>Payment Method</label>
                  <select
                    name="paymentMethod"
                    value={formData.paymentMethod}
                    onChange={handleChange}
                  >
                    <option value="cash">Cash</option>
                    <option value="card">Card</option>
                    <option value="upi">UPI</option>
                    <option value="bank">Bank Transfer</option>
                  </select>
                </div>

                <button className="btn-submit">
                  <BsPlusCircleFill size={18} /> Add Transaction
                </button>
              </form>
            </div>
          </div>

          {/* ------------------------------------------------------------
               Transaction List 
          ------------------------------------------------------------- */}
          <div className="list-section">
            <div className="list-card glass-card">
              <div className="list-header">
                <h3>Recent Transactions</h3>
                <span>{transactions.length} total</span>
              </div>

              <div className="transaction-list">
                {transactions.length === 0 ? (
                  <div className="empty-state">
                    <BsCalendarDate size={60} />
                    <p>No transactions yet.</p>
                  </div>
                ) : (
                  transactions.map((t) => (
                    <div
                      key={t.id}
                      className={`transaction-item ${t.type}`}
                    >
                      <div className="transaction-icon">
                        {t.type === "expense" ? "💸" : "💰"}
                      </div>

                      <div className="transaction-details">
                        <div className="transaction-top">
                          <h4>{t.category}</h4>
                          <span className={`amount ${t.type}`}>
                            {t.type === "expense" ? "-" : "+"}₹
                            {t.amount.toLocaleString()}
                          </span>
                        </div>

                        <p className="description">{t.description}</p>

                        <div className="transaction-meta">
                          <span><BsCalendarDate /> {t.date}</span>
                          <span>
                            <BsCreditCard2Back /> {t.paymentMethod.toUpperCase()}
                          </span>
                        </div>
                      </div>

                      <button
                        className="delete-btn"
                        onClick={() => handleDelete(t.id)}
                      >
                        <BsTrash size={18} />
                      </button>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
