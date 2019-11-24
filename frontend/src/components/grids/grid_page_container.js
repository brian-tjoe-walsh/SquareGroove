import { connect } from 'react-redux';
import { makeGrid, fetchGrid, fetchGrids } from '../../actions/grid_actions';
import  GridPage  from './grid_page';
import { openModal } from '../../actions/modal_actions';
// import { }

const mapStateToProps = (state, ownProps) => {
  let gridId;

  if (ownProps.match.params.gridId) {
    gridId = ownProps.match.params.gridId;
  } else {
    gridId = "5dd87c2aea9c9434c9a0588d";
  }

  return {
    currentUser: state.session.user,
    newGrid: state.grids.new,
    gridId: gridId
  };
};

const mapDispatchToProps = dispatch => {
  return {
    makeGrid: data => dispatch(makeGrid(data)),
    fetchGrids: () => dispatch(fetchGrids()),
    login: () => dispatch(openModal('login')),
    fetchGrid: (gridId) => dispatch(fetchGrid(gridId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GridPage);