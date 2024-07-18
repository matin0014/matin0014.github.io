import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Typography from '@mui/material/Typography';

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: 'black' }}>
        {/* Toolbar with justifyContent set to space-between */}
        <Toolbar sx={{ justifyContent: 'space-between', paddingX: 4 }}>
          {/* Box containing MATIN RAOUFI text */}
          <Box
            sx={{ display: 'flex', alignItems: 'center', cursor: 'pointer', ml: -2 }}
            onClick={() => window.location.reload()}
          >
            {/* MATIN text */}
            <Typography variant="h6" sx={{ color: 'white', fontSize: '1rem', mr: 0.5 }}>
              MATIN
            </Typography>
            {/* RAOUFI text */}
            <Typography variant="h6" sx={{ color: 'hotpink', fontSize: '1rem' }}>
              RAOUFI
            </Typography>
          </Box>
          {/* Box containing GitHub and LinkedIn icons */}
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            {/* GitHub Icon */}
            <IconButton
              size="large"
              color="inherit"
              aria-label="github"
              sx={{
                mr: -1, // Adjusted from mr: 1
                '&:hover': {
                  color: 'hotpink',
                  transform: 'scale(1.1)',
                  boxShadow: '0 0 20px rgba(255, 105, 180, 0.5)'
                },
                transition: 'all 0.3s ease'
              }}
              href="https://github.com/your-github-username"
            >
              <GitHubIcon sx={{ fontSize: '2rem' }} />
            </IconButton>
            {/* LinkedIn Icon */}
            <IconButton
              size="large"
              color="inherit"
              aria-label="linkedin"
              sx={{
                '&:hover': {
                  color: 'hotpink',
                  transform: 'scale(1.1)',
                  boxShadow: '0 0 20px rgba(255, 105, 180, 0.5)'
                },
                transition: 'all 0.3s ease'
              }}
              href="https://www.linkedin.com/in/your-linkedin-username"
            >
              <LinkedInIcon sx={{ fontSize: '2rem' }} />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
