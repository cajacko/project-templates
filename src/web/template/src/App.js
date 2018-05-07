import React from "react";
import config from "project-templates/project.config";
import { Provider } from "react-redux";
import store from "./store";

const EntryComponent = config.entryComponent;

const Root = () => (
  <Provider store={store}>
    <EntryComponent />
  </Provider>
);

export default Root;
