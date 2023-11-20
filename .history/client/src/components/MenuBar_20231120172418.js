import * as React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

const MenuBar = ({ open, onClose }) => {
  return (
    <Menu
      id="basic-menu"
      anchorEl={null} // Set the anchor element (required for Menu component)
      open={open}     // Add the open prop
      onClose={onClose} // Add the onClose prop to handle menu closure
      MenuListProps={{
        'aria-labelledby': 'basic-button',
      }}
    >
      <MenuItem>Profile</MenuItem>
      <MenuItem>My account</MenuItem>
      <MenuItem>Logout</MenuItem>
    </Menu>
  );
}

export default MenuBar;
