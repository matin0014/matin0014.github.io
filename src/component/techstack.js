import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Chip from '@mui/material/Chip';
import {
  FaWindows,
  FaJava,
  FaPython,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaReact,
  FaDocker,
  FaGitAlt,
  FaGoogle
} from "react-icons/fa";
import {
  SiTypescript,
  SiMongodb,
  SiMysql,
  SiVisualstudiocode,
  SiEclipseide,
  SiFigma,
  SiPostman,
  SiNextdotjs,
  SiExpress
} from "react-icons/si";

const TechStack = () => {
  const techStack = [
    { name: 'React', icon: <FaReact /> },
    { name: 'Figma', icon: <SiFigma /> },
    { name: 'JavaScript', icon: <FaJs /> },
    { name: 'HTML', icon: <FaHtml5 /> },
    { name: 'CSS', icon: <FaCss3Alt /> },
    { name: 'Node.js', icon: <FaNodeJs /> },
    { name: 'Postman', icon: <SiPostman /> },
    { name: 'Java', icon: <FaJava /> },
    { name: 'MySQL', icon: <SiMysql /> },
    { name: 'Git', icon: <FaGitAlt /> },
    { name: 'GitHub', icon: <FaGitAlt /> },  // Using the same icon as Git for GitHub
    { name: 'VS Code', icon: <SiVisualstudiocode /> },
    { name: 'Eclipse', icon: <SiEclipseide /> }
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
        <Stack spacing={2} direction="row" justifyContent="left" alignItems="left" sx={{ flexWrap: 'wrap' }}>
          {techStack.map((tech, index) => (
            <Chip
              key={index}
              label={tech.name}
              icon={tech.icon}
              color="primary"
              variant="outlined"
              sx={{
                m: 1,
                borderColor: 'white',
                color: 'white',
                transition: 'all 0.3s ease',
                '&:hover': {
                  backgroundColor: 'transparent',
                  color: 'hotpink',
                  borderColor: 'hotpink',
                  transform: 'scale(1.1)',  // Increase size on hover
                  boxShadow: '0 0 20px rgba(255, 105, 180, 0.5)'  // Optional: add a shadow effect
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
