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
    var hour:String;
    var minute:String = now.getMinutes() < 10 ? "0" + now.getMinutes().toString() : now.getMinutes().toString();
    var second:String = now.getSeconds() < 10 ? "0" + now.getSeconds().toString() : now.getSeconds().toString();
    var hourNum:number = now.getHours();
    var currentTime:String = minute + ":" + second;

    if (hourNum > 12) {
      hour = (hourNum - 12).toString();
      currentTime = hour + ":" + currentTime + " PM";
    } else {
      hour = hourNum.toString();
      currentTime = hour + ":" + currentTime + " AM";
    }

    return currentTime;
  }

  componentDidMount() {
    this.timer = window.setInterval(this.tick, 10)
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