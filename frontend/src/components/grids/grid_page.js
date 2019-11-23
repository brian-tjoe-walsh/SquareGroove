import React from 'react';
import Grid from './grid';
import {Link, Redirect} from 'react-router-dom';
import $ from 'jquery';
import ProfileContainer from '../profile/profile_container';
import Loading from '../loading/loading';


class GridPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { grid: null };
    this.toggleSidebar = this.toggleSidebar.bind(this);
    this.savedGrid = {
      title: null,
      style: null,
      grid: null
    };
    this.saveGrid = this.saveGrid.bind(this);
    this.commitSave = this.commitSave.bind(this);
  } 

  componentDidMount() {
    this.props.fetchGrid(this.props.gridId)
      .then((res) => this.setState({ grid: res.grid.data }));
  }

  toggleSidebar() {
    let sidebar = $('#sidebar');
    sidebar.toggleClass('hidebar');
  }

  saveGrid(eles) {
    this.savedGrid = {
      title: eles[0],
      style: eles[1],
      grid: eles[2]
    };

    debugger;
  }

  commitSave() {
    debugger
    this.props.makeGrid(this.savedGrid)
      .then(() => this.props.history.push('/profile'));
  }

  render() {
    
    if (!this.state.grid) {
      // debugger
      return (<Loading />);
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
                <Link to="/profile" >Profile</Link>
                <li>Index</li>
                <li>Logout</li>
                <li onClick={this.commitSave}>Save</li>
              </ul>
            </nav>
          </div>
          <Grid saveGrid={this.saveGrid} grid={this.state.grid}/>
            { this.toggleSidebar() }
        </div>
      )
    }
  }
}

export default GridPage;