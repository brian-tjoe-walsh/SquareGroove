import { connect } from 'react-redux';
import { makeGrid, fetchGrid } from '../../actions/grid_actions';
import GridShow from './grid_show';
// import { }

const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.session.user,
    newGrid: state.grids.new,
    gridId: ownProps.match.params.gridId
  };
};

const mapDispatchToProps = dispatch => {
  return {
    makeGrid: data => dispatch(makeGrid(data)),
    fetchGrid: (gridId) => dispatch(fetchGrid(gridId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GridShow);