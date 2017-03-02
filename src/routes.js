import React, { Component } from 'react';
import {
  Header,
  Link,
  nativeHistory,
  Route,
  Router,
  StackRoute,
  withRouter,
  IndexRoute
} from 'react-router-native';

import App from './containers/index';
import Layout from './containers/Layout';



export const routes = (

  <Route path="/" component={App}>
    <IndexRoute component={Layout} />
  </Route>
);