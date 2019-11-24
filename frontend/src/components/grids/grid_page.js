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

  render() {
    
    if (!this.state.grid) {
      return (<Loading />);
    } else {      
      return(
        <div className="mainBackground">
          <Grid saveGrid={this.saveGrid} grid={this.state.grid}/>
          { this.toggleSidebar() }
        </div>
      )
    }
  }
}

export default GridPage;