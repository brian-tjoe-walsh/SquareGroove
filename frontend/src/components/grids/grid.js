import React from 'react';
import Cube from './cube';
import Timer from '../timer/timer';
import $ from "jquery";
import SampleContainer from '../sample/sample_container';
// import { timingSafeEqual } from 'crypto';
import Title from './title';
import { Link } from 'react-router-dom';
import LoginButton from '../session/login_button';


class Grid extends React.Component {
  constructor(props) {
    super(props);
    this.grid = this.props.grid.grid;
    this.original = JSON.parse(JSON.stringify(this.props.grid.grid));
    // this.style = this.props.grid.style;
    this.title = this.props.grid.title;
    this.state = {
      style: this.props.grid.style,
      gridReset: false,
      muteIconUrl: "https://mern-notes.s3-us-west-1.amazonaws.com/icons/audio-on.png"
    };
    this.timer = 0;
    this.bpm = 120;
    this.muted = false;
    this.addTimer = this.addTimer.bind(this);
    this.switchPos = this.switchPos.bind(this);
    this.toggleMute = this.toggleMute.bind(this);
    this.titleChange = this.titleChange.bind(this);
    this.rows = {};
    this.drums = {};
    this.samples = {};
    this.sidebar = "hidebar";
    this.toggleSidebar = this.toggleSidebar.bind(this);
    this.switchToPiano = this.switchToPiano.bind(this);
    this.switchToBell = this.switchToBell.bind(this);
    this.switchToVoice = this.switchToVoice.bind(this);
    this.resetGrid = this.resetGrid.bind(this);
  }


  // grab all elements and save to state on render, then just grab from state
  // instead of constantly grabbing a ton of things every second
  
