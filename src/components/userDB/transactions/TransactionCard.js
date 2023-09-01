import React from 'react'

const TransactionCard = ({ transaction }) => {
  return (
    <div className="card">
      <div className="card-body">
        <div className="amount">{transaction.amount}</div>
        <div className="date">{transaction.date}</div>
      </div>
      <button className="btn">Go to my Wallet</button>
    </div>
  )
}

export default TransactionCard