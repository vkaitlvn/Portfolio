// import { Link as LinkS } from 'react-scroll';
import { Link as LinkR } from 'react-router-dom';
import styled from 'styled-components';

export const Btn = styled.nav`
  display: flex;
  align-items: center;
  background: #191a1a;
  

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
    background: linear-gradient(90.21deg, #550080 -5.91%, #19285a 111.58%);
    color: black;
    
  }


  @media screen and (max-width: 988px) {
      display: none;
  }
  @media screen and (max-width: 1189px) {
      margin-left: 80px;
  }
`;


// export const BtnLink2 = styled(LinkR)`
//   // padding: 10px 22px;
//   margin-left: -200px;
//   margin-right: 200px;
//   color: #ffff;
//   font-size: 16px;
//   cursor: pointer;
//   transition: all 0.2s ease-in-out;
//   text-decoration: none;
//   border-radius: 5000px;
//     transition: all 0.3s;

//   &:hover {
//     transition: all 0.2s ease-in-out;
//     background: linear-gradient(90.21deg, #550080 -5.91%, #19285a 111.58%);
//     color: black;
//   }


//   @media screen and (max-width: 988px) {
//       display: none;
//   }
//   @media screen and (max-width: 1189px) {
//       margin-left: 80px;
//   }
// `;
