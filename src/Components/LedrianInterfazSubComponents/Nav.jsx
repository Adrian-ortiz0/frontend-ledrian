import React from 'react'

export const Nav = () => {
  return (
    <nav className='nav-container'>
        <button>
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
