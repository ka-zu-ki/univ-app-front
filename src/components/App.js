import React, { useEffect, useReducer } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import AppContext from "../contexts/AppContext";
import { authReducer, initialState } from "../reducers/authReducer";
import { fetchCheckLogin } from "../apis";
import { LOGGED_IN } from "../actions/index";
import SignUp from "./auth/SignUp";
import LogIn from "./auth/LogIn";
import Auth from "./auth/Auth";
import Layout from "./Layout/Layout";
import Home from "./Home";
import Lessons from "./Lessons";
import Syllabus from "./Syllabus";
import Registration from "./Registration";

const App = () => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetchCheckLogin();
      console.log(res.data);

      if (res.data === 200) {
        dispatch({ type: LOGGED_IN });
      }
    };

    fetchData();
  });

  return (
    <>
      <AppContext.Provider value={{ state, dispatch }}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Auth} />
            <Route exact path="/login" component={LogIn} />
            <Route exact path="/signUp" component={SignUp} />
            <Route path="/layout" component={Layout} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/lessons" component={Lessons} />
            <Route exact path="/lessons/:id" component={Syllabus} />
            <Route exact path="/Registration" component={Registration} />
            <Route exact path="/lessons" component={Lessons} />
          </Switch>
        </BrowserRouter>
      </AppContext.Provider>
    </>
  );
};

export default App;
