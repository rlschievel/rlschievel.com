import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from './Components/NavBar/NavBar';
import DropdownButton from './Components/Dropdown/DropdownButton';
import MenuItem from './Components/Dropdown/MenuItem';
import ResultsTable from './Components/ResultsTable/ResultsTable';
import './content.css';

ReactDOM.render(
  <React.StrictMode>
    <NavBar>
      <DropdownButton name="Dropdown #1">
        <MenuItem>MenuItem #1</MenuItem>
        <MenuItem>MenuItem #2</MenuItem>
        <MenuItem>MenuItem #3</MenuItem>
      </DropdownButton>
      <DropdownButton name="Dropdown #2">
        <MenuItem>MenuItem #1</MenuItem>
        <MenuItem>MenuItem #2</MenuItem>
        <MenuItem>MenuItem #3</MenuItem>
      </DropdownButton>
      <DropdownButton name="Dropdown #3">
        <MenuItem>MenuItem #1</MenuItem>
        <MenuItem>MenuItem #2</MenuItem>
        <MenuItem>MenuItem #3</MenuItem>
      </DropdownButton>
    </NavBar>
    <ResultsTable></ResultsTable>
    <p className="content">Welcome to rlschievel.com!</p>
  </React.StrictMode>,
  document.getElementById('root')
);
