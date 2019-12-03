// src/components/profile/profile.js

import React from 'react';
import ProfileGrid from './profile_grid';
import {Link} from 'react-router-dom';
import $ from "jquery";
import Loading from '../loading/loading';
import LoginButton from '../session/login_button';


class Profile extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
          grids: []
      };
      this.sidebar = "hidebar";
      this.toggleSidebar = this.toggleSidebar.bind(this);
    }
    
    componentDidMount() {
      // debugger
        // console.log(this.props.currentUser.id);
        this.props.fetchUserGrids(this.props.currentUser.id);
    }

    // componentDidUpdate() {
    //   debugger
    //   // console.log(this.props.currentUser.id);
    //   this.props.fetchUserGrids(this.props.currentUser.id);
    // }

    componentWillReceiveProps(newState) {
        this.setState({ grids: newState.grids });
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
        if (this.state.grids.length === 0) {
          return ( 
          <Loading currentUser = {this.props.currentUser}/> 
          );
        } else {
          // debugger
          return (
            <div className="mainBackground">
              <div className="mainNavBar">
                <div className="menuIcon" onClick={this.toggleSidebar}>
                  <div className="hamburger"></div>
                </div>
                <div className="hidebar">
                  <nav>
                    <ul className="sidebarOptions">
                      <Link to="/profile" >Profile</Link>
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
                <div className="profileGrids">
                  {this.state.grids.map((grid, idx) => {
                  return( <Link to={`/grids/${grid._id}`} key={idx} className="individualGrid">
                      <ProfileGrid grid={grid} key={idx}/>
                      <h3 className="profileTitle">{grid.title}</h3>
                    </Link>)
                  }
                  )}
                </div>
              </div>
              
            </div>
          );
        }
      }
}

export default Profile;