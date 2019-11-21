import React from 'react';

class ProfileGrid extends React.Component {
  constructor(props) {
    super(props);
    this.grid = this.props.grid.grid;
    debugger;
  }

  render() {
    return(
      <div className="profileGrid">
        {this.grid.map((row, idx) => (
          <div className="profileRow" id={`idx${idx}`} key={idx}>
            {row.map((ele, idx2) => {
              // debugger
              return (
                <div key={idx2} className={`profile-${ele}`}>
                </div>
              )
            })}
          </div>
        ))}
      </div>

    )
    
  }
}

export default ProfileGrid;
