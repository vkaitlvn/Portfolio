import styled from 'styled-components';


export const StyledContactForm = styled.div`
  color: white;
  width: 400px;
 
  
  
  form {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    width: 100%;
    font-size: 16px;

    input {
      width: 100%;
      height: 35px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      background:  linear-gradient(90.21deg, #a9b3d3 -5.91%, #19285a 111.58%);
      border: 1px solid rgb(220, 220, 220);
      &:focus {
        border: 2px solid #93a0c9;
      }
    }
    textarea {
      max-width: 100%;
      min-width: 100%;
      width: 100%;
      max-height: 100px;
      min-height: 100px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);
      &:focus {
        border: 2px solid #93a0c9;
      }
      background:  linear-gradient(90.21deg, #a9b3d3 -5.91%, #19285a 111.58%);
      color: black;
    }
    label {
      margin-top: 1rem;
    }
    
    input[type="submit"] {
      margin-top: 3rem;
      background: #93a0c9;
      color: white;
      border: none;
      hover: white;
      font-size: 20px;
      padding: 10 10;


      
    }
}
`;