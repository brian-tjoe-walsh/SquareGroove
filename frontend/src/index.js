import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
import jwt_decode from 'jwt-decode';

import { setAuthToken } from './util/session_api_util';
import { logout } from './actions/session_actions';

// import { fetchSamples } from './actions/sample_actions';

document.addEventListener('DOMContentLoaded', () => {
  let store;

  if (localStorage.jwtToken) {
    setAuthToken(localStorage.jwtToken);

    const decodedUser = jwt_decode(localStorage.jwtToken);
    const preloadedState = { session: { isAuthenticated: true, user: decodedUser } };

    store = configureStore(preloadedState);

    const currentTime = Date.now() / 1000;

    if (decodedUser.exp < currentTime) {
      store.dispatch(logout());
      window.location.href = '/login';
    }
  } else {
    store = configureStore({});
  }
  const root = document.getElementById('root');
  // console.log(root);
  window.dispatch = store.dispatch;
  window.logout = logout;
  
  const ele = React.createElement(Root, { store: store });
  window.playAudio = () => {
    let audio = document.getElementById("audio");
    audio.load();
    audio.play();
  };

  ReactDOM.render(ele, root);

  // ReactDOM.render(<Root store={store} />, root);
});