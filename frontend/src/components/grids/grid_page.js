import React from 'react';
import Grid from './grid';
// import {Link, Redirect} from 'react-router-dom';
import $ from 'jquery';
// import ProfileContainer from '../profile/profile_container';
import Loading from '../loading/loading';
// import LoginButton from '../session/login_button';
import { deleteGrid } from '../../util/grid_api_util';
import { openModal } from '../../actions/modal_actions';

class GridPage extends React.Component {
  constructor(props) {
    super(props);
    // debugger
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
      .then((res) => {
        // debugger
        if (res !== undefined) {
          // debugger;
          this.setState({ grid: res.grid.data });
          this.savedGrid.style = res.grid.data.style;
        }
        else {
          this.props.history.push('/index');
        }
      });
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.gridId !== this.props.match.params.gridId) {
      this.props.fetchGrid(this.props.match.params.gridId)
        .then((res) => {
          if (res !== undefined) {
            this.setState({ grid: res.grid.data });
            window.location.reload();
          }
          else {
            this.props.history.push('/index');
        }
      });
    }
  }

  toggleSidebar() {
    let sidebar = $('#sidebar');
    if (sidebar) {
      sidebar.toggleClass('hidebar');
    } else {
      sidebar = $('#hidebar');
      sidebar.toggleClass('sidebar');
    }
  }

  saveGrid(eles) {
    this.savedGrid = {
      title: eles[0],
      style: eles[1],
      grid: eles[2]
    };
  }

  commitSave() {
    let user = this.props.currentUser || {};
    if (Object.keys(user).length !== 0) {
      if (!this.savedGrid.style) {
        this.savedGrid.style = "bell";
      }
      this.props.makeGrid(this.savedGrid)
        .then(() => this.props.history.push('/profile'));
    } else {
      this.props.login();
    }
  }

  delete(){
    let user = this.props.currentUser || {};
    if (Object.keys(user).length === 0) {
      this.props.history.push('/');
    } else {
      debugger
      if (this.props.currentUser.id === this.state.grid.user && this.props.gridId !== "5de553f3386002e975b94d2f") {
        deleteGrid(this.props.gridId)
          .then(() => this.props.history.push('/profile'));
      } else {
        this.props.history.push('/');
      }

    }
  }

  render() {
    console.log(this.props);
    if (!this.state.grid) {
      return (<Loading currentUser={this.props.currentUser}/>);
    } else {  
      // debugger    
      return(
        <div className="mainBackground">
          <Grid login = {this.props.login} 
            currentUser={this.props.currentUser} 
            saveGrid={this.saveGrid} 
            grid={this.state.grid} 
            commitSave = {this.commitSave} 
            delete={this.delete}
            history={this.props.history}/>
          <br/>
          { this.toggleSidebar() }
        </div>
      )
    }
  }
}

export default GridPage;