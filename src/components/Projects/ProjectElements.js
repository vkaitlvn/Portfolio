import { Link as LinkS } from 'react-scroll';
import { Link as LinkR } from 'react-router-dom';
import styled from 'styled-components';

export const Btn = styled.nav`
  display: flex;
  align-items: center;
  

  }
`;

export const BtnLink = styled(LinkR)`
  padding: 10px 22px;
  margin-left: 170px;
  margin-right: 180px;
  color: #ffff;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  border-radius: 5000px;
    transition: all 0.3s;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: black;
  }


  @media screen and (max-width: 988px) {
      display: none;
  }
  @media screen and (max-width: 1189px) {
      margin-left: 80px;
  }
`;
