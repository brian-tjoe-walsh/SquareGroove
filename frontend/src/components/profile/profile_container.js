// src/components/profile/profile_container.js

import { connect } from 'react-redux';
import { fetchUserGrids } from '../../actions/grid_actions';
import Profile from './profile';

const mapStateToProps = (state) => {
  return {
    grids: Object.values(state.grids.user),
    currentUser: state.session.user,
    // gridId: ownProps.match.params.gridId
  };
};

const mapDispatchToProps = dispatch => {
  return {
    // makeGrid: data => dispatch(makeGrid(data)),
    fetchUserGrids: id => dispatch(fetchUserGrids(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);