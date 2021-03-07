import React, { useEffect, useState, useContext } from 'react'

import AppContext from "../../contexts/AppContext";
import Layout from '../Layout/Layout';
import LogIn from './LogIn';
import { fetchCheckLogin } from "../../apis";
import { LOGGED_IN } from "../../actions/index";

const Auth = () => {
  const {state, dispatch } = useContext(AppContext)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    const fetchData = async () => {
  
      const res = await fetchCheckLogin();
      console.log(res.data);

      if (res.data.status === 200) {
        dispatch({ 
          type: LOGGED_IN,
          payload: {
            id: res.data.user.id,
            email: res.data.user.email
          }
        });
      }
      setLoading(false)
    };
    
    fetchData();
    console.log(state.isLogin);
  }, []);

  return (
    <>
      {loading ? (
        <h1>ローディング中・・・</h1>) 
        : (
          state.isLogin?
            <Layout />
            :
            <LogIn />
        )}
    </>
  )
}

export default Auth
