import React from 'react';

interface IProps{
}

interface IState{
  time: String,
}

class Clock extends React.Component<IProps, IState>{
  private timer: number;
  constructor(props: IProps){
    super(props);
    this.state={
      time:this.getCurrentTime(),
    }
    this.tick = this.tick.bind(this);
    this.timer = 0;
  }

  getCurrentTime() {
    var now:Date = new Date();
    var hour:String = now.getHours() < 10 ? "0" + now.getHours().toString() : now.getHours().toString();
    var minute:String = now.getMinutes() < 10 ? "0" + now.getMinutes().toString() : now.getMinutes().toString();
    var second:String = now.getSeconds() < 10 ? "0" + now.getSeconds().toString() : now.getSeconds().toString();
    var currentTime:String = hour + ":" + minute + ":" + second;

    return currentTime;
  }

  componentDidMount() {
    this.timer = window.setInterval(this.tick, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    return(
      <div>
        {this.state.time}
      </div>
    );
  }

  tick(){
    this.setState({
      time: this.getCurrentTime(),
    });
  }
}

export default Clock;