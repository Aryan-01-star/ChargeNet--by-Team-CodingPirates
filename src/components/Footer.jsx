import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Divider from '@mui/material/Divider';

const Footer = () => {
  const footerLinks = [
    { text: 'Privacy Policy', path: '/privacy' },
    { text: 'Terms of Service', path: '/terms' },
    { text: 'Contact Us', path: '/contact' },
  ];

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: 'rgba(255, 255, 255, 0.3)', // Glass effect background
        backdropFilter: 'blur(10px)', // Apply glass effect
        padding: '20px',
        position: 'absolute',
        bottom: 0,
        width: '100%',
        textAlign: 'center',
      }}
    >
      <Divider sx={{ margin: '10px 0' }} />
      <Box sx={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
        {footerLinks.map(({ text, path }) => (
          <Link 
            key={text} 
            href={path} 
            sx={{
              textDecoration: 'none',
              color: '#fff',
              transition: '0.3s',
              '&:hover': {
                color: '#fff', // Change text color on hover
                textDecoration: 'underline',
              },
            }}
          >
            {text}
          </Link>
        ))}
      </Box>
      <Typography variant="body2" sx={{ color: '#fff', marginTop: '10px' }}>
        © {new Date().getFullYear()} ChargeNet. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
