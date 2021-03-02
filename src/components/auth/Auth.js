import React, { useContext } from 'react'

import AppContext from "../../contexts/AppContext";
import Layout from '../Layout/Layout';
import LogIn from './LogIn';

const Auth = () => {
  const {state} = useContext(AppContext)

  console.log(state.isLogin)

  return (
    <>
      {state.isLogin?
        <Layout />
        :
        <LogIn />
      }
    </>
  )
}

export default Auth
