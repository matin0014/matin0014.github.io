import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { FaReact, FaJs, FaHtml5, FaCss3Alt, FaNodeJs, FaGitAlt, FaJava } from "react-icons/fa";
import { SiFigma, SiMysql, SiMongodb, SiNextdotjs, SiPostman } from "react-icons/si";

const techStack = [
  { name: 'React', icon: <FaReact /> },
  { name: 'JavaScript', icon: <FaJs /> },
  { name: 'HTML', icon: <FaHtml5 /> },
  { name: 'CSS', icon: <FaCss3Alt />},
  { name: 'Node.js', icon: <FaNodeJs />},
  { name: 'MongoDB', icon: <SiMongodb />},
  { name: 'MySQL', icon: <SiMysql /> },
  { name: 'Next.js', icon: <SiNextdotjs />},
  { name: 'Postman', icon: <SiPostman />},
  { name: 'Git', icon: <FaGitAlt />},
  { name: 'Figma', icon: <SiFigma />},
  { name: 'Java', icon: <FaJava />}
];

const TechStack = () => {
  return (
    <Box id="tech-stack" sx={{ backgroundColor: '#000000', py: 4 }}>
      <Container>
        <Typography
          variant="h1"
          sx={{
            textAlign: 'left',
            fontSize: 'clamp(2.5rem, 9vw, 3rem)',
            fontWeight: 'bold',
            color: 'white',
            marginBottom: '20px',
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
        <Grid container spacing={2}>
          {techStack.map((tech, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card sx={{
                backgroundColor: '#121212',
                color: 'white',
                borderRadius: '15px',
                transition: 'transform 0.3s ease-in-out',
                '&:hover': {
                  transform: 'scale(1.05)',
                  boxShadow: '0 0 20px rgba(255, 105, 180, 0.5)',
                },
              }}>
                <CardMedia
                  component="div"
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    fontSize: '4rem',
                    padding: '20px',
                  }}
                >
                  {tech.icon}
                </CardMedia>
                <CardContent>
                  <Typography variant="h5" component="div" sx={{ fontWeight: 'bold' }}>
                    {tech.name}
                  </Typography>
                  <Typography variant="body2" color="gray" sx={{ marginTop: '5px' }}>
                    {tech.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default TechStack;
