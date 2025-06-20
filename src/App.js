// src/App.js

import React, { useState } from 'react';
import './App.css';
import InputForm from './components/InputForm';
import Results from './components/Results';

function App() {
  const [monthlyPayment, setMonthlyPayment] = useState('');

  return (
    <div className="App">
      <h1>Mortgage Calculator</h1>
      <InputForm onCalculate={setMonthlyPayment} />
      <Results monthlyPayment={monthlyPayment} />
    </div>
  );
}

export default App;