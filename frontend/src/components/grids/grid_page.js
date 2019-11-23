import React from 'react';
import Grid from './grid';
import {Link} from 'react-router-dom';
import $ from 'jquery';
import ProfileContainer from '../profile/profile_container';
import Loading from '../loading/loading';
import LoginButton from '../session/login_button';

class GridPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { grid: null };
    this.toggleSidebar = this.toggleSidebar.bind(this);
  } 

  componentDidMount() {
    this.props.fetchGrids()
      .then((res) => this.setState({ grid: res.grids.data[res.grids.data.length - 2]}));
  }

  toggleSidebar() {
    let sidebar = $('.sidebar');
    let welcome = $('.welcomeMessage');
    sidebar.toggleClass('hidebar');
    welcome.toggleClass('hideMessage');
  }

  render() {
    console.log(this.props);
    if (!this.state.grid) {
      return (<Loading />);
    } else if (this.props.currentUser) {
      return(
        <div className="mainBackground">
          <div className="menuIcon" onClick={this.toggleSidebar}>
            <div className="hamburger"></div>
          </div>
          <div className="welcomeMessage">Welcome, {this.props.currentUser.handle}</div>
          <div>Text</div>
          <div className="sidebar">
            <nav>
              <ul>
                <Link to="/profile">Profile</Link>
                <li>Index</li>
                <LoginButton/>
              </ul>
            </nav>
          </div>
            <Grid grid={this.state.grid}/>
          </div>
      )
    } else {
      return(
        <div className="mainBackground">
          <div className="menuIcon" onClick={this.toggleSidebar}>
            <div className="hamburger"></div>
          </div>
          <div className="sidebar">
            <nav>
              <ul>
                <a onClick={this.props.login}>Profile</a>
                <li>Index</li>
                <LoginButton/>
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