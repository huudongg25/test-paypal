import React from 'react';
import logo from './logo.svg';
import './App.css';
import PaypalComponent from './components/buttonPaypal';

function App() {
  return (
    <div className="App">
      <PaypalComponent amount={100}/>
    </div>
  );
}

export default App;
