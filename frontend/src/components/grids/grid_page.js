import React from 'react';
import Grid from './grid';


class GridPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { grid: null};
  } 

  componentDidMount() {
    this.props.fetchGrids()
      .then((res) => this.setState({ grid: res.grids.data[0].grid}));
  }

  render() {
    
    if (!this.state.grid) {
      return null;
    } else {
      debugger
      return(
        <div className="mainBackground">
          <div className="mainGrid">
            <Grid grid={this.state.grid}/>
          </div>
        </div>
      )
    }
  }
}

export default GridPage;