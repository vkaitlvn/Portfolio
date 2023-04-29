
import React, { useState } from 'react';

import Video from '../../video/bluehero.mp4';
// import Logo from '../../images/logo-no-background.png';
import 'animate.css';
import './Hero.css';
import TrackVisibility from 'react-on-screen';


import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  TopLine,
  Heading,
  Subtitle,
  SocialIconLink,
  SocialIcons
  
} from './HeroElements';


import { 
  FiGithub,
  FiLinkedin,
  FiMail
} from 'react-icons/fi';

function HeroSection() {
  const [hover, setHover] = useState(false);

  

  return (
    <HeroContainer id='home'>
        <HeroBg>
          <VideoBg playsInline autoPlay loop muted src={Video} type='video/mp4' />
        </HeroBg>
        {/* autoplays video background on a loop */}

        <HeroContent>
          
        <TrackVisibility >
            {({ isVisible }) =>
            <div className={isVisible ? "animate__animated animate__fadeIn animate__slower" : ""} >

        <TopLine>Welcome! I AM...</TopLine>
        </div> }
          </TrackVisibility>
          
          <TrackVisibility >
            {({ isVisible }) =>
            <div className={isVisible ? "animate__animated animate__pulse animate__infinite animate__slower" : ""} >



              <Heading>
                KAITCODES
              </Heading>
              
            </div> }
          </TrackVisibility>

          <TrackVisibility >
            {({ isVisible }) =>
            <div className={isVisible ? "animate__animated animate__fadeIn animate__slower" : ""} >
            <Subtitle>
                  A programmer with a passion for designing and building.
              </Subtitle>
              </div> }
          </TrackVisibility>
            

        <SocialIcons>
                            <SocialIconLink href="https://www.linkedin.com/in/kaitlyn-brooks-7661b71b6/" target="_blank" aria-label="LinkedIn">
                                <FiLinkedin />
                            </SocialIconLink>

                            <SocialIconLink href="https://github.com/vkaitlvn" target="_blank" aria-label="Github">
                                <FiGithub />
                            </SocialIconLink>

                            <SocialIconLink href="mailto:brooks.kaitlynf@gmail.com" class="" target="_blank" aria-label="Email">
                                <FiMail />
                            </SocialIconLink>
                           
                        </SocialIcons>
            
        </HeroContent>

    </HeroContainer>
  );
}

export default HeroSection;
