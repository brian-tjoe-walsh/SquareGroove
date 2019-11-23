import { connect } from 'react-redux';
import { makeGrid, fetchGrids } from '../../actions/grid_actions';
import  GridPage  from './grid_page';
import { openModal } from '../../actions/modal_actions';
// import { }

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.session.isAuthenticated,
    newGrid: state.grids.new,
    currentUser: state.session.currentUser
  };
};

const mapDispatchToProps = dispatch => {
  return {
    makeGrid: data => dispatch(makeGrid(data)),
    fetchGrids: () => dispatch(fetchGrids()),
    login: () => dispatch(openModal('login'))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GridPage);