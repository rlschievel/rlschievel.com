import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import NavBar from './Components/NavBar';
import NavButton from './Components/NavButton';

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
