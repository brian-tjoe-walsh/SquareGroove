import { connect } from 'react-redux';
import { makeGrid, fetchGrids } from '../../actions/grid_actions';
import  GridPage  from './grid_page';
// import { }

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.user,
    newGrid: state.grids.new
  };
};

const mapDispatchToProps = dispatch => {
  return {
    makeGrid: data => dispatch(makeGrid(data)),
    fetchGrids: () => dispatch(fetchGrids())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GridPage);