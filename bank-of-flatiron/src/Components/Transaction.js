import React from "react";

function Transaction({
  transaction: { id, date, description, category, amount},
  deleteTransaction,
}) {
  return (
    <tr>
      <td>{date}</td>
      <td>{description}</td>
      <td>{category}</td>
      <td>{amount}</td>
      <td>
      <button className="ui segment violet inverted" onClick= {() => deleteTransaction(id)}>Delete</button>
      </td>
    </tr>
  );
}

export default Transaction;