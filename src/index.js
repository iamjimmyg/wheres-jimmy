import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
//import { HashRouter } from 'react-router-dom'

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import reducers from './reducers';

import registerServiceWorker from './registerServiceWorker';

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>

      <App />


  </Provider>
  , document.getElementById('root'));
registerServiceWorker();
