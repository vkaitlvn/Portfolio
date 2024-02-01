// ProjectCard.js

import React from 'react';
import styled from 'styled-components';

import image1 from '../../images/project1.png';
import image2 from '../../images/project2.png';
import image3 from '../../images/playablepiano.png';
import image4 from '../../images/filmfestdemo.png';


const imageMap = {
  image1,
  image2,
  image3,
  image4
};

const ProjectCard = ({ title, description, image, link }) => {
  return (
    <Card>
      <Image src={imageMap[image]} alt={title} />
      <Content>
        <Title>{title}</Title>
        <Description>{description}</Description>
        {link && <ProjectLink href={link} target="_blank" rel="noopener noreferrer">VIEW</ProjectLink>}
      </Content>
    </Card>
  );
};

const Card = styled.div`
  width: 300px;
  height: 300px;
  margin: 10px;
  // border: 5px solid #FFF;
  border-radius: 40px;
  overflow: hidden;
  color: white;
  // background: rgba(53,10,60,0.517266281512605) 0%;
  box-shadow: 10px 40px 80px rgba(0, 0, 0, 0.1);
`;

const Image = styled.img`
  width: 100%;
  height: 200px; /* Adjust the height as needed */
  object-fit: cover;
`;

const Content = styled.div`
  padding: 20px;
`;

const Title = styled.h3`
  font-size: 0.9rem;
  margin-bottom: 10px;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-weight: 700;

`;

const Description = styled.p`
  font-size: 0.9em;
  text-align: center;

`;

const ProjectLink = styled.a`
  display: block;
  margin-top: 10px;
  color: #00;
  text-decoration: none;
  text-align: center;

`;

export default ProjectCard;
