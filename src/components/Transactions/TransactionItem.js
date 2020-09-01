import React from "react";

const TransactionItem = ({ transaction }) => {
  return (
    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-2 mb-4">
      <div className="max-w-sm rounded border overflow-hidden shadow-lg h-full">
        <div className="px-6 py-4">
          <div className="font-bold text-lg mb-2">
            {transaction.TransactionDate}
          </div>
          <h3 className="block mb-2 text-md">{transaction.MarketingName}</h3>
          <span className="block mb-2 text-sm text-gray-700">
            Kostnad: {transaction.TransactionValue} kr
          </span>
          {transaction.TotalDiscount > 0 && (
            <span className="block mb-2 text-sm text-gray-700">
              Rabatt: {transaction.TotalDiscount} kr
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default TransactionItem;
