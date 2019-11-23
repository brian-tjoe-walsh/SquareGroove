import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
import jwt_decode from 'jwt-decode';

import { setAuthToken } from './util/session_api_util';
import { logout } from './actions/session_actions';

<<<<<<< HEAD
// var input = document.getElementById("myInput");

// // Execute a function when the user releases a key on the keyboard
// input.addEventListener("keyup", function (event) {
//   // Number 13 is the "Enter" key on the keyboard
//   if (event.keyCode === 13) {
//     // Cancel the default action, if needed
//     event.preventDefault();
//     // Trigger the button element with a click
//     document.getElementById("myBtn").click();
//   }
// });
=======
import { fetchSamples } from './actions/sample_actions';
>>>>>>> master

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
  console.log(root);
  window.dispatch = store.dispatch;
  window.logout = logout;
  
  const ele = React.createElement(Root, { store: store });
  window.playAudio = () => {
    let audio = document.getElementById("audio");
    audio.load();
    audio.play();
  }

  ReactDOM.render(ele, root);

  // ReactDOM.render(<Root store={store} />, root);
});