import React from 'react';
import Grid from './grid';
// import {Link, Redirect} from 'react-router-dom';
import $ from 'jquery';
// import ProfileContainer from '../profile/profile_container';
import Loading from '../loading/loading';
// import LoginButton from '../session/login_button';
import { deleteGrid } from '../../util/grid_api_util';

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
    this.delete = this.delete.bind(this);
  } 

  componentDidMount() {
    this.props.fetchGrid(this.props.gridId)
      .then((res) => {
        if (res !== undefined) this.setState({ grid: res.grid.data })
        else this.props.history.push('/index')
      })
  }

  componentDidUpdate(prevProps){
    if (prevProps.match.params.gridId !== this.props.match.params.gridId){
        this.props.fetchGrid(this.props.match.params.gridId)
        .then((res) => {
          if (res !== undefined) {
            this.setState({ grid: res.grid.data })
            window.location.reload();
          }
          else this.props.history.push('/index')
        })
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
    this.props.makeGrid(this.savedGrid)
      .then(() => this.props.history.push('/profile'));
  }

  delete(){
    deleteGrid(this.props.gridId)
      .then(() => this.props.history.push('/profile'));
  }

  render() {
    console.log(this.props);
    if (!this.state.grid) {
      return (<Loading />);
    } else {      
      return(
        <div className="mainBackground">
          <Grid saveGrid={this.saveGrid} grid={this.state.grid} commitSave = {this.commitSave} delete={this.delete}/>
          <br/>
          { this.toggleSidebar() }
        </div>
      )
    }
  }
}

export default GridPage;