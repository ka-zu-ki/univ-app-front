import React from 'react'
import { useForm } from "react-hook-form"
import { fetchSignUp } from "../apis/index";

const SignUp = () => {
  const { register, handleSubmit } = useForm()

  const onSubmit = async(formValue) => {
    const result = await fetchSignUp(formValue)
    console.log(result.data)
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
        <button onClick={handleSubmit}>Sign Up</button>
      </form>
    </>
  )
}

export default SignUp
