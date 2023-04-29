// Footer code used for entire website

import React from 'react'
import { animateScroll as scroll } from 'react-scroll';

import { 
    FiGithub,
    FiLinkedin,
    FiMail
  } from 'react-icons/fi';
// different icons imported for bottom right corner of navbar

import {
    FaRegCopyright
} from 'react-icons/fa';

import {
    FooterWrap,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    WebsiteRights,
    SocialIcons,
    SocialIconLink
        
} from './FooterElements';

const toggleHome = () => {
    scroll.scrollToTop()
  }

const Footer = () => {
    return (
        <div className="row " style={{background: "#000000"}}>
            <FooterWrap>
                
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to='/' onClick={toggleHome}>
                            KAITCODES
                        </SocialLogo>
                        {/* clickable logo, returns home */}
                        
                        <WebsiteRights>
                        Website by KAITCODES <FaRegCopyright/> {new Date().getFullYear()} All rights reserved. 
                        </WebsiteRights>
                        {/* copyright message */}



                        <SocialIcons>
                            <SocialIconLink href="https://www.linkedin.com/in/kaitlyn-brooks-7661b71b6/" target="_blank" aria-label="Twitter">
                                <FiLinkedin />
                            </SocialIconLink>

                            <SocialIconLink href="https://github.com/vkaitlvn" target="_blank" aria-label="Discord">
                                <FiGithub />
                            </SocialIconLink>

                            <SocialIconLink href="mailto:brooks.kaitlynf@gmail.com" class="" target="_blank" aria-label="Email">
                                <FiMail />
                            </SocialIconLink>
                           
                        </SocialIcons>
                        {/* icon links */}
                        
                        
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
            
        </div>
    )
}

export default Footer
