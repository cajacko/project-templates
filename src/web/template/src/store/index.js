import { createStore, combineReducers, applyMiddleware } from "redux";
import config from "project-templates/project.config";
import logger from "redux-logger";

const reducers = combineReducers(config.reducers);

const store = createStore(reducers, applyMiddleware(logger));

export default store;
