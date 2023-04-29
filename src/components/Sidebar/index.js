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

import PDF from '../../Documents/Resume.pdf';



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


          {/* <SidebarLink>
            <NavBtn>
            <a href = {PDF}>Resume</a> 
                 
                
              </NavBtn>
            </SidebarLink> */}
        </SidebarMenu>


      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
