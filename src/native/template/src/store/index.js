// @flow

import { AsyncStorage } from 'react-native';
import { persistStore, autoRehydrate } from 'redux-persist';
import { createStore, compose, combineReducers } from 'redux';
import config from '../project.config';

const reducers = combineReducers(config.reducers);

const store = createStore(reducers, compose(autoRehydrate()));

persistStore(store, {
  storage: AsyncStorage,
  blacklist: [],
});

export default store;
