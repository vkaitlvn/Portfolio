// navbar on home page that toggle scrolls to each 


import React, { useState, useEffect } from 'react';
import PDF from '../../Documents/Resume.pdf';
import { CgMenuRight } from 'react-icons/cg';
import { IconContext } from 'react-icons/lib';
import { animateScroll as scroll } from 'react-scroll';
import {
  MobileIcon,
  Nav,
  NavbarContainer,
  NavItem,
  NavLinks,
  NavLogo,
  NavMenu,
  NavBtn,
  NavBtnLink
} from './NavbarElements';

import Logo from '../../images/logo-white.svg';
import './Navbar.css';



// all imports including icons, css files, and effects from react


const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeNav);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <Nav scrollNav={scrollNav}>

          <NavbarContainer>
            <NavLogo onClick={toggleHome} to='/'>
              KAITCODES
            </NavLogo>

            <MobileIcon onClick={toggle}>
              <CgMenuRight />
            </MobileIcon>

            <NavMenu>
              <NavItem>
                <NavLinks
                  to='about'
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact='true'
                  offset={-25}
                >
                  About
                </NavLinks>
              </NavItem>
             
              
              
              <NavItem>
                <NavLinks
                  to='projects'
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact='true'
                  offset={10}
                >
                  Projects
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to='connect'
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact='true'
                  offset={-45}
                >
                  Connect
                </NavLinks>
              </NavItem>

              <NavBtn>
                {/* <NavBtnLink href = {PDF}>Resume</NavBtnLink> */}
                <a href = {PDF}>Resume</a>              
              </NavBtn>

              

            
              
            </NavMenu>

            
            
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
