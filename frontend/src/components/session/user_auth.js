import React from 'react';
import { connect } from 'react-redux';
import { openModal, closeModal } from '../../actions/modal_actions';

class UserAuth extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.openLogin();
    }

    render() {
        return (
            <div>

            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    openLogin: () => dispatch(openModal('login'))
})

export default connect(null, mapDispatchToProps)(UserAuth)