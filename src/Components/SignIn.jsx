import React from 'react'
import { useNavigate } from 'react-router';

export const SignIn = () => {

    const navigate = useNavigate();
  return (
    <div className='sign_background bg-gradient-to-r from-black via-gray-700 to-black bg-[length:200%_200%] h-screen flex justify-center items-center'>
    <aside className='sign_aside w-1/2 flex justify-center items-center h-screen border border-black/10'>
        <div>
            <h1 className='text-white text-4xl'>Ledrian</h1>
        </div>
    </aside>
    <main className='sign_container w-1/2 flex justify-around items-center h-screen flex-col bg-white'>
        <h1 className='text-3xl mb-6'>Sign in</h1>
        <form className='sign_form w-full flex flex-col items-center gap-5'>
            <div className='flex'>
                <input type="text" placeholder="name" className="border border-gray-300 p-2 rounded-lg w-4/5" />
                <input type="text" placeholder="lastname" className="border border-gray-300 p-2 rounded-lg w-4/5" />
            </div>
            <input type="email" placeholder="email" className="border border-gray-300 p-2 rounded-lg w-4/5" />
            <input type="text" placeholder="username" className="border border-gray-300 p-2 rounded-lg w-4/5" />
            <input type="password" placeholder="password" className="border border-gray-300 p-2 rounded-lg w-4/5" />
            <input type="password" placeholder="repeatPassword" className="border border-gray-300 p-2 rounded-lg w-4/5" />
            <button className="bg-blue-500 text-white py-2 px-4 rounded-lg w-4/5">Login</button>
        </form>
        <p className="mt-4">Do you already have an account? <a href="#" className="text-blue-500 hover:underline" onClick={() => navigate("../login")}>Go login</a></p>
    </main>
</div>
  )
}
