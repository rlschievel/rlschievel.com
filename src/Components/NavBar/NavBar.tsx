import React, { Component } from 'react';
import './NavBar.css';

class NavBar extends Component{
  render() {
    return (
      <div className="navbar">
        <div className="navbuttons">
          {this.props.children}
        </div>
      </div>
    );    
  }
}
export default NavBar;

