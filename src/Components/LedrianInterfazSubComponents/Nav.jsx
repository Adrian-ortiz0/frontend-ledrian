import React from 'react'
import { useNavigate } from 'react-router'

export const Nav = () => {

  const navigate = useNavigate();

  return (
    <nav className='nav-container'>
        <button onClick={() => navigate('/home')}>
            <img src="/public/home_icon.png" alt="" width={20} height={20}/>
        </button>
        <button>
            <img src="/public/tabs_icon.png" alt="" width={20} height={20}/>
        </button>
        <button>
            <img src="/public/notification_icon.png" alt="" width={20} height={20}/>
        </button>
    </nav>
  )
}
