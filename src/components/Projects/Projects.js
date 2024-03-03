import React from 'react';
import styled from 'styled-components';
import ProjectCard from './ProjectCard';

const projectsData = [
  {
    id: 1,
    title: 'DEVELOPER DISTRICT',
    description: '',
    image: 'image1',
    link: 'https://developerdistrict.netlify.app/',
  },
  {
    id: 2,
    title: 'WEATHER FINDER',
    description: '',
    image: 'image2',
    link: 'https://weatherdiscovery.netlify.app/',
  },
  {
    id: 3,
    title: 'INTERACTIVE PIANO',
    description: '',
    image: 'image3',
    link: 'https://pianowidget.netlify.app/',
  },
  {
    id: 3,
    title: 'FILM FESTIVAL',
    description: '',
    image: 'image4',
    link: 'https://brooklynfilmfestdemo.netlify.app/',
  },
 
];


const Projects = () => {
  return (
    <>
    <TopLine>MY WORK</TopLine>
    <Heading id='projects'>PERSONAL PROJECTS</Heading>

    <Body>
      
      <Container>
        {projectsData.map((project) => (
          <ProjectColumn key={project.id}>
            <ProjectCard {...project} />
          </ProjectColumn>
        ))}
      </Container>
      </Body>
    </>
  );
};

export default Projects;

const Container = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center; 
align-items: center; 
gap: 40px; 
`;

const Heading = styled.h1`
  margin-bottom: -30px;
  margin-top: 150px;
  font-size: 2rem;
  line-height: 1.1;
  font-weight: 600;
  color: #fff;
  text-align: center;


  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

const ProjectColumn = styled.div`
  flex: 0 0 calc(33.33% - 20px); /* Adjust the percentage and margin as needed */
  margin: 10px;
`;

const Body = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  
`;

const TopLine = styled.div`
  color: #887cac;
  font-size: 1.5rem;
  // line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: -140px;
  align-items: center;
  margin-top: 150px;
  text-align: center;

  @media screen and (max-width: 480px) {
    font-size: 1rem;
  }
  
`;