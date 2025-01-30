import { IconButton, Menu, MenuItem } from '@mui/material';
import MoreVertIcon from "@mui/icons-material/MoreVert";
import React, { useState } from 'react';
import { use } from 'react';
import { useNavigate } from 'react-router';

export const NavProfile = () => {

  const navigate = useNavigate();

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  return (
    <div className='nav_profile-container'>
      <img src="/public/profile_icon.png" alt="profile icon" width={20} height={20}/>
      <button>
        Adrian Ortiz
        <IconButton onClick={handleClick} aria-controls='profile-menu' aria-haspopup='true'>
          <MoreVertIcon />
        </IconButton>
      </button>
      <Menu
        id='profile-menu'
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={() => navigate("/profile")}>Profile</MenuItem>
        <MenuItem onClick={() => navigate("/login")}>Log out</MenuItem>
      </Menu>
    </div>
  );
};
