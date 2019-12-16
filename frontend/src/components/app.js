// src/components/app.js

import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch, Route } from 'react-router-dom';
import GridPageContainer from './grids/grid_page_container';
import SampleContainer from './sample/sample_container';
import IndexContainer from './index/grid_index_container';
import Modal from './modal/modal';
import UserAuth from './session/user_auth';
import ProfileContainer from './profile/profile_container';
import Loading from './loading/loading';
import './css/grid.scss';
import './css/bpm.scss';
import './app.scss';
import './css/modal.scss';
import './css/profile.scss';
import './css/sample.scss';
import './css/dropdown.scss';



const App = () => (
  <div>
    <Modal />
    <Switch>
      <Route exact path="/" component={GridPageContainer} />
      <Route exact path="/sample" component={SampleContainer} />
      <Route exact path="/grids/:gridId" component={GridPageContainer} />
      <Route exact path="/loading" component={Loading} />
      <Route exact path="/index" component={IndexContainer} />
      <AuthRoute exact path="/auth" component={UserAuth} />
      <ProtectedRoute exact path="/profile" component={ProfileContainer} />
    </Switch>
  </div>
);

export default App;