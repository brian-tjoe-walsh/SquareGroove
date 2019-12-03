import React from 'react';
// import { timingSafeEqual } from 'crypto';
import { Link } from 'react-router-dom';
import LoginButton from '../session/login_button';
import $ from "jquery";

// import ProfileGrid from '../profile/profile_grid';

class Loading extends React.Component {
  constructor(props) {
    super(props);
    this.toggleSidebar = this.toggleSidebar.bind(this);
    this.sidebar = "hidebar";
  }

  toggleSidebar() {
    // debugger
    if (this.sidebar === "hidebar") {
      let hidebar = $('.hidebar');
      hidebar.addClass('sidebar');
      hidebar.removeClass('hidebar');
      this.sidebar = "sidebar";
    } else {
      let sidebar = $('.sidebar');
      sidebar.addClass('hidebar');
      sidebar.removeClass('sidebar');
      this.sidebar = "hidebar";
    }
  }

  render() {
    let user = this.props.currentUser || {};
    if (Object.keys(user).length !== 0) {
      return(
        <div className="mainBackground">
          <div className="mainNavBar">
            <div className="menuIcon" onClick={this.toggleSidebar}>
              <div className="hamburger"></div>
            </div>
            <div className="hidebar">
              <nav>
                <ul className="sidebarOptions">
                  <Link to="/index" className="indexspacing" >Index</Link>
                  <Link to="/" className="indexspacing" >Create New Grid</Link>
                  <LoginButton />
                </ul>
              </nav>
            </div>
          </div>
          <div className="gridIndexMainPage">
            <div className="gridIndexTitle">
              {`${this.props.currentUser.handle}'s Grids`}
            </div>
          </div>
        </div>
      )
    } else {
      return(
        <div className="mainBackground">
          <div className="mainNavBar">
            <div className="menuIcon" onClick={this.toggleSidebar}>
              <div className="hamburger"></div>
            </div>
          </div>
        </div>
      )
    }
  }
}

export default Loading;