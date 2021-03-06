import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "../Home";
import Syllabus from "../Syllabus";
import Lessons from "../Lessons";
import Registration from "../Registration";
import Header from "./Header";
import TimetableLessons from "../TimetableLessons";
import Mylesson from "../Mylesson";
import CreateTodo from "../CreateTodo";
import EditTodo from "../EditTodo";

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
          <Route exact path="/timetableLessons" component={TimetableLessons} />
          <Route exact path="/mylesson/:id" component={Mylesson} />
          <Route exact path="/mylesson/:id/new_todo" component={CreateTodo} />
          <Route exact path="/mylesson/:id/edit_todo" component={EditTodo} />
        </Switch>
      </main>
    </>
  );
};

export default Layout;
