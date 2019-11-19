// src/components/profile/profile.js

import React from 'react';

class Profile extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            grids: []
        };
    }
    
    componentWillMount() {
        console.log(this.props.currentUser.id);
        this.props.fetchUserGrids(this.props.currentUser.id);
    }

    componentWillReceiveProps(newState) {
        this.setState({ grids: newState.grids });
    }   
    
    render() {
        if (this.state.grids.length === 0) {
          return (<div>This user has no Grids</div>)
        } else {
          return (
            <div>
              <h2>User Profile Page!</h2>
              
            </div>
          );
        }
      }
}

export default Profile;