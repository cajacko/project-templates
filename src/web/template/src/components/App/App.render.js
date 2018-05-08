import React from "react";
import config from "@cajacko/project-templates/project.config";
import { Provider } from "react-redux";
import store from "../../store";
import Router from "../Router";

const Root = () => (
  <Provider store={store}>
    <Router routes={config.routes} />
  </Provider>
);

export default Root;
