import React from 'react';
import logo from './logo.svg';
import './App.css';
import './bootstrap.min.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import TribeCard from './Components/TribeCard'


function Tribes() {
  return (
    <div className="container">
      <h1 className="text-center">Find your Tribe</h1>
      <hr/>
      <TribeCard />
    </div>
  );
}

export default Tribes;
