import React from 'react';
import $ from "jquery";


class Cube extends React.Component {
  constructor(props) {
    super(props);
    this.state= {time: this.props.start};
    setInterval(this._tick.bind(this), (60000 / this.props.bpm));
  }

  _tick() {
    if (this.state.time >= 15) {
      this.setState({ time: 0 });
    } else {
      this.setState({ time: (this.state.time + 1) });
    }
  }


  render() {
    // console.log(this.props.bpm);
    return ( null
      // <div className="bpmAdjuster">
      //   <input onChange={this.props.bpmChanger} 
      //     className="adjuster" 
      //     type="range" 
      //     min="40" 
      //     max="240" 
      //     defaultValue={this.props.bpm}></input>
      // </div>
    )
  }
}

export default Cube;