import { Menu, MenuItem } from '@mui/material'
import React, { useState } from 'react'

export const NavProfile = () => {

  const [anchorEl, setAnchorEl] = useState("")

  const handleClose = () =>{
    setAnchorEl(null)
  }

  <Menu id='profile-menu' anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
    <MenuItem>Profile</MenuItem>
    <MenuItem>Log out</MenuItem>
  </Menu>

  return (
    <div className='nav_profile-container'>
          <img src="/public/profile_icon.png" alt="" width={20} height={20} />
          
        <button>
        Adrian Ortiz
        </button>
    </div>
  )
}
