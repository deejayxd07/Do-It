import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import { connect } from 'react-redux';
import { createStore, applyMiddleware, combineReducers, bindActionCreators } from 'redux';
import createLogger from 'redux-logger';
import IndexComponent from '../components/index';
import * as reducers from '../reducers';
import * as TodoActions from '../actions';
const logger = createLogger()
const createStoreWithMiddleware = applyMiddleware(logger)(createStore);
const reducer = combineReducers(reducers);
const store = createStoreWithMiddleware(reducer);


const Layout = ({todos, actions}) => (
  <IndexComponent todos={todos} actions={actions}/>
);



const mapStateToProps = (state) => ({
  todos: state.todos
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(TodoActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
