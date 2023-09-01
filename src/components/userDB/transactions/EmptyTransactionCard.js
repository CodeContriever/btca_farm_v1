import React from 'react'

const EmptyTransactionCard = () => {
  return (
    <div className="card">
      <div className="card-body empty">
        <img
          className="empty-image"
          alt="Empty"
          src="data:image/svg+xml;base64,..."
        />
        <p className="empty-text">Empty</p>
        <p className="empty-subtext">You do not have any Farm History</p>
      </div>
    </div>
  )
}

export default EmptyTransactionCard