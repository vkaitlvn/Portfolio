// basic footer css here

import styled from 'styled-components';
import {Link} from 'react-router-dom';


export const FooterWrap = styled.div`
    padding: 20px 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 100%;
    margin: 0 auto;
    background: #887cac;

`;



export const SocialMedia = styled.section`
    max-width: 1000px;
    width: 100%;
`;

export const SocialMediaWrap = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1100px;
    margin: 40px auto 0 auto;

    @media screen and (max-width: 820px) {
        flex-direction: column;
    }

`;
export const SocialLogo = styled(Link)`
    color: #fff;
    justify-self: start;
    cursor: grab;
    text-decoration: none;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    margin-bottom: 16px;
    font-weight: bold;

    &:hover {
        transition: all 0.2s ease-in-out;
        color: #93a0c9;
      }
`;

export const WebsiteRights = styled.small`
    color: #fff;
    margin-bottom: 18px;
    text-align: center;
    font-size: 0.8rem;

`;

export const SocialIcons = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100px;
   
`;

export const SocialIconLink = styled.a`
    color: #fff;
    margin-bottom: 20px;
    font-size: 30px;
    padding-right: 20px;

    &:hover {
        color: #93a0c9;
        transition: 0.3s ease-out;

    }
`;
