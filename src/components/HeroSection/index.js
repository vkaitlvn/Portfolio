
import React, { useState } from 'react';

import Video from '../../video/bluehero.mp4';
import Logo from '../../images/logo-no-background.png';
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
  container
  
} from './HeroElements';

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
            <div className={isVisible ? "animate__animated animate__pulse animate__infinite animate__slower" : ""} >
              <TopLine>WELCOME! I AM...</TopLine>


              <Heading>
                KAITCODES
              </Heading>
              <Subtitle>
                  A programmer with a passion for designing and building.
              </Subtitle>
            </div> }
          </TrackVisibility>
             <a href="mailto:brooks.kaitlynf@gmail.com" class="btn btn--contact">Contact</a>
             <br/>
            
        </HeroContent>

    </HeroContainer>
  );
}

export default HeroSection;
