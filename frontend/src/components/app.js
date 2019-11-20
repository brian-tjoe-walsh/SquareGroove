// src/components/app.js

import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch, Route } from 'react-router-dom';
// import NavBarContainer from './nav/navbar_container';

import GridPageContainer from './grids/grid_page_container';
// import MainPage from './main/main_page';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import SampleContainer from './sample/sample_container'
// import ProfileContainer from './profile/profile_container';
// import GridComposeContainer from './grids/grid_compose_container';

const App = () => (
  <div>
    {/* <NavBarContainer /> */}
    <Switch>
      <Route exact path="/" component={GridPageContainer} />
      <Route exact path="/sample" component={SampleContainer} />
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />

      {/* <Route exact path="/grids" component={GridsContainer} /> */}
      {/* <ProtectedRoute exact path="/profile" component={ProfileContainer} /> */}
    </Switch>
  </div>
);

export default App;