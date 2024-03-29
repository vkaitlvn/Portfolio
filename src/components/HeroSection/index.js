
import React, { useState, useEffect } from 'react';

import Video from '../../video/purp.mp4';
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
          
        <TrackVisibility>
          {({ isVisible }) => (
            <div className={isVisible ? "animate__animated animate__slower" : ""}>
            <div class="typewriter">
             <TopLine >
                WELCOME! I AM...
            </TopLine>
            </div>
            </div>
          )}
        </TrackVisibility>
              

            <h3 class="animate-charcter"> KAITCODES</h3>
  
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
