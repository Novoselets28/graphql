import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const AccountMenu = () => {
  
  return (
    <React.Fragment>
      <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
        <Typography sx={{ minWidth: 100 }}>Login</Typography>
        <Typography sx={{ minWidth: 100 }}>Loguot</Typography>
        <Typography sx={{ minWidth: 100 }}>Home</Typography>
      </Box>
    </React.Fragment>
  );
}

export default AccountMenu;