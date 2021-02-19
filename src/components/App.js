import React, { useReducer } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import AppContext from "../contexts/AppContext";
import { authReducer, initialState } from "../reducers/authReducer";
import SignUp from "./auth/SignUp";
import LogIn from "./auth/LogIn";
import Auth from "./auth/Auth";
import Layout from "./Layout/Layout";

const App = () => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  return (
    <>
      <AppContext.Provider value={{ state, dispatch }}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Auth} />
            <Route exact path="/login" component={LogIn} />
            <Route exact path="/sign_up" component={SignUp} />
            <Route path="/" component={Layout} />
          </Switch>
        </BrowserRouter>
      </AppContext.Provider>
    </>
  );
};

export default App;
