import React, { useRef } from 'react';
// import emailjs from '@emailjs/browser';
import { Container, Row, Col } from "react-bootstrap";

import pic from "../../images/logo-no-background.png";
import './contact.css';

import 'animate.css';
import TrackVisibility from 'react-on-screen';

// import {
//   REACT_APP_PUBLIC_KEY,
//   REACT_APP_SERVICE_ID,
//   REACT_APP_TEMPLATE_ID
// } from '.env';


export const Contact = () => {
//   const form = useRef();

//   const sendEmail = (e) => {
//       e.preventDefault();
  
//       emailjs
//       .sendForm(
//           process.env.REACT_APP_SERVICE_ID, 
//           process.env.REACT_APP_TEMPLATE_ID, 
//           form.current,
//           process.env.REACT_APP_PUBLIC_KEY
//           )
//         .then(
//             (result) => {
//             console.log(result.text);
//             console.log("message sent");
//         }, 
//         (error) => {
//             console.log(error.text);
//         });
//     };


  

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__pulse animate__infinite animate__slower" : ""} src={pic} alt="Contact Us"/>
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            
                <h2>CONNECT</h2>
        
                    {/* <form ref={form} onSubmit={sendEmail}> */}
                    
                    <form method="POST" netlify data-netlify="true" data-netlify-recaptcha="true"
                    name="contact"
                    onSubmit="submit">
                      <label>NAME</label>
                      <input type="text" name="name" name="name"/>
                      <label>EMAIL</label>
                      <input type="email" name="email" name="email"/>
                      <label>MESSAGE</label>
                        <textarea name="message" />
                      <input type="submit" value="SEND" />
                      <div data-netlify-recaptcha="true"></div>
                      
                    </form>

              
                 
            
          </Col>
        </Row>
      </Container>
    </section>
  )
 };

export default Contact;