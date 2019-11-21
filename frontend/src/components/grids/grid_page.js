import React from 'react';
import Grid from './grid';


class GridPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { grid: null};
  } 

  componentDidMount() {
    this.props.fetchGrids()
      .then((res) => this.setState({ grid: res.grids.data[res.grids.data.length - 1]}));
  }

  render() {
    
    if (!this.state.grid) {
      // debugger
      return null;
    } else {
      // debugger
      return(
        <div className="mainBackground">
            <Grid grid={this.state.grid}/>
        </div>
      )
    }
  }
}

export default GridPage;