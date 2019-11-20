import React from 'react';
import Cube from './cube';
import Timer from '../timer/timer';


class Grid extends React.Component {
  constructor(props) {
    super(props);
    this.grid = this.props.grid;
    this.timer = 0;
    this.addTimer = this.addTimer.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    debugger

    let ele = e.currentTarget;
    // return ($(ele).addClass("here"));
  }

  addTimer(ele) {
    this.timer = ele;
    console.log(this.timer);
  }

  render() {
    debugger
    return (
      <div className="mainGrid">
        <div className="gridBackground">
          <div className="mainGrid">
            {this.grid.map((row, idx) => ( 
              <div className="row" key={idx}>
              {row.map((ele, idx2) => (
                < Cube key={idx2} ele={ele}/>
              ))}
              </div>
            ))}
          </div>
        </div>
        <div>
          <Timer addTimer={this.addTimer} />
        </div>
      </div>
    )
  }
}

export default Grid;