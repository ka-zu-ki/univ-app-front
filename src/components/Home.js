import React, { useContext } from "react";

import AppContext from "../contexts/AppContext";
import LogIn from './auth/LogIn';

const Home = () => {
  const {state} = useContext(AppContext)

  return (
    <>
      {
        state.isLogin ?
          <h1>Home</h1>
        :
          <LogIn/>
      }
    </>
  );
};

export default Home;
