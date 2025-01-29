import React from 'react'
import "../styles.css"
import { useNavigate } from 'react-router'

export const Login = () => {

    const navigate = useNavigate();

  return (
    <div className='login_background'>
        <div className='login_container'>
            <h1>Login</h1>
            <form className='login_form'>
                <input type="text" placeholder="username" />
                <input type="password" placeholder="password" />
                <button onClick={() => navigate("../home")}>Login</button>
            </form>
            <p>Don't have an account? <a href="" onClick={() => navigate("../signin")}>Sign up. I'ts free</a></p>
        </div>
    </div>
  )
}
