import * as React from 'react';
import { alpha } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

export default function Hero() {
  return (
    <Box
      id="hero"
      sx={(theme) => ({
        width: '100%',
        backgroundSize: '100% 20%',
        backgroundRepeat: 'no-repeat',
      })}
    >
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'left',
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
              alignSelf: 'left',
              textAlign: 'left',
              fontSize: 'clamp(3.5rem, 10vw, 4rem)',
              fontWeight: "bold",
            }}
          >
            Hi, I'm&nbsp;
            <Typography
              component="span"
              variant="h1"
              sx={{
                fontSize: 'clamp(3rem, 10vw, 4rem)',
                color: "hotpink",
                fontWeight: "bold",
              }}
            >
              Matin
            </Typography>
          </Typography>
          <Typography
            textAlign="left"
            color="hotpink"
            sx={{ alignSelf: 'left', width: { sm: '100%', md: '75%' } }}
          >
            I am a third year Computer Science student at the University of British Columbia working towards a career in software development.
          </Typography>
        </Stack>
       
      </Container>
    </Box>
  );
}