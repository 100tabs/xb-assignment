import React, { useState } from 'react';
import { loginUser, useAuthDispatch, useAuthState } from '../store';

const Login = (props) => {
  const [password, setPassword] = useState("")
  const [username, setUsername] = useState("");
  const dispatch = useAuthDispatch()
  const { loading, errorMessage } = useAuthState();

  const validateForm = () => {
    return username.length > 0 && password.length > 0
  }
  const handelSubmit = async (e) => {
    e.preventDefault()
    if(!validateForm()) return;
    const data = { username, password }
    try {
      let respose = await loginUser(dispatch, data);
      if (!respose.username) return
      props.history.push('/home')
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="border-1 card mx-auto mt-4 p-4 shadow-sm w-25 w-fixed-25 rounded" >
      <h5 className="card-title text-center font-weight-bold">Login</h5>
      <form onSubmit={handelSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input type="text"
            className="form-control"
            value={username}
            aria-describedby="emailHelp"
            onChange={e => setUsername(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password"
            value={password}
            className="form-control"
            onChange={e => setPassword(e.target.value)} />
        </div>
        <button type="submit" className="btn  btn-lg btn-block btn-outline-info">Login</button>
      </form>
    </div>
  )
}

export default Login
