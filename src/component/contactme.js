import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button'; 
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  components: {
    MuiFilledInput: {
      styleOverrides: {
        root: {
          backgroundColor: 'black',
          borderRadius: '4px',
          border: '2px solid hotpink',
          '&.Mui-focused': {
            border: '2px solid hotpink',
          },
          '&:after': {
            borderBottom: '2px solid hotpink',
          },
        },
        input: {
          color: 'lightgray',
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: 'lightgray',
          '&.Mui-focused': {
            color: 'lightgray',
          },
          '& .MuiFormLabel-asterisk': {
            display: 'none',
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: 'hotpink',
          color: 'white',
          '&:hover': {
            backgroundColor: 'darkmagenta',
          },
          borderRadius: '4px',
          padding: '10px 16px',
          fontWeight: 'bold',
          textTransform: 'uppercase',
        },
      },
    },
  },
});

export default function FormPropsTextFields() {
  const [placeholder, setPlaceholder] = React.useState('Enter your email');

  return (
    <ThemeProvider theme={theme}>
      <Box
        id="hero"
        sx={(theme) => ({
          width: '100%',
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
            maxWidth: '1200px', 
            padding: '0 20px', 
          }}
        >
          <Stack spacing={2} sx={{ width: '100%' }}>
            <Typography
              variant="h1"
              sx={{
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
                alignSelf: 'flex-start',
                textAlign: 'left',
                fontSize: 'clamp(2.5rem, 9vw, 3rem)',
                fontWeight: 'bold',
                color: 'white',
                mb: 2, 
              }}
            >
              Contact&nbsp;
              <Typography
                component="span"
                variant="h1"
                sx={{
                  fontSize: 'clamp(2rem, 9vw, 3rem)',
                  color: 'hotpink',
                  fontWeight: 'bold',
                }}
              >
                Me
              </Typography>
            </Typography>
            <Stack spacing={2} direction="row" sx={{ width: '100%' }}>
              <TextField
                required
                id="first-name"
                label="First Name"
                variant="filled"
                sx={{ flex: 1, maxWidth: 'calc(50%)' }}
              />
              <TextField
                required
                id="last-name"
                label="Last Name"
                variant="filled"
                sx={{ flex: 1, maxWidth: 'calc(50%)' }} 
              />
            </Stack>
            <TextField
              required
              id="email"
              label="Enter your email"
              variant="filled"
              sx={{ width: '100%' }} 
            />
            <TextField
              id="message"
              label="Enter your message"
              variant="filled"
              multiline
              rows={6}
              sx={{ width: '100%' }} // Make the message field take full width
            />
            <Button
              type="submit"
              variant="contained"
              sx={{ width: '100%' }} // Match the width of other fields
            >
              Submit
            </Button>
          </Stack>
        </Container>
      </Box>
    </ThemeProvider>
  );
}
