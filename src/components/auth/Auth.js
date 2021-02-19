import React, { useContext } from 'react'

import AppContext from "../../contexts/AppContext";
import Home from '../Home';
import LogIn from './LogIn';

const Auth = () => {
  const {state} = useContext(AppContext)

  return (
    <>
      {state.isLogin?
        <Home />
        :
        <LogIn />
      }
    </>
  )
}

export default Auth
