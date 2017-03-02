import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import { Provider } from 'react-redux';
import { compose, createStore, applyMiddleware } from 'redux';
import { AsyncStorage } from 'react-native';
import createLogger from 'redux-logger';
import Layout from './Layout';
import allReducers from '../reducers';
import {persistStore, autoRehydrate} from 'redux-persist'

const logger = createLogger()
const store = createStore(
  allReducers,
  undefined,
  compose( 
    applyMiddleware(logger),
    autoRehydrate()
  )
)

persistStore(store, {storage: AsyncStorage});


export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Layout />
      </Provider>
    );
  }
}
