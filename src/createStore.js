import { applyMiddleware, createStore, compose } from 'redux';

import { persistentStore } from 'redux-pouchdb-plus';
 
const db = new PouchDB('dbname');
 

/*
const applyMiddlewares = applyMiddleware(
  thunkMiddleware,
  loggerMiddleware
);
//*/ const applyMiddlewares = {};


const createStoreWithMiddleware = compose(
  applyMiddlewares,
  persistentStore({db})
)(createStore);

const store = createStoreWithMiddleware(finalReducer, initialState);
