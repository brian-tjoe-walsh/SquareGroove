import { connect } from 'react-redux';
import { makeGrid, fetchGrid } from '../../actions/grid_actions';
import  GridPage  from './grid_page';
import { openModal } from '../../actions/modal_actions';
import { openPage } from '../../actions/open_actions';

const mapStateToProps = (state, ownProps) => {
  let gridId;

  if (ownProps && ownProps.match.params.gridId) {
    gridId = ownProps.match.params.gridId;
  } else {
    gridId = "5de553f3386002e975b94d2f";
  }

  return {
    currentUser: state.session.user,
    state: state,
    newGrid: state.grids.new,
    gridId: gridId
  };
};

const mapDispatchToProps = dispatch => {
  return {
    makeGrid: data => dispatch(makeGrid(data)),
    fetchGrid: (gridId) => dispatch(fetchGrid(gridId)),
    login: () => dispatch(openModal('login')),
    openPage: () => dispatch(openPage())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GridPage);