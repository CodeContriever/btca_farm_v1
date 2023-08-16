import React from 'react';

const WithdrawalHistory = ({ withdrawalHistory }) => {
  return (
    <div>
      <h2>Withdrawal History</h2>
      <ul>
        {withdrawalHistory.map((history) => (
          <li key={history.id}>{history.amount}</li>
        ))}
      </ul>
    </div>
  );
};

export default WithdrawalHistory;
