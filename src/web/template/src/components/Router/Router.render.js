import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

const Router = ({ routes }: Props) => (
  <BrowserRouter>
    <Switch>{routes.map(r => <Route {...r} key={r.path || ""} />)}</Switch>
  </BrowserRouter>
);

export default Router;
