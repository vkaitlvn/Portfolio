import styled, {keyframes, css} from 'styled-components';

const textclip = keyframes`
  to {
    background-position: 200% center;
  }
`;

const cursorBlink = keyframes`
  0%, 100% {
    border-right: 2px solid transparent;
  }
  50% {
    border-right: 2px solid #a9b3d3; /* Change color to match your text */
  }
`;

const typingAnimation = keyframes`
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
`;

// Styled component for the animated text
const AnimatedText = styled.h3`
  text-transform: uppercase;
  background-image: linear-gradient(
    -225deg,
    #231557 0%,
    #44107a 29%,
    #f9f7f8 67%,
    #5b75dd 100%
  );
  background-size: auto auto;
  background-clip: border-box;
  background-size: 200% auto;
  color: #fff;
  background-clip: text;
  font-weight: bold;
  text-fill-color: transparent;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: ${textclip} 4s linear infinite;
  display: inline-block;
  font-size: 120px;

  @media only screen and (max-width: 600px) {
    font-size: 18vw; /* Adjust the font size for smaller screens */
  }
`;


export const HeroContainer = styled.div`
  
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 800px;
//   position: relative;
  z-index: 1;

  :before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: -webkit-gradient(
        linear,
        left top,
        left bottom,
        from(rgba(0, 0, 0, 0.2)),
        to(rgba(0, 0, 0, 0.2))
      ),
      -webkit-gradient(linear, left top, left bottom, from(rgba(0, 0, 0, 0.2)), to(transparent));
    background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.2) 0%,
        rgba(0, 0, 0, 0.4) 100%
      ),
      linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, transparent 100%);
    z-index: 2;
  }
`;

export const HeroBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const VideoBg = styled.video`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  background: #232a34;
`;

export const HeroContent = styled.div`
  z-index: 3;
  max-width: 1200px;
  position: absolute;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  
`;

export const HeroH1 = styled.h1`
  color: #fff;
  font-size: 75px;
  text-align: center;
  align-items: center;


  @media screen and (max-width: 768px) {
    font-size: 40px;
  }

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const HeroP = styled.p`
  margin-top: 24px;
  color: #fff;
  font-size: 25px;
  text-align: center;
  max-width: 600px;
  font-style: italic;
  align-items: center;


  @media screen and (max-width: 768px) {
    font-size: 24px;
  }

  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
`;


export const TopLine = styled.div`
  color: #a9b3d3;
  font-size: 2rem;
  line-height: 16px;
  padding: 30px 30px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;
  margin-top: 150px;
  text-align: center;
  overflow: hidden;
  white-space: nowrap; 
  vertical-align: middle;

  

  @media screen and (max-width: 480px) {
    font-size: 1.5rem;
  }
`;



export const Heading = styled.h1`
  margin-bottom: 24px;
  margin-top: 35px;
  font-size: 5rem;
  line-height: 1.1;
  font-weight: 600;
  font-style: bold;
  color: #fff;
  text-align: center;


  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const Subtitle = styled.p`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 25px;
  line-height: 24px;
  color: white;
  text-align: center;


  
`;

export const SocialIcons = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 60px;

   
`;

export const SocialIconLink = styled.a`
    color: #fff;
    font-size: 40px;
    padding-right: 20px;
    font-style: bold;

    &:hover {
        color: #93a0c9;
        transition: 0.3s ease-out;

    }
`;
