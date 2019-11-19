import React from 'react';

class Grid extends React.Component {
  constructor(props) {
    super(props);
    this.grid = this.props.grid;
  }

  render() {
    debugger
    return (
      <div className="mainBackground">
        <div className="mainGrid">
          {this.grid.map(row => ( 
            <div className="row">
            {row.map(ele => (
              <div className="ele">{ele}</div>
            ))}
            </div>
          ))}
        </div>
      </div>
    )
  }
}

export default Grid;