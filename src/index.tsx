import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import NavBar from './Components/navbar';
import NavButton from './Components/navbutton';

ReactDOM.render(
  <React.StrictMode>
    <NavBar>
      <NavButton>Home</NavButton>
      <NavButton>Test</NavButton>
    </NavBar>
    <p>Welcome to rlschievel.com!</p>
  </React.StrictMode>,
  document.getElementById('root')
);
