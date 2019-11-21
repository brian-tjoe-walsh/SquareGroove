import React from 'react';
import Cube from './cube';
import Timer from '../timer/timer';
import BPM from '../bpm/bpm';
import $ from "jquery";
import SampleContainer from '../sample/sample_container';
import { timingSafeEqual } from 'crypto';


class Grid extends React.Component {
  constructor(props) {
    super(props);
    this.grid = this.props.grid.grid;
    this.timer = 0;
    this.bpm = 120;
    this.addTimer = this.addTimer.bind(this);
    this.switchPos = this.switchPos.bind(this);
  }

  classDispersion(ele) {
    let col = document.getElementById(`idx${ele}`);

    for (let i = 0; i < col.children.length; i++) {
      if (col.children[i].className !== "clicked") {
        $(col.children[i]).addClass("rowLit1");
      } else {
        $(col.children[i]).addClass("bright");
        $(col.children[i]).removeClass("clicked");
      }
    }

    let drum = document.getElementById(`drum${ele}`);

    for (let i = 0; i < drum.children.length; i++) {
      if (drum.children[i].className !== "clicked") {
        $(drum.children[i]).addClass("drumLit1");
      } else {
        $(drum.children[i]).addClass("kick");
        $(drum.children[i]).removeClass("clicked");
      }
    }

    let temp;
    let oldCol;

    temp = ((ele - 1 + 16) % 16);
    oldCol = document.getElementById(`idx${temp}`);

    for (let i = 0; i < oldCol.children.length; i++) {
      // debugger
      if ((oldCol.children[i].className === "ele rowLit1")) {
        $(oldCol.children[i]).removeClass("rowLit1");
        $(oldCol.children[i]).addClass("rowLit2");
      } else if (oldCol.children[i].className === "bright") {
        $(oldCol.children[i]).removeClass("bright");
        $(oldCol.children[i]).addClass("clicked");
      }
    }

    drum = document.getElementById(`drum${temp}`);

    for (let i = 0; i < drum.children.length; i++) {
      if ((drum.children[i].className === "ele drumLit1")) {
        $(drum.children[i]).removeClass("drumLit1");
        $(drum.children[i]).addClass("drumLit2");
      } else if (drum.children[i].className === "kick") {
        $(drum.children[i]).removeClass("kick");
        $(drum.children[i]).addClass("clicked");
      }
    }

    temp = ((ele - 2 + 16) % 16);
    oldCol = document.getElementById(`idx${temp}`);

    for (let i = 0; i < oldCol.children.length; i++) {
      if ((oldCol.children[i].className === "ele rowLit2")) {
        $(oldCol.children[i]).removeClass("rowLit2");
        $(oldCol.children[i]).addClass("rowLit3");
      } 
    }

    drum = document.getElementById(`drum${temp}`);

    for (let i = 0; i < drum.children.length; i++) {
      if ((drum.children[i].className === "ele drumLit2")) {
        $(drum.children[i]).removeClass("drumLit2");
        $(drum.children[i]).addClass("drumLit3");
      }
    }

    temp = ((ele - 3 + 16) % 16);
    oldCol = document.getElementById(`idx${temp}`);

    for (let i = 0; i < oldCol.children.length; i++) {
      if ((oldCol.children[i].className === "ele rowLit3")) {
        $(oldCol.children[i]).removeClass("rowLit3");
        $(oldCol.children[i]).addClass("rowLit4");
      }
    }

    drum = document.getElementById(`drum${temp}`);

    for (let i = 0; i < drum.children.length; i++) {
      if ((drum.children[i].className === "ele drumLit3")) {
        $(drum.children[i]).removeClass("drumLit3");
        $(drum.children[i]).addClass("drumLit4");
      }
    }

    temp = ((ele - 4 + 16) % 16);
    oldCol = document.getElementById(`idx${temp}`);

    for (let i = 0; i < oldCol.children.length; i++) {
      if ((oldCol.children[i].className === "ele rowLit4")) {
        $(oldCol.children[i]).removeClass("rowLit4");
        $(oldCol.children[i]).addClass("rowLit5");
      }
    }

    drum = document.getElementById(`drum${temp}`);

    for (let i = 0; i < drum.children.length; i++) {
      if ((drum.children[i].className === "ele drumLit4")) {
        $(drum.children[i]).removeClass("drumLit4");
        $(drum.children[i]).addClass("drumLit5");
      }
    }


    temp = ((ele - 5 + 16) % 16);
    oldCol = document.getElementById(`idx${temp}`);

    for (let i = 0; i < oldCol.children.length; i++) {
      if ((oldCol.children[i].className === "ele rowLit5")) {
        $(oldCol.children[i]).removeClass("rowLit5");
      }
    }

    drum = document.getElementById(`drum${temp}`);

    for (let i = 0; i < drum.children.length; i++) {
      if ((drum.children[i].className === "ele drumLit5")) {
        $(drum.children[i]).removeClass("drumLit5");
      }
    }

  }

  addTimer(ele) {
    if (document.getElementById(`idx${ele}`)) {
      this.classDispersion(ele);
    }
    
    this.timer = ele;
    let audio = document.getElementById(`sample-14`);
    let drum = document.getElementById(`drum-2`);
    if (audio && drum) {
      this.playAudioRow(this.grid[this.timer]);
    }

  }

  playAudioRow(row){
    // console.log(row);
    // debugger
  
    row.forEach( (ele, idx) => {
      if (idx <= 14) {
        if (ele === 1){
          let audio = document.getElementById(`sample-${idx}`);
          audio.currentTime = 0;
          audio.play();
        }
      } else {
        if (ele === 1) {
          let audio = document.getElementById(`drum-${idx - 15}`);
          audio.currentTime = 0;
          audio.play();
        }
      }
    });
  }



  switchPos(coord) {
    let pos = this.grid[coord[0]][coord[1]];
    if (pos === 1) {
      this.grid[coord[0]][coord[1]] = 0;
    } else {
      this.grid[coord[0]][coord[1]] = 1;
    }
  }

  render() {
    if (!this.grid) {
      return null;
    } else {
      // debugger
      return (
        <div className="outsideGrid">
          <div className="gridBackground">
            <div className="mainGrid">
              {this.grid.map((row, idx) => ( 
                <div className="row" id={`idx${idx}`} key={idx}>
                {row.map((ele, idx2) => {
                  if (idx2 < 15) {
                    return (
                      < Cube 
                      row={idx} 
                      col={idx2} 
                      key={idx2} 
                      ele={ele}
                      switchPos={this.switchPos}/>
                    )
                  } 
                })}
                </div>
              ))}
            </div>
            <div className="drumRack"> 
              {this.grid.map((row, idx) => (
                <div className="row" id={`drum${idx}`} key={idx}>
                  {row.map((ele, idx2) => {
                    if (idx2 >= 15) {
                      return (
                        < Cube
                          row={idx}
                          col={idx2}  
                          key={idx2}
                          ele={ele}
                          switchPos={this.switchPos} />
                      )
                    }
                  })}
                </div>
              ))}
            </div>
          </div>
          <div className="bpmComponent">
            <Timer start={this.timer} addTimer={this.addTimer} bpm={this.bpm}/>
          </div>
          <div className="sampleComponent">
            <SampleContainer />
          </div>
        </div>
      )
    }
  }
}

export default Grid;