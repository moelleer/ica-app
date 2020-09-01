import React from "react";
import TransactionItem from "./TransactionItem";

const MonthlyTransactions = ({ transactions }) => {
  return (
    <>
      <div className="w-full px-4">
        <h2 className="mb-4">{`${transactions.Year}/${transactions.Month}`}</h2>
      </div>
      {transactions.TransactionForAMonth.map((transaction) => (
        <TransactionItem transaction={transaction} />
      ))}
    </>
  );
};

export default MonthlyTransactions;
