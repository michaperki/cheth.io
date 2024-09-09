import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Button, Box } from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

const Header = ({ toggleDarkMode, darkMode }) => {
  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Cheth
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <IconButton
            color="inherit"
            onClick={toggleDarkMode}
            sx={{ mr: 2 }}
          >
            {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
          </IconButton>
          <Button 
            color="inherit" 
            variant="outlined"
            href="https://cheth-client.vercel.app/"
            sx={{ 
              '&:hover': { 
                bgcolor: 'rgba(255, 255, 255, 0.08)'
              }
            }}
          >
            Play Now
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
