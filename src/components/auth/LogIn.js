import React, { useContext } from 'react'
import { useForm } from "react-hook-form"
import { Link } from "react-router-dom";

import AppContext from "../../contexts/AppContext";
import { fetchSignIn } from "../../apis/index";
import { SIGN_IN } from "../../actions/index";

const LogIn = () => {
  const { register, handleSubmit } = useForm()
  const {dispatch} = useContext(AppContext)

  const onSubmit = async(formValue) => {
    const res = await fetchSignIn(formValue)
    console.log(res.data)
    
    res.status === 200 ?
      dispatch({
        type: SIGN_IN
      })
    :
      console.log('失敗')
  }

  return (
    <>
      <h1>LogIn</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input 
          type="email"
          name="email"
          placeholder="メールアドレス"
          ref={register({ required: true })}
        />
        <input 
          type="password"
          name="password"
          placeholder="パスワード"
          ref={register({ required: true })}
        />
        <button>
          <Link to={'/'}>Log In</Link>
        </button>
      </form>
      <Link to={'/sign_up'} >
        新規登録はこちらから
      </Link>
    </>
  )
}

export default LogIn
