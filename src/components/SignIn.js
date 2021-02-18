import React from 'react'
import { useForm } from "react-hook-form"
import { fetchSignIn } from "../apis/index";

const SignIn = () => {
  const { register, handleSubmit } = useForm()

  const onSubmit = async(formValue) => {
    const result = await fetchSignIn(formValue)
    console.log(result.data)
  }

  return (
    <>
      <h1>SignIn</h1>
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
        <button onClick={handleSubmit}>Sign Up</button>
      </form>
    </>
  )
}

export default SignIn
