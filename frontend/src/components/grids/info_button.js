import React from 'react';
import { connect } from 'react-redux';
import { openModal } from '../../actions/modal_actions';

function InfoButton(props) {
  return (
    <div className="infoButton" onClick={props.info}>
      <i className="fas fa-question"></i>
    </div>
  )
}

const mapStateToProps = state => ({
  currentUser: state.session.user
})

const mapDispatchToProps = dispatch => ({
  info: () => dispatch(openModal('info'))
})

export default connect(mapStateToProps, mapDispatchToProps)(InfoButton);