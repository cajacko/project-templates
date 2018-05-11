import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { persistStore, autoRehydrate } from "redux-persist";
import config from "../project.config";
import logger from "redux-logger";

const reducers = combineReducers(config.reducers);

const store = createStore(
  reducers,
  compose(applyMiddleware(logger), autoRehydrate())
);

persistStore(store);

export default store;
