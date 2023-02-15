// sidebar that appears for mobile users of the site

import React from 'react';
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  NavBtn,
  NavBtnLink
} from './SidebarElements';


const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>

      <SidebarWrapper>
        <SidebarMenu>

          <SidebarLink
            to='about'
            onClick={toggle}
            smooth={true}
            duration={500}
            spy={true}
            exact='true'
            offset={-80}
          >
            About
          </SidebarLink>
          
          <SidebarLink></SidebarLink>
          
          
          <SidebarLink
            to='projects'
            onClick={toggle}
            smooth={true}
            duration={500}
            spy={true}
            exact='true'
            offset={-80}
          >
            Projects
          </SidebarLink>

          <SidebarLink></SidebarLink>

          <SidebarLink
            to='connect'
            onClick={toggle}
            smooth={true}
            duration={500}
            spy={true}
            exact='true'
            offset={-80}
          >
              Connect
          </SidebarLink>

          <SidebarLink></SidebarLink>


          <SidebarLink>
            <NavBtn>
                  <NavBtnLink href = "http://www.yoursitename.com/resume.pdf"target = "_blank">Resume</NavBtnLink>
                  {/* add domain name link here */}
                
              </NavBtn>
            </SidebarLink>
        </SidebarMenu>


      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
