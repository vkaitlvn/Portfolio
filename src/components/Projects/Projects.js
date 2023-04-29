import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../../images/project1.png";
import projImg2 from "../../images/project2.png";
import projImg3 from "../../images/filmfestdemo.png";
import piano from "../../images/playablepiano.png";
import calc from "../../images/calculatorproj.png";
import './Projects.css';
// import { 
//     FiGithub
//   } from 'react-icons/fi';

import 'animate.css';
import TrackVisibility from 'react-on-screen';

import {
    Btn,
    BtnLink
  } from './ProjectElements';

export const Projects = () => {

  const projects = [
    {
      title: "Developer District",
      description: "An online social media platform for gamers.",
      imgUrl: projImg1,
      lower: "Built with: REACTJS, HTML, CSS, Firebase"
      

      

    },
    {
      title: "Weather Application",
      description: "An interactive weather application.",
      imgUrl: projImg2,
      lower: "Built with: weatherAPI, HTML, CSS, & JS"

    },
    {
      title: "Brooklyn Film Fest",
      description: "An online flyer website for a Brooklyn Film Festival.",
      imgUrl: projImg3,
      lower: "Built with: REACTJS, HTML, CSS"

    }
    
   
  ];

  const projects2 = [
    {
      title: "Piano",
      description: "A playable piano.",
      imgUrl: piano,
      lower: "Built with: HTML, CSS, & JS"
    },
    {
      title: "Calculator",
      description: "A basic calculator design",
      imgUrl: calc,
      lower: "Built with: ReactJS, CSS"
    },
   
  ];

  const projects3 = [
    {
      title: "Piano",
      description: "A playable piano.",
      imgUrl: piano,
      lower: "Built with: HTML, CSS, & JS"
    }
   
  ];

 

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__pulse animate__slower": ""}>
                <h2>PROJECTS</h2>
                {/* <p><FiGithub/></p> */}
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">1.</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">2.</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">3.</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }

                            <Btn>
                                <BtnLink  Link to ={{ pathname: "https://developerdistrict.netlify.app"}} target="_blank" aria-label="devdistrictdemo">LIVE</BtnLink>
                                
                               
                               

                                <BtnLink  Link to ={{ pathname: "https://weatherdiscovery.netlify.app"}} target="_blank" aria-label="weatherdemo">LIVE</BtnLink>


                                <BtnLink  Link to ={{ pathname: "https://brooklynfilmfestdemo.netlify.app"}} target="_blank" aria-label="filmfestdemo">LIVE</BtnLink>
                              
       
                            </Btn>
                            

                        
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                    <Row>
                        {
                          projects2.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                        
                        <Btn>
                                <BtnLink  Link to ={{ pathname: "https://pianowidget.netlify.app"}} target="_blank" aria-label="piano">LIVE</BtnLink>
                                
                              

                                <BtnLink Link to ={{ pathname: "https://calculatordemo1.netlify.app"}} target="_blank" aria-label="calculator">LIVE</BtnLink>
                               
              
                            </Btn>
                      </Row>
                    </Tab.Pane>

                    <Tab.Pane eventKey="third">
                        <Row>
                            {
                            projects3.map((project, index) => {
                                return (
                                <ProjectCard
                                    key={index}
                                    {...project}
                                    />
                                )
                            })
                            }
                            
                            <Btn>
                                    <BtnLink  Link to ={{ pathname: "https://pianowidget.netlify.app"}} target="_blank" aria-label="piano">LIVE</BtnLink>
                                
                
                            </Btn>
                        </Row>
                    </Tab.Pane>

                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
export default Projects;
