import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import IndexComponent from '../components/index';
import * as TodoActions from '../actions';

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
