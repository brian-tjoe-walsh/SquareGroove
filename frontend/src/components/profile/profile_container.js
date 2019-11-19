// src/components/profile/profile_container.js

import { connect } from 'react-redux';
import { fetchUserGrids } from '../../actions/grid_actions';
import Profile from './profile';

const mapStateToProps = (state) => {
  return {
    grids: Object.values(state.grids.user),
    currentUser: state.session.user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchUserGrids: id => dispatch(fetchUserGrids(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);