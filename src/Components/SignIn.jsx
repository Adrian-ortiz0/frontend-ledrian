import React from 'react'
import { useNavigate } from 'react-router';

export const SignIn = () => {

    const navigate = useNavigate();
  return (
    <div className='sign_background'>
        <aside className='sign_aside'>
            <div>
                <h1>Ledrian</h1>
            </div>
        </aside>
        <main className='sign_container'>
        <h1>Sign in</h1>
            <form className='sign_form'>
                <input type="text" placeholder="username" />
                <input type="password" placeholder="password" />
                <button>Login</button>
            </form>
            <p>Do you already have an account? <a href="" onClick={() => navigate("../login")}>Go login</a></p>
        </main>

    </div>
  )
}
