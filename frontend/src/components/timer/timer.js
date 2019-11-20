import React from 'react';

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {time: 0};
    setInterval(this._tick.bind(this), 1000);  
  }

  _tick() {
    if (this.state.time >= 15) {
      this.setState({time: 0});
    } else {
      this.setState({time: (this.state.time + 1)});
    }
  }

  render() {
    // debugger
    this.props.addTimer(this.state.time);

    return(
      <div>
        {null}
        {/* {console.log(this.state.time)} */}
      </div>
    )
  }
}

export default Timer;