import React from 'react';

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: this.props.start,
    };
    this.bpm = this.props.bpm;
    this.interval = 60000 / this.bpm;
    this.bpmChanger = this.bpmChanger.bind(this);
    this._tick = this._tick.bind(this);
    this.refreshIntervalId = setInterval(this._tick, this.interval);
  }

  _tick() {
    // debugger;
    if (this.state.time >= 15) {
      this.setState({time: 0});
    } else {
      this.setState({time: (this.state.time + 1)});
    }
  }

  bpmChanger(e) {
    console.log(e.currentTarget.value);
    // debugger
    this.bpm = e.currentTarget.value;
    clearInterval(this.refreshIntervalId);
    let interval = 60000 / this.bpm;
    this._tick();
    this.refreshIntervalId = setInterval(this._tick, interval);
  }

  render() {
    this.props.addTimer(this.state.time);
    console.log(this.bpm);
    return(
      <div className="bpmAdjuster">
        <input onChange={this.bpmChanger}
          className="adjuster"
          type="range"
          min="100"
          max="300"
          step="20"
          defaultValue={this.bpm}></input>
      </div>
    )
  }
}

export default Timer;