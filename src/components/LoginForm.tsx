import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form';

type FormValues = {
  email: string;
  password: string;
}

const LoginForm = ({ loginHandler }: { loginHandler: Function; }) => {
  // const [email, setEmail] = useState('')
  // const [password, setPassword] = useState('')
  // const [message, setMessage] = useState('')
  const { register, handleSubmit: onSubmit } = useForm<FormValues>();

  // const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  const handleSubmit: SubmitHandler<FormValues> = async (data) => {
    const response = await fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      // body: JSON.stringify({ email, password }),
      body: JSON.stringify(data),
    });
    // const data = await response.json()
    const responseData = await response.json()
    loginHandler(responseData)
    // setMessage(data.message);
  };

  return (
    // <form onSubmit={handleSubmit}>
    //   <label>
    //     Email:
    //     <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
    //   </label>
    //   <label>
    //     Password:
    //     <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
    //   </label>
    //   <button type="submit">Login</button>
    //   {message && <p>{message}</p>}
    // </form>
    <form onSubmit={onSubmit(handleSubmit)}>
      <label htmlFor="email">Username:</label>
      <input id="email"
        {...register("email", {
          required: "이메일은 필수 입력입니다.",
          pattern: {
            value: /\S+@\S+\.\S+/,
            message: "이메일 형식에 맞지 않습니다.",
        }})}
      />

      <label htmlFor="password">Password:</label>
      <input id="password" type="password"
        {...register("password", {
          required: "비밀번호는 필수 입력입니다.",
          minLength: {
            value: 8,
            message: "8자리 이상 비밀번호를 사용하세요.",
        }})} 
      />

      <button type="submit">Submit</button>
    </form>
  )
}

export default LoginForm