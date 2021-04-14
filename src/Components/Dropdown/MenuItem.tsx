import React from 'react';
import './Dropdown.css';

interface IProps{
}

interface IState{
  isHovered:boolean,
}

class MenuItem extends React.Component<IProps, IState>{
  constructor(props:IProps){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  render(){
    return(
      <div className="menuitem" onClick={() => this.handleClick}>{this.props.children}</div>
    )
  }

  handleClick(){
    console.log("menuitem clicked");
  }
}

export default MenuItem;