import React, { useState, useEffect } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";
import "./AccountContainer.css";

function AccountContainer() {
  //fetch data
  //GET request
  const [transactions, setTransactions] = useState([]);
  useEffect(() => {
    fetch('http://localhost:8001/transactions')
      .then((response) => response.json())
      .then((transacs) => setTransactions(transacs))
      .catch((err) => console.log(err));
  }, []);

  const handleAddForm = (newForm) => {
    setTransactions([...transactions, newForm]);
  }

  function handleSearch(e) {
    setTransactions((transactions) => {
      return transactions.filter((transaction) => {
        return transaction.description.toLowerCase().includes(e.target.value.toLowerCase());
      });
    });
  }

  const handleDeleteTransaction = (transId) => {
    fetch("http://localhost:8001/transactions/" + transId, {
      method: "DELETE",
    })
      .then(() => {
        setTransactions(transactions.filter((transaction) => transaction.id !== transId));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="account-container">
      <Search handleSearch={handleSearch} />
      <AddTransactionForm handleAddTransaction={handleAddForm} transactions={transactions} />
      <TransactionsList transactions={transactions} handleDeleteTransaction={handleDeleteTransaction} />
    </div>
  );
}

export default AccountContainer;