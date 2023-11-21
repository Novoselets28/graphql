import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

const Header = ({ backgroundColor, isSticky }) => {
  const appBarStyle = {
    backgroundColor,
    position: isSticky ? 'sticky' : 'static',
    top: 0
  };

  const linkStyle = {
    textDecoration: 'none',
    color: 'inherit'
  };

  const menuIconStyle = {
    color: 'white'
  };

  return (
    <AppBar position="static" style={appBarStyle}>
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu">
          <MenuIcon style={menuIconStyle} />
        </IconButton>
        <ul style={{ listStyle: 'none', paddingLeft: 0, display: 'flex' }}>
          <li style={{ margin: '0 16px' }}>
            <Link to="/" style={{ ...linkStyle }}>
              Home
            </Link>
          </li>
          <li style={{ margin: '0 16px' }}>
            <Link to="/login" style={linkStyle}>
              Login
            </Link>
          </li>
          <li style={{ margin: '0 16px' }}>
            <Link to="/register" style={linkStyle}>
              Register
            </Link>
          </li>
        </ul>
      </Toolbar>
    </AppBar>
  );
};

export default Header;