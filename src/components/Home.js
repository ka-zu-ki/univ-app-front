import React, { useContext } from "react";

import AppContext from "../contexts/AppContext";
import LogIn from './auth/LogIn';
import TimetableLessons from "./TimetableLessons";

const Home = () => {
  const {state} = useContext(AppContext)

  return (
    <>
      {
        state.isLogin ?
          <>
            <h1>Home</h1>
            <TimetableLessons />
          </>
        :
          <LogIn/>
      }
    </>
  );
};

export default Home;
