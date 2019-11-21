// src/components/profile/profile.js

import React from 'react';
import ProfileGrid from './profile_grid';

class Profile extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            grids: []
        };
    }
    
    componentWillMount() {
        // console.log(this.props.currentUser.id);
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
            <div className="mainBackground">
              <div className="profileGrids">
                {this.state.grids.map((grid) => (
                  <div className="individualGrid">
                    <ProfileGrid grid={grid}/>
                    <h3 className="profileTitle">{grid.title}</h3>
                  </div>
                ))}
              </div>
              
            </div>
          );
        }
      }
}

export default Profile;