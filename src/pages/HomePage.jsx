import React from 'react';
import { Box, Typography, Grid, Button } from '@mui/material';
import welcomeGif from '/src/assets/welcome-bg.gif'; // Replace with your GIF path

const Home = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#121212', // Dark background for dark theme
        color: '#E0E0E0', // Light text color
        minHeight: '100vh', // Full viewport height
        padding: { xs: '20px', md: '40px' }, // Responsive padding
        paddingTop: { xs: '80px', md: '100px' }, // Space between the navbar and content
        boxSizing: 'border-box', // Ensure padding is inside the box
        maxWidth: '100vw', // Prevent overflow on the right side
        overflowX: 'hidden', // Hide horizontal overflow
      }}
    >
      {/* Welcome Section with GIF Background */}
      <Box
        sx={{
          backgroundImage: `url(${welcomeGif})`, // Set your background GIF here
          backgroundSize: 'cover', // Fill the area
          backgroundPosition: 'center',
          borderRadius: '8px',
          padding: { xs: '20px', md: '40px' }, // Responsive padding
          marginBottom: '40px', // Space below the welcome section
          textAlign: 'center',
          height: { xs: '150px', md: '300px' }, // Responsive height
          width: '100%', // Full width
          position: 'relative', // Positioning for overlay (if needed)
          overflow: 'hidden', // Prevent overflow
        }}
      >
        <Typography variant="h5" sx={{ fontWeight: 'bold' }} gutterBottom>
          Welcome to ChargeNet
        </Typography>
        <Typography variant="body2" paragraph sx={{ fontSize: { xs: '0.8rem', md: '1rem' } }}>
          Discover the nearest and best EV charging stations tailored for your journey.
        </Typography>
      </Box>

      {/* Other Content Section */}
      <Grid container spacing={4} justifyContent="center">
        {/* Content Boxes */}
        <Grid item xs={12} sm={6} md={4}>
          <Box
            sx={{
              backgroundColor: '#1E1E1E',
              borderRadius: '8px',
              padding: { xs: '15px', md: '20px' }, // Responsive padding
              textAlign: 'center',
              boxShadow: 3,
              transition: '0.3s', // Smooth transition for hover
              '&:hover': {
                transform: 'scale(1.02)', // Slight scale effect on hover
              },
            }}
          >
            <Typography variant="h6" sx={{ overflowWrap: 'break-word' }}>
              Find Charging Stations
            </Typography>
            <Typography variant="body2" paragraph sx={{ fontSize: { xs: '0.75rem', md: '1rem' } }}>
              Use our map to locate the nearest charging stations with real-time availability.
            </Typography>
            <Button variant="contained" color="primary" href="/map" size="small">
              View Map
            </Button>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Box
            sx={{
              backgroundColor: '#1E1E1E',
              borderRadius: '8px',
              padding: { xs: '15px', md: '20px' }, // Responsive padding
              textAlign: 'center',
              boxShadow: 3,
              transition: '0.3s', // Smooth transition for hover
              '&:hover': {
                transform: 'scale(1.02)', // Slight scale effect on hover
              },
            }}
          >
            <Typography variant="h6" sx={{ overflowWrap: 'break-word' }}>
              Get Recommendations
            </Typography>
            <Typography variant="body2" paragraph sx={{ fontSize: { xs: '0.75rem', md: '1rem' } }}>
              Receive personalized recommendations for charging stations based on your location and needs.
            </Typography>
            <Button variant="contained" color="primary" href="/profile" size="small">
              Get Started
            </Button>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Box
            sx={{
              backgroundColor: '#1E1E1E',
              borderRadius: '8px',
              padding: { xs: '15px', md: '20px' }, // Responsive padding
              textAlign: 'center',
              boxShadow: 3,
              transition: '0.3s', // Smooth transition for hover
              '&:hover': {
                transform: 'scale(1.02)', // Slight scale effect on hover
              },
            }}
          >
            <Typography variant="h6" sx={{ overflowWrap: 'break-word' }}>
              User Profile
            </Typography>
            <Typography variant="body2" paragraph sx={{ fontSize: { xs: '0.75rem', md: '1rem' } }}>
              Manage your account, view charging history, and optimize your charging preferences.
            </Typography>
            <Button variant="contained" color="primary" href="/profile" size="small">
              Profile
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Home;
