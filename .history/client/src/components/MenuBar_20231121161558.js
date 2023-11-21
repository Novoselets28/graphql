import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
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

  return (
    <AppBar position="static" style={appBarStyle}>
      <Toolbar>
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