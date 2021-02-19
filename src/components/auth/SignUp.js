import React, {useContext} from 'react'
import { useForm } from "react-hook-form"

import AppContext from "../../contexts/AppContext";
import { fetchSignUp } from "../../apis/index";
import { SIGN_UP } from "../../actions/index";
import { Link } from 'react-router-dom';


const SignUp = () => {
  const { register, handleSubmit } = useForm()
  const {dispatch} = useContext(AppContext)

  const onSubmit = async (formValue) => {
    console.log(formValue)
    const res = await fetchSignUp(formValue)
    console.log(res.data)

    res.status === 200 ?
      dispatch({
        type: SIGN_UP,
        payload: {
          id: res.data.id,
          name: res.data.name,
          email: res.data.email
        }
      })
      : 
        console.log(res.data.error)
  }

  return (
    <>
      <h1>SignUp</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input 
          type="text"
          name="name"
          placeholder="姓名"
          ref={register({ required: true })}
        />
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
          <Link to={'/'}>Sign Up</Link>
        </button>
      </form>
      <Link to={'/login'}>
        登録済みの方はこちらから
      </Link>
    </>
  )
}

export default SignUp
