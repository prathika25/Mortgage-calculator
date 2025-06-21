// src/components/InputForm.jsx

import React, { useState } from 'react';

function InputForm({ onCalculate }) {
  const [income, setIncome] = useState('');
  const [propertyValue, setPropertyValue] = useState('');
  const [deposit, setDeposit] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [term, setTerm] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const loanAmount = propertyValue - deposit;
    const monthlyRate = interestRate / 12 / 100;
    const totalMonths = term * 12; 

    if (loanAmount > 0 && monthlyRate > 0 && totalMonths > 0) {
      const monthlyPayment =
        (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, totalMonths)) /
        (Math.pow(1 + monthlyRate, totalMonths) - 1);

      onCalculate(monthlyPayment.toFixed(2));
    } else {
      onCalculate('Invalid input');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Income:</label>
      <input type="number" value={income} onChange={(e) => setIncome(e.target.value)} />

      <label>Property Value:</label>
      <input type="number" value={propertyValue} onChange={(e) => setPropertyValue(e.target.value)} />

      <label>Deposit:</label>
      <input type="number" value={deposit} onChange={(e) => setDeposit(e.target.value)} />

      <label>Interest Rate (%):</label>
      <input type="number" step="0.01" value={interestRate} onChange={(e) => setInterestRate(e.target.value)} />

      <label>Loan Term (Years):</label>
      <input type="number" value={term} onChange={(e) => setTerm(e.target.value)} />

      <button type="submit">Calculate</button>
    </form>
  );
}

export default InputForm;
