import React from 'react';

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: this.props.start,
      pause: "play",
      random: "random",
      begun: false
    };
    this.bpm = this.props.bpm;
    this.interval = 60000 / this.bpm;
    this.bpmChanger = this.bpmChanger.bind(this);
    this._tick = this._tick.bind(this);
    this.pause = this.pause.bind(this);
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
    // console.log(e.currentTarget.value);
    // debugger
    if (this.state.pause === "play") {
      this.bpm = e.currentTarget.value;
      if (this.state.random === "random") {
        this.setState({random: "notRandom"});
      } else {
        this.setState({random: "random"});
      }
    } else {
      this.bpm = e.currentTarget.value;
      clearInterval(this.refreshIntervalId);
      let interval = 60000 / this.bpm;
      this._tick();
      this.refreshIntervalId = setInterval(this._tick, interval);
    }
  }

  pause() {
    if (this.refreshIntervalId) {
      clearInterval(this.refreshIntervalId);
      this.refreshIntervalId = null;
      this.setState({pause: "play"});
    } else {
      if (this.state.time === 0 && !this.state.begun) {
        this.setState({begun: true});
        let interval = 60000 / this.bpm;
        this.refreshIntervalId = setInterval(this._tick, interval);
        this.setState({pause: "pause"});
      } else {
        this._tick();
        let interval = 60000 / this.bpm;
        this.refreshIntervalId = setInterval(this._tick, interval);
        this.setState({ pause: "pause" });
      }
    }
  }

  render() {
    if (this.state.pause === "pause") {
      this.props.addTimer(this.state.time);
      // console.log(this.bpm);
      return(
        <div className="bpmAdjuster">
          <button className="pauseFunction" onClick={this.pause}>{this.state.pause}</button>
          <div className="bpmContainer">
            <p className="bpmDisplay">BPM: {this.bpm}</p>
            <input onChange={this.bpmChanger}
              className="adjuster"
              type="range"
              min="100"
              max="300"
              step="20"
              defaultValue={this.bpm}></input>
          </div>
        </div>
      )
    } else {
      return (
        <div className="bpmAdjuster">
          <button className="pauseFunction" onClick={this.pause}>{this.state.pause}</button>
          <div className="bpmContainer">
            <p className="bpmDisplay">BPM: {this.bpm}</p>
            <input onChange={this.bpmChanger}
              className="adjuster"
              type="range"
              min="100"
              max="300"
              step="20"
              defaultValue={this.bpm}></input>
          </div>
        </div>
      )
    }
  }
}

export default Timer;