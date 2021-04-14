import React, { Component } from 'react';
import Clock from '../Clock/Clock';
import './NavBar.css';

class NavBar extends Component{
  render() {
    return (
      <div className="navbar">
        <div className="navbuttons">
          {this.props.children}
        </div>
        <div className="navclock">
          <Clock />
        </div>        
      </div>
    );    
  }
}
export default NavBar;

