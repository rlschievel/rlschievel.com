import React, { Component } from 'react';
import NavButton from './navbutton';
import './navbar.css';

class NavBar extends Component{
  render() {
    return (
      <div className="navbar">
        {this.props.children}
      </div>
    );    
  }
}
export default NavBar;

