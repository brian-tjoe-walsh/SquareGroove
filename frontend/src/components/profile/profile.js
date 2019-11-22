// src/components/profile/profile.js

import React from 'react';
import ProfileGrid from './profile_grid';
import {Link} from 'react-router-dom';
import Loading from '../loading/loading';

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
          return ( 
          <Loading /> 
          );
        } else {
          return (
            <div className="mainBackground">
              <div className="profileGrids">
                {this.state.grids.map((grid) => {
                 return( <Link to={`/grids/${grid._id}`} className="individualGrid">
                    <ProfileGrid grid={grid}/>
                    <h3 className="profileTitle">{grid.title}</h3>
                  </Link>)
                }
                )}
              </div>
              
            </div>
          );
        }
      }
}

export default Profile;