import React from 'react';
import Grid from './grid';
import { Link } from 'react-router-dom';
import $ from 'jquery';
import ProfileContainer from '../profile/profile_container';
import Loading from '../loading/loading';
import { deleteGrid } from '../../util/grid_api_util';


class GridShow extends React.Component {
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
    this.delete = this.delete.bind(this);
  }

  componentDidMount() {
    this.props.fetchGrid(this.props.gridId)
      .then((res) => this.setState({ grid: res.grid.data }));
  }

  toggleSidebar() {
    let sidebar = $('.sidebar');
    sidebar.toggleClass('hidebar');
  }

  saveGrid(eles) {
    this.savedGrid = {
      title: eles[0],
      style: eles[1],
      grid: eles[2]
    };

    // debugger;
  }

  commitSave() {
    // debugger
    this.props.makeGrid(this.savedGrid)
      .then(() => this.props.history.push('/profile'));
  }

  delete(){
    debugger;
  }

  render() {

    if (!this.state.grid) {
      // debugger
      return (<Loading />);
    } else {
      // debugger
      return (
        <div className="mainBackground">
          <div className="menuIcon" onClick={this.toggleSidebar}>
            <div className="hamburger"></div>
          </div>
          <div className="sidebar">
            <nav>
              <ul>
                <Link to="/profile">Profile</Link>
                <Link to="/index" >Index</Link>
                <li>Logout</li>
                <Link onClick={this.commitSave} to="/profile">Save</Link>
              </ul>
            </nav>
          </div>
          <Grid grid={this.state.grid} saveGrid={this.saveGrid} />
          <br/>
            {this.toggleSidebar()}
          <div onClick={this.delete}>
            Delete
          </div>
        </div>
      )
    }
  }
}

export default GridShow;