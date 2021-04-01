import React, { Component } from 'react';
import './navbar.css';

class NavButton extends Component{
  render() {
    return (
      <div className="navbutton">
        {this.props.children}
      </div>
    );    
  }
}
export default NavButton;