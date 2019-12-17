import React from 'react';
import { logout } from '../../actions/session_actions';
import { connect } from 'react-redux';
import { openModal } from '../../actions/modal_actions';

function LoginButton(props) {
    let user = props.currentUser || {};
    if (Object.keys(user).length !== 0) {
        return (
            <li onClick={props.logout}>Logout</li>
        )
    } else {
        return (
            <li onClick={props.login}>Login</li>
        )
    }
}

const mapStateToProps = state => ({
    currentUser: state.session.user
})

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout()),
    login: () => dispatch(openModal('login'))
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginButton);