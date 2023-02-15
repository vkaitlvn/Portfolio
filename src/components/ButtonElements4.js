import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const Button = styled(Link)`
border: none;
font-size: 25px;
cursor: pointer;
align-items: center;
text-align: center;
justify-content: center;
font-style: none;

&:hover {
  transition: all 0.2s ease-in-out;
  color: #01bf71;
}
`;