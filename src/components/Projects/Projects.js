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
  // ... other projects
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
  margin-top: 100px;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 20px;
  margin: 0 auto;
  max-width: 1300px;
  margin-right: 50px;

  @media screen and (max-width: 980px) {
    margin-right: -2px;
  }
`;

const Heading = styled.h1`
  margin-bottom: -24px;
  margin-top: 180px;
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
  color: #a9b3d3;
  font-size: 1.5rem;
  // line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: -170px;
  align-items: center;
  margin-top: 150px;
  text-align: center;

  @media screen and (max-width: 480px) {
    font-size: 1rem;
  }
  
`;