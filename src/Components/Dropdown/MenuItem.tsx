import React from 'react';
import './Dropdown.css';

interface IProps{
  onClick?:Function,
}

interface IState{
  isHovered:boolean,
}

class MenuItem extends React.Component<IProps, IState>{
  handleClick = () => {
    if(this.props.onClick)
      this.props.onClick()
  }

  render(){
    return(
      <div className="menuitem" onClick={this.handleClick}>{this.props.children}</div>
    )
  }
}

export default MenuItem;