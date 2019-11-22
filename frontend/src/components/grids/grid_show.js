import React from 'react';
import Grid from './grid';
import { Link } from 'react-router-dom';
import $ from 'jquery';
import ProfileContainer from '../profile/profile_container';
import Loading from '../loading/loading';


class GridShow extends React.Component {
  constructor(props) {
    super(props);
    // debugger
    this.state = { grid: null };
  }

  componentDidMount() {
    this.props.fetchGrid(this.props.gridId)
      .then((res) => this.setState({ grid: res.grid.data }));
  }

  toggleSidebar() {
    let sidebar = $('.sidebar');
    sidebar.toggleClass('hidebar');
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
                <li>Index</li>
                <li>Logout</li>
              </ul>
            </nav>
          </div>
          <Grid grid={this.state.grid} />
        </div>
      )
    }
  }
}

export default GridShow;