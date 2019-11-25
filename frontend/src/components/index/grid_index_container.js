// src/components/profile/profile_container.js

import { connect } from 'react-redux';
import { fetchGrids } from '../../actions/grid_actions';
import GridIndex from './grid_index';

const mapStateToProps = (state) => {
  return {
    grids: Object.values(state.grids),
    currentUser: state.session.user,
    // gridId: ownProps.match.params.gridId
  };
};

const mapDispatchToProps = dispatch => {
  return {
    // makeGrid: data => dispatch(makeGrid(data)),
    fetchGrids: () => dispatch(fetchGrids())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GridIndex);