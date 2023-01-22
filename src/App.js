import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './Components/header'
import Banner from './Components/Banner'
import Portfolio from './Components/Portfolio'



function App() {
  return (
    <div className="App">
      <Header />
      <hr />
      <Banner />
      <h2>Portfolio</h2>
      <Portfolio />


    </div>
  );
}

export default App;
