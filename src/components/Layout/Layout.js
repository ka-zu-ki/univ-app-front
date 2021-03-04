import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "../Home";
import Syllabus from "../Syllabus";
import Lessons from "../Lessons";
import Registration from "../Registration";
import Header from "./Header";

const Layout = () => {
  return (
    <>
      <Header />
      {/* <Home /> */}
      <main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/lessons" component={Lessons} />
          <Route exact path="/lessons/:id" component={Syllabus} />
          <Route exact path="/Registration" component={Registration} />
          <Route exact path="/lessons" component={Lessons} />
        </Switch>
      </main>
    </>
  );
};

export default Layout;
