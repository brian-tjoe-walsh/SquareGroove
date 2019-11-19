import React from 'react';
import Grid from './grid';


class GridPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { grids: null};
  } 

  componentDidMount() {
    this.props.fetchGrids()
      .then((res) => this.setState({grids: res.grid}));
  }

  render() {
    debugger
    
    if (!this.state.grids) {
      return null;
    } else {
      return(
        <div clsasName="mainBackground">
          <div className="mainGrid">
            <Grid grids={this.state.grids}/>
          </div>
        </div>
      )
    }
  }
}

export default GridPage;