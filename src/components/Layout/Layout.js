import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../Home";
import Lessons from "../Lessons";

import Header from "./Header";
const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/lessons" component={Lessons} />
        </Switch>
      </main>
    </>
  );
};

export default Layout;
