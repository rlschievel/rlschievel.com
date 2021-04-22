import React, { Component } from 'react';
import './NavBar.css';

class NavButton extends Component{
  render() {
    return (
      <div className="navbutton" onClick={() => alert(this.props.children + " Button Pressed.")}>
        {this.props.children}
      </div>
    );    
  }
}
export default NavButton;