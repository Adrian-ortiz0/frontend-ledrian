import React from 'react'
import "../styles.css"
import { useNavigate } from 'react-router'

export const Login = () => {

    const navigate = useNavigate();

  return (
<div className="min-h-screen flex items-center justify-center relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-r from-black via-gray-700 to-black bg-[length:200%_200%]"></div>

    <div className="backdrop-blur-lg bg-white/10 p-8 rounded-2xl shadow-lg max-w-sm w-full text-white relative z-10">
        <h1 className="text-2xl font-bold text-center">Login</h1>
        <form className="flex flex-col space-y-4 gap-4 pt-6">
            <input type="text" placeholder="username" className="px-4 py-2 rounded-lg bg-white/20 backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-white/50" />
            <input type="password" placeholder="password" className="px-4 py-2 rounded-lg bg-white/20 backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-white/50" />
            <button className="bg-white-mt-8/30 hover:bg-white/40 transition p-2 rounded-lg font-semibold" onClick={() => navigate("../home")}>Login</button>
        </form>
        <p className="text-center mt-6">
            Don't have an account? <a href="" onClick={() => navigate("../signin")} className="text-white font-semibold underline">Sign up. It's free</a>
        </p>
    </div>
</div>

  )
}
