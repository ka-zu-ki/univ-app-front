import React, { useReducer } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import AppContext from "../contexts/AppContext";
import { authReducer, initialState } from "../reducers/authReducer";
import Home from "./Home";
import SignUp from "./auth/SignUp";
import LogIn from "./auth/LogIn";
import Auth from "./auth/Auth";

const App = () => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  return (
    <>
      <AppContext.Provider value={{ state, dispatch }}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/login" component={LogIn} />
            <Route exact path="/sign_up" component={SignUp} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/" component={Auth} />
          </Switch>
        </BrowserRouter>
      </AppContext.Provider>
    </>
  );
};

export default App;
