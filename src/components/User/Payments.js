import React, { useContext, useEffect } from "react";
import UserContext from "../../context/user/userContext";
import MonthlyTransactions from "../Transactions/MonthlyTransactions";

const Payments = () => {
  const userContext = useContext(UserContext);
  const { getTransactions, transactions } = userContext;

  useEffect(() => {
    getTransactions();
    //eslint-disable-next-line
  }, []);

  if (!transactions) {
    return <p className="text-lg text-gray-700">Hämtar köp...</p>;
  }

  return (
    <>
      <h1 className="text-xl mb-4">Mina köp</h1>
      <div className="flex flex-wrap mb-4 -mx-4">
        {transactions.TransactionSummaryByMonth.map(
          (transactionSummaryByMonth) => (
            <MonthlyTransactions transactions={transactionSummaryByMonth} />
          )
        )}
      </div>
    </>
  );
};

export default Payments;
