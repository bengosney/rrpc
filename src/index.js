import React from 'react';
import ReactDOM from 'react-dom';
import { persistentStore } from 'redux-pouchdb-plus';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import registerServiceWorker from './registerServiceWorker';

import './index.css';

import { Provider } from 'react-redux';
import { createStore, compose, applyMiddleware } from 'redux';
import todoApp from './reducers';
import App from './components/App';

import db from './db';

const applyMiddlewares = applyMiddleware(
  thunk,
  logger
);

const createStoreWithMiddleware = compose(
  applyMiddlewares,
  persistentStore({db})
)(createStore);

const store = createStoreWithMiddleware(todoApp, {});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