  classDispersion(ele) {
    if (!this.rows[`idx${ele}`]) {
      let col = document.getElementById(`idx${ele}`);
      this.rows[`idx${ele}`] = col;
    }

    let col = this.rows[`idx${ele}`];

    for (let i = 0; i < col.children.length; i++) {
      if (col.children[i].className !== "clicked") {
        $(col.children[i]).addClass("rowLit1");
      } else {
        $(col.children[i]).addClass("bright");
        $(col.children[i]).removeClass("clicked");
      }
    }

    if (!this.drums[`drum${ele}`]) {
      let col = document.getElementById(`drum${ele}`);
      this.drums[`drum${ele}`] = col;
    }

    let drum = this.drums[`drum${ele}`];

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

    if (!this.rows[`idx${temp}`]) {
      let col = document.getElementById(`idx${temp}`);
      this.rows[`idx${temp}`] = col;
    }
    oldCol = this.rows[`idx${temp}`];

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

    if (!this.drums[`drum${temp}`]) {
      let col = document.getElementById(`drum${temp}`);
      this.drums[`drum${temp}`] = col;
    }

    // debugger

    drum = this.drums[`drum${temp}`];

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

    if (!this.rows[`idx${temp}`]) {
      let col = document.getElementById(`idx${temp}`);
      this.rows[`idx${temp}`] = col;
    }
    oldCol = this.rows[`idx${temp}`];

    for (let i = 0; i < oldCol.children.length; i++) {
      if ((oldCol.children[i].className === "ele rowLit2")) {
        $(oldCol.children[i]).removeClass("rowLit2");
        $(oldCol.children[i]).addClass("rowLit3");
      }
    }

    if (!this.drums[`drum${temp}`]) {
      let col = document.getElementById(`drum${temp}`);
      this.drums[`drum${temp}`] = col;
    }

    drum = this.drums[`drum${temp}`];

    for (let i = 0; i < drum.children.length; i++) {
      if ((drum.children[i].className === "ele drumLit2")) {
        $(drum.children[i]).removeClass("drumLit2");
        $(drum.children[i]).addClass("drumLit3");
      }
    }

    temp = ((ele - 3 + 16) % 16);

    if (!this.rows[`idx${temp}`]) {
      let col = document.getElementById(`idx${temp}`);
      this.rows[`idx${temp}`] = col;
    }
    oldCol = this.rows[`idx${temp}`];

    for (let i = 0; i < oldCol.children.length; i++) {
      if ((oldCol.children[i].className === "ele rowLit3")) {
        $(oldCol.children[i]).removeClass("rowLit3");
        $(oldCol.children[i]).addClass("rowLit4");
      }
    }

    if (!this.drums[`drum${temp}`]) {
      let col = document.getElementById(`drum${temp}`);
      this.drums[`drum${temp}`] = col;
    }

    drum = this.drums[`drum${temp}`];

    for (let i = 0; i < drum.children.length; i++) {
      if ((drum.children[i].className === "ele drumLit3")) {
        $(drum.children[i]).removeClass("drumLit3");
        $(drum.children[i]).addClass("drumLit4");
      }
    }

    temp = ((ele - 4 + 16) % 16);
    if (!this.rows[`idx${temp}`]) {
      let col = document.getElementById(`idx${temp}`);
      this.rows[`idx${temp}`] = col;
    }
    oldCol = this.rows[`idx${temp}`];

    for (let i = 0; i < oldCol.children.length; i++) {
      if ((oldCol.children[i].className === "ele rowLit4")) {
        $(oldCol.children[i]).removeClass("rowLit4");
        $(oldCol.children[i]).addClass("rowLit5");
      }
    }

    if (!this.drums[`drum${temp}`]) {
      let col = document.getElementById(`drum${temp}`);
      this.drums[`drum${temp}`] = col;
    }

    drum = this.drums[`drum${temp}`];

    for (let i = 0; i < drum.children.length; i++) {
      if ((drum.children[i].className === "ele drumLit4")) {
        $(drum.children[i]).removeClass("drumLit4");
        $(drum.children[i]).addClass("drumLit5");
      }
    }


    temp = ((ele - 5 + 16) % 16);
    if (!this.rows[`idx${temp}`]) {
      let col = document.getElementById(`idx${temp}`);
      this.rows[`idx${temp}`] = col;
    }
    oldCol = this.rows[`idx${temp}`];

    for (let i = 0; i < oldCol.children.length; i++) {
      if ((oldCol.children[i].className === "ele rowLit5")) {
        $(oldCol.children[i]).removeClass("rowLit5");
      }
    }

    if (!this.drums[`drum${temp}`]) {
      let col = document.getElementById(`drum${temp}`);
      this.drums[`drum${temp}`] = col;
    }

    drum = this.drums[`drum${temp}`];

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

  toggleSidebar() {
    // debugger
    if (this.sidebar === "hidebar") {
      let hidebar = $('.hidebar');
      hidebar.addClass('sidebar');
      hidebar.removeClass('hidebar');
      this.sidebar = "sidebar";
    } else {
      let sidebar = $('.sidebar');
      sidebar.addClass('hidebar');
      sidebar.removeClass('sidebar');
      this.sidebar = "hidebar";
    }
  }

  resetGrid() {
    // debugger
    this.grid = JSON.parse(JSON.stringify(this.original));
    // debugger

    if (!this.state.gridReset) {
      this.setState({ gridReset: true });
    } else {
      this.setState({ gridReset: false });
    }
  }

  // fullyLoaded() {
  //   this.setState({loaded: true});
  // }

  playAudioRow(row) {
    // console.log(row);
    // debugger

    row.forEach((ele, idx) => {
      if (idx <= 14) {
        if (ele === 1) {
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

  toggleMute() {
    
    let samples = document.getElementsByTagName("Audio");
    if (this.muted === false){
      Array.from(samples).forEach( sample => {
        sample.volume = 0;
        this.muted = true;
        this.setState({muteIconUrl: "https://mern-notes.s3-us-west-1.amazonaws.com/icons/audio-off.png"})
      
      })
    } else {
      Array.from(samples).forEach( sample => {
        sample.volume = 1;
        this.muted = false;
        this.setState({muteIconUrl: "https://mern-notes.s3-us-west-1.amazonaws.com/icons/audio-on.png"})
      });
    }
  }
  

  switchPos(coord) {
    let pos = this.grid[coord[0]][coord[1]];
    if (pos === 1) {
      this.grid[coord[0]][coord[1]] = 0;
    } else {
      this.grid[coord[0]][coord[1]] = 1;
    }
    this.props.saveGrid([this.title, this.style, this.grid]);
  }

  titleChange(newTitle) {
    this.title = newTitle;
    this.props.saveGrid([this.title, this.style, this.grid]);
  }

  switchToBell() {
    if (this.state.style !== "bell") {
      this.setState({style: "bell"});
    }
  }

  switchToVoice() {
    if (this.state.style !== "voice") {
      this.setState({ style: "voice" });
    }
  }

  switchToPiano() {
    if (this.state.style !== "piano") {
      this.setState({ style: "piano" });
    }
  }

  render() {
    if (!this.grid) {
      return null;
    } else {
      // debugger
      return (
        <div className="fullOutsideContents">
          <div className="mainNavBar">
            <div className="menuIcon" onClick={this.toggleSidebar}>
              <div className="hamburger"></div>
            </div>
            <div className="hidebar">
              <nav>
                <ul className="sidebarOptions">
                  <Link to="/profile" >Profile</Link>
                  <Link to="/index" className="indexspacing" >Index</Link>
                  <div className="dropdown">
                    <button className="dropbtn">Samples</button>
                    <div className="dropdown-content">
                      <div id="sampleChanges" onClick={this.switchToBell}>Bell</div>
                      <div id="sampleChanges" onClick={this.switchToVoice}>Voice</div>
                      <div id="sampleChanges" onClick={this.switchToPiano}>Piano</div>
                    </div>
                  </div>
                  <li onClick={this.props.commitSave}>Save</li>
                  <li onClick={this.props.delete}>Delete</li>
                  {/* <li onClick={this.resetGrid}>Reset Grid</li> */}
                  <LoginButton />
                </ul>
              </nav>
            </div>
          </div>
          <div className="outsideGrid">
            <div className="gridTitleDisplay">
              <Title title={this.title} titleChange={this.titleChange} />
            </div>
            <div className='mute-btn-container' onClick={this.toggleMute}>
              <div className='mute-btn'>
                  <img src={this.state.muteIconUrl}></img>
              </div>
            </div>
            <div className="gridBackground">
              <div className="mainGrid">
                {this.grid.map((row, idx) => (
                  <div className="row" id={`idx${idx}`} key={idx}>
                    {row.map((ele, idx2) => {
                      if (idx2 < 15) {
                        // debugger
                        return (
                          < Cube
                            row={idx}
                            col={idx2}
                            key={idx2}
                            ele={ele}
                            switchPos={this.switchPos} 
                          />
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
              <Timer start={this.timer} addTimer={this.addTimer} bpm={this.bpm} />
            </div>
            <div className="sampleComponent">
              <SampleContainer instrument={this.state.style} />
            </div>
          </div>
        </div>
      )
    }
  }
}

export default Grid;