import React from "react";
import styled from "styled-components";
import { 
    FiGithub,
    FiLinkedin,
    FiMail
  } from 'react-icons/fi';

import './icon.css';

const Social = styled.div`
  display: block;
  position: fixed;
  top: 81%;
  left: 0rem;

  transform: translateY(-50%);

  ul {
    display: block;
  }

  li {
      color: transparent;
  }

  .item + .item {
    margin-top: 1rem;
  }

  a {
    font-size: 3rem;
    color: #fff;
    transition: 0.2s ease-in;
    &:hover {
      color: #93a0c9;
    }
  }

  @media screen and (max-width: 1000px) {
    display: none;
  }
`;


function FixSocialIcon() {
  return (
    <Social>
      <ul>
          

           <li>

            </li> 
          <a
            href="https://www.linkedin.com/in/kaitlyn-brooks-7661b71b6/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiLinkedin />
          </a>

          <li>

          </li>

          <a
            href="https://github.com/vkaitlvn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiGithub />
          </a>

          <li>

          </li>

          <a
            href="mailto:brooks.kaitlynf@gmail.com" class=""
          >
            <FiMail />
          </a>
      </ul>
    </Social>
  );
}

export default FixSocialIcon;
