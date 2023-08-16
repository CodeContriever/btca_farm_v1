import React, { useState } from 'react';

const EarningAdjustment = () => {
  const [earningPercentage, setEarningPercentage] = useState(0);

  const handleAdjustEarning = () => {
    // Call an API to update the earning percentage on the server
  };

  return (
    <div>
      <h2>Adjust % Earning</h2>
      <input
        type="number"
        value={earningPercentage}
        onChange={(e) => setEarningPercentage(e.target.value)}
      />
      <button onClick={handleAdjustEarning}>Adjust Earning</button>
    </div>
  );
};

export default EarningAdjustment;
