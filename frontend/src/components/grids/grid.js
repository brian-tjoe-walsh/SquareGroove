import React from 'react';

class Grid extends React.Component {
  constructor(props) {
    super(props);
    this.grid = this.props.grid;
  }

  render() {
    return (
      <div clsasName="mainBackground">
        <div className="mainGrid">

        </div>
      </div>
    )
  }
}

export default Grid;