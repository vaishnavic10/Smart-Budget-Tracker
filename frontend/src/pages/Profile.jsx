import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/Profile.css";

const Profile = () => {
  const [userId, setUserId] = useState(null);
  const [transactions, setTransactions] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const [formData, setFormData] = useState({
    title: "",
    amount: "",
    category: "",
    description: "",
    transactionType: "",
    date: "",
  });

  useEffect(() => {
    const storedUserId = localStorage.getItem("userId");
    if (storedUserId) {
      setUserId(storedUserId);
      fetchTransactions(storedUserId);
    } else {
      console.warn("⚠️ No userId found in localStorage.");
    }
  }, []);

  const fetchTransactions = async (id) => {
    try {
      const response = await axios.get(`http://localhost:5000/api/transactions/${id}`);
      setTransactions(response.data || []);
    } catch (error) {
      console.error("❌ Error fetching transactions:", error);
      setTransactions([]);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!userId) {
      alert("User ID is missing. Please log in again.");
      return;
    }

    if (!formData.title || !formData.amount || !formData.category || !formData.transactionType || !formData.date) {
      alert("All fields are required!");
      return;
    }

    const formattedDate = new Date(formData.date).toISOString();
    const transactionData = { ...formData, userId, date: formattedDate };

    try {
      const response = await axios.post("http://localhost:5000/api/transactions/add", transactionData);
      setTransactions((prevTransactions) => [response.data.transaction, ...prevTransactions]);

      // Reset form and close modal
      setFormData({
        title: "",
        amount: "",
        category: "",
        description: "",
        transactionType: "",
        date: "",
      });

      setShowModal(false);
    } catch (error) {
      console.error("❌ Error adding transaction:", error.response?.data || error.message);
      alert(`Error adding transaction: ${error.response?.data?.error || error.message}`);
    }
  };

  return (
    <div className="profile-container">
      <h1>Profile</h1>
      <button onClick={() => setShowModal(true)}>Add New</button>

      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <h2>Add Transaction Details</h2>
            <form onSubmit={handleSubmit}>
              <input type="text" name="title" placeholder="Enter Transaction Name" value={formData.title} onChange={handleChange} required />
              <input type="number" name="amount" placeholder="Enter Amount" value={formData.amount} onChange={handleChange} required />
              <select name="category" value={formData.category} onChange={handleChange} required>
                <option value="">Choose...</option>
                <option value="Food">Food</option>
                <option value="Rent">Rent</option>
                <option value="Salary">Salary</option>
              </select>
              <input type="text" name="description" placeholder="Enter Description" value={formData.description} onChange={handleChange} />
              <select name="transactionType" value={formData.transactionType} onChange={handleChange} required>
                <option value="">Choose...</option>
                <option value="income">Income</option>
                <option value="expense">Expense</option>
              </select>
              <input type="date" name="date" value={formData.date} onChange={handleChange} required />

              <button type="submit">Submit</button>
              <button type="button" onClick={() => setShowModal(false)}>Close</button>
            </form>
          </div>
        </div>
      )}

      <h2>Transactions</h2>
      {transactions.length === 0 ? (
        <p>No transactions found.</p>
      ) : (
        <table className="transaction-table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Title</th>
              <th>Amount</th>
              <th>Category</th>
              <th>Description</th>
              <th>Type</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((tx) => (
              <tr key={tx._id}>
                <td>{tx.date ? new Date(tx.date).toLocaleDateString() : "Invalid Date"}</td>
                <td>{tx.title}</td>
                <td>${tx.amount}</td>
                <td>{tx.category}</td>
                <td>{tx.description}</td>
                <td>{tx.transactionType}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Profile;
