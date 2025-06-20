// src/components/Results.jsx

import React, { startTransition } from 'react';

function Results({ monthlyPayment }) {
  return (
    <div className="results">
      <h2>Results</h2>
      {monthlyPayment ? (
        <p>Your estimated monthly payment is: <strong>₹{monthlyPayment}</strong></p>
      ) : (
        <p>Fill out the form and click "Calculate" to see your result.</p>
      )}
    </div>
  );
}

export default Results;