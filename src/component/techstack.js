import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Chip from '@mui/material/Chip';

const TechStack = () => {
  const techStack = [
    'React',
    'Figma',
    'JavaScript',
    'HTML',
    'CSS',
    'Node.js',
    'Postman',
    'Java',
    'MySQL',
    'Git',
    'GitHub',
    'VS Code',
    'Eclipse'
  ];

  return (
    <Box id="tech-stack" sx={{ backgroundColor: '#000000', py: 4 }}>
      <Container>
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
            marginBottom: '20px'
          }}
        >
          Tech&nbsp;
          <Typography
            component="span"
            variant="h1"
            sx={{
              fontSize: 'clamp(2rem, 9vw, 3rem)',
              color: 'hotpink',
              fontWeight: 'bold',
            }}
          >
            Stack
          </Typography>
        </Typography>
        <Stack spacing={2} direction="row" justifyContent="center" alignItems="center" sx={{ flexWrap: 'wrap' }}>
          {techStack.map((tech, index) => (
            <Chip
              key={index}
              label={tech}
              color="primary"
              variant="outlined"
              sx={{
                m: 1,
                borderColor: 'white',
                color: 'white',
                '&:hover': {
                  backgroundColor: 'transparent',
                  color: 'hotpink',
                  borderColor: 'hotpink',
                },
              }}
            />
          ))}
        </Stack>
      </Container>
    </Box>
  );
};

export default TechStack;
