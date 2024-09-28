import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import HomeIcon from '@mui/icons-material/Home'; // Import icons for each nav item
import MapIcon from '@mui/icons-material/Map';
import PersonIcon from '@mui/icons-material/Person';
import LoginIcon from '@mui/icons-material/Login';

const NavBar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  const navItems = [
    { text: 'Home', path: '/', icon: <HomeIcon /> },         
    { text: 'Map', path: '/map', icon: <MapIcon /> },       
    { text: 'Profile', path: '/profile', icon: <PersonIcon /> }, 
    { text: 'Sign In', path: '/signin', icon: <LoginIcon /> } 
  ];

  const drawer = (
    <Box
      sx={{
        width: 160,
        height: '100%',
        backgroundColor: 'rgba(255, 255, 255, 0.6)', // Semi-transparent background
        backdropFilter: 'blur(10px)', // Apply glass effect
        overflow: 'hidden', // Ensure no overflow
      }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {navItems.map(({ text, path, icon }) => (
          <ListItem button key={text}>
            <Link to={path} style={{ textDecoration: 'none', color: 'inherit', width: '100%' }}>
              <Box sx={{ display: 'flex', alignItems: 'center', padding: '10px', marginTop:'15px' }}>
                {icon}
                <ListItemText primary={text} sx={{ marginLeft: '10px'}} />
              </Box>
            </Link>
          </ListItem>
        ))}
      </List>
      <Divider />
    </Box>
  );

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: 'rgba(27, 27, 27, 0.9)', // Semi-transparent background
          // backdropFilter: 'blur(10px)', // Apply glass effect
          boxShadow: 'none',
        }}
      >
        <Toolbar>
          <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
            <Link to="/" style={{ textDecoration: 'none' }}> {/* Link added here */}
              <img
                src="/src/assets/Logo1.png"
                alt="ChargeNet Logo"
                style={{ height: '50px', cursor: 'pointer' }}
              />
            </Link>
          </Box>
          <Box sx={{ display: { xs: 'none', md: 'block' } }}>
            {navItems.map(({ text, path }) => (
              <Button
                key={text}
                component={Link} // Link component for SPA navigation
                to={path} // Navigate to path
                sx={{
                  color: '#fff',
                  transition: '0.3s', // for hover
                  '&:hover': {
                    color: '#fff', // Change text color to white on hover
                    backgroundColor: 'rgba(255, 255, 255, 0.2)',
                    transform: 'scale(1.05)', 
                  },
                }}
              >
                {text}
              </Button>
            ))}
          </Box>
          {/* Drawer icon for mobile screens */}
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={toggleDrawer(true)}
            sx={{ display: { xs: 'block', md: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
        PaperProps={{
          sx: {
            backgroundColor: 'rgba(255, 255, 255, 0.1)', // Semi-transparent background
            backdropFilter: 'blur(10px)', // Apply glass effect
          },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default NavBar;
