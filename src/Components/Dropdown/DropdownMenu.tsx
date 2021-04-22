import React from 'react';
import './Dropdown.css';

interface IProps{
  isHovered: boolean,
}

interface IState{
}

class DropdownMenu extends React.Component<IProps, IState> {
  constructor(props: IProps){
    super(props)
    this.setHoverState=this.setHoverState.bind(this);
  }

  render() {
    return (
      <div
        className="dropdownmenu"
        onMouseEnter={() => this.setHoverState(true)}
        onMouseLeave={() => this.setHoverState(false)}
        style={{visibility: this.props.isHovered ? 'visible' : 'hidden'}}
      >
        {this.props.children}
      </div>
    );
  }

  setHoverState(isHovering:boolean){
    this.setState({
      isHovered: isHovering
    })
  }
}

export default DropdownMenu;