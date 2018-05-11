// @flow

import React from 'react';
import { Provider } from 'react-redux';
import config from '../../project.config';
import store from '../../store';
import Router from '../Router';

const Root = () => (
  <Provider store={store}>
    <Router routes={config.routes} />
  </Provider>
);

export default Root;
