import React, { useEffect, useReducer } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import AppContext from "../contexts/AppContext";
import { authReducer, initialState } from "../reducers/authReducer";
import SignUp from "./auth/SignUp";
import LogIn from "./auth/LogIn";
import Auth from "./auth/Auth";
import Layout from "./Layout/Layout";
import Home from "./Home";
import Lessons from "./Lessons";
import Syllabus from "./Syllabus";
import Registration from "./Registration";
import TimetableLessons from "./TimetableLessons";
import Mylesson from "./Mylesson";
import CreateTodo from "./Todo/CreateTodo";
import TodoList from "./Todo/TodoList";

const App = () => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  useEffect(() => {
    console.log(`ログイン状態：${state.isLogin}`)
  }, [state.isLogin])
  

  return (
    <>
      <AppContext.Provider value={{ state, dispatch }}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/login" component={LogIn} />
            <Route exact path="/signUp" component={SignUp} />
            <Route exact path="/" component={Auth} />
            <Route path="/layout" component={Layout} />
            <Auth>
              <Switch>
                {/* <Route path="/layout" component={Layout} /> */}
                <Layout>

                  <Route exact path="/home" component={Home} />
                  <Route exact path="/lessons" component={Lessons} />
                  <Route exact path="/lessons/:id" component={Syllabus} />
                  <Route exact path="/registration" component={Registration} />
                  <Route exact path="/timetableLessons" component={TimetableLessons} />
                  <Route exact path="/mylesson/:id" component={Mylesson} />
                  <Route exact path="/mylesson/todoList" component={TodoList} />
                  <Route exact path="/mylesson/:id/new_todo" component={CreateTodo} />
                </Layout>
                {/* <Route exact path="/mylesson/:id/edit_todo" component={EditTodo} /> */}
              </Switch>
            </Auth>
          </Switch>
        </BrowserRouter>
      </AppContext.Provider>
    </>
  );
};

export default App;
