import { connect } from 'react-redux';
import Timer from './timer';

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.user,
    newGrid: state.grids.new
  };
};

const mapDispatchToProps = (ownProps, dispatch) => {
  return {
    addTimer: (ele) => dispatch(ownProps.addTimer(ele))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Timer);