import React from 'react';

class Information extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    // debugger
    return (
      <div className="fullOutsideContents">
        <div className="infoScreen">
          <h2 className="infoTitle">Welcome To SquareGroove!</h2>
          <p className="infoLines">SquareGroove is a musical looping game, which allows you to create songs with a few simple steps!</p>
          <p className="infoLines">Simply click on the boxes to set which notes you would like to play.</p>
          <p className="infoLines">Once you're ready, toggle between the Play/Pause button to hear the song you've created!</p>
          <p className="infoLines">Use the BPM Adjuster to make the song faster or slower.</p>
          <p className="infoLines">The button in the top-left corner will unhide the navigation bar, holding links, sample options, as well as the save/delete buttons</p> 
          <p className="infoLinesLow">Note: Certain NavBar buttons will only be shown if you have permission to access those capabilities ( e.g: the delete button )</p> 
          <p className="infoLines">If you'd like to change the title of the Grid, simply click it, type in a new title, and hit Submit</p>
          <p className="infoLines">Once you're ready to save, make sure to login or create an account, and you'll have the grid saved forever!</p>
        </div>
      </div>
    )
  }
}

export default Information;