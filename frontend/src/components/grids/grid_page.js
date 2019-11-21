import React from 'react';
import Grid from './grid';
import $ from 'jquery';

class GridPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { grid: null};
  } 

  componentDidMount() {
    this.props.fetchGrids()
      .then((res) => this.setState({ grid: res.grids.data[res.grids.data.length - 1]}));
  }

  toggleSidebar() {
    let sidebar = $('.sidebar');
    sidebar.toggleClass('hidebar')
  }

  render() {
    
    if (!this.state.grid) {
      // debugger
      return null;
    } else {
      // debugger
      return(
        <div className="mainBackground">
          <div className="menuIcon" onClick={this.toggleSidebar}>
            <div className="hamburger"></div>
          </div>
          <div className="sidebar">
            <nav>
              <ul>
                <li>Profile</li>
                <li>Index</li>
                <li>Logout</li>
              </ul>
            </nav>
          </div>
            <Grid grid={this.state.grid}/>
        </div>
      )
    }
  }
}

export default GridPage;