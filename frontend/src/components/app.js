// src/components/app.js

import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch, Route } from 'react-router-dom';
// import NavBarContainer from './nav/navbar_container';

import GridPageContainer from './grids/grid_page_container';
// import MainPage from './main/main_page';
// import LoginFormContainer from './session/login_form_container';
// import SignupFormContainer from './session/signup_form_container';
import SampleContainer from './sample/sample_container';
import Modal from './modal/modal';
import UserAuth from './session/user_auth';
import ProfileContainer from './profile/profile_container';
import Loading from './loading/loading';
// import GridComposeContainer from './grids/grid_compose_container';
import './css/grid.css';
import './css/bpm.css';
import './app.css';
import './css/modal.css';
import './css/profile.css';
import './css/sample.css';
import './css/dropdown.css';



const App = () => (
  <div>
    {/* <NavBarContainer /> */}
    <Modal />
    <Switch>
      <Route exact path="/" component={GridPageContainer} />
      <Route exact path="/sample" component={SampleContainer} />
      <Route exact path="/grids/:gridId" component={GridPageContainer} />
      <Route exact path="/loading" component={Loading} />
      {/* <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} /> */}
      <AuthRoute exact path="/auth" component={UserAuth} />
      <ProtectedRoute exact path="/profile" component={ProfileContainer} />
      {/* <Route exact path="/grids" component={GridsContainer} /> */}
      {/* <ProtectedRoute exact path="/profile" component={ProfileContainer} /> */}
    </Switch>
  </div>
);

export default App;