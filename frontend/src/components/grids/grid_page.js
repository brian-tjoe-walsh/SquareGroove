import React from 'react';
import Grid from './grid';
import {Link, Redirect} from 'react-router-dom';
import $ from 'jquery';
import ProfileContainer from '../profile/profile_container';
import Loading from '../loading/loading';
import LoginButton from '../session/login_button';


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
    let sidebar = $('.sidebar');
    let welcome = $('.welcomeMessage');
    sidebar.toggleClass('hidebar');
    welcome.toggleClass('hideMessage');
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
                <Link to="/profile" >Profile</Link>
                <li>Index</li>
                <LoginButton/>
              </ul>
            </nav>
          </div>
          <Grid saveGrid={this.saveGrid} grid={this.state.grid}/>
          { this.toggleSidebar() }
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
          <Grid saveGrid={this.saveGrid} grid={this.state.grid}/>
          { this.toggleSidebar() }
        </div>
      )
    }
  }
}

export default GridPage;