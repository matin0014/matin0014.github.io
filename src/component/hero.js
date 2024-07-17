import * as React from 'react';
import { alpha } from '@mui/material';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';

import Typography from '@mui/material/Typography';

export default function Hero() {
  return (
    <Box
      id="hero"
      sx={(theme) => ({
        width: '100%',
        backgroundImage:
        theme.palette.mode === 'light'
        ? 'linear-gradient(180deg, #FF69B4, #000000)'
        : `linear-gradient(#02294F, ${alpha('#000000', 0.0)})`,
        backgroundSize: '100% 45%',
        backgroundRepeat: 'no-repeat',
      })}
    >
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          pt: { xs: 14, sm: 20 },
          pb: { xs: 8, sm: 12 },
        }}
      >
        <Stack spacing={2} useFlexGap sx={{ width: { xs: '100%', sm: '70%' } }}>
          <Typography
            variant="h1"
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              alignSelf: 'center',
              textAlign: 'center',
              fontSize: 'clamp(2.5rem, 9vw, 3rem)',
              fontWeight: "bold",
              color: "white"
            }}
          >
            Hi, I'm&nbsp;
            <Typography
              component="span"
              variant="h1"
              sx={{
                fontSize: 'clamp(2rem, 9vw, 3rem)',
                color: "hotpink",
                fontWeight: "bold",
              }}
            >
              Matin
            </Typography>
          </Typography>
          <Typography
            textAlign="center"
            color="white"
            sx={{ alignSelf: 'center', width: { sm: '100%', md: '75%' } }}
          >
            I am a third year Computer Science student at the University of British Columbia working towards a career in software development.
          </Typography>
        </Stack>
       
      </Container>
    </Box>
  );
}