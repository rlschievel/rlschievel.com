import React from 'react';
import './Dropdown.css';
import DropdownMenu from './DropdownMenu';

interface IProps {
  name: string;
}

interface IState {
  isHovered: boolean;
}

class DropdownButton extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      isHovered: false,
    };
  }

  render() {
    return (
      <div
        className="dropdownbutton"
        onMouseEnter={() => this.setHoverState(true)}
        onMouseLeave={() => this.setHoverState(false)}
      >
        <p>{this.props.name}</p>
        <DropdownMenu isHovered={this.state.isHovered}>
          {this.props.children}
        </DropdownMenu>
      </div>
    );
  }

  setHoverState(isHovering: boolean) {
    this.setState({
      isHovered: isHovering,
    });
  }
}

export default DropdownButton;
