import React from 'react';

import {
     
   TopLine,
   Heading,
   Subtitle,
   Subtitle2,
   BottomLine

} from './InfoElements'

import pic from "../../images/info.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

import { FaReact, FaHtml5, FaPython, FaJava, FaBootstrap  } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";



const InfoSection = ({
    alt,
}) => {
    return (
      
        
        <div  className="text-white row py-5" id='about' >
             
            <div className="col-12 px-0">
                
                <div className="container-lg">
                
                    <div className="row px-4 justify-content-center align-items-center">
                        <div className="col-lg-6 mb-4 mb-md-0">

                            <TopLine>KAITCODES</TopLine>
                            <Heading >ABOUT ME</Heading>
                            <Subtitle>
                                Broadcast engineer and aspiring fullstack developer with experience in bulding and hosting web based applications, UI/UX design, and data analysis.
                            </Subtitle>
                            <TopLine>TOOLKIT</TopLine>
                            <Subtitle2>
                                <FaReact />
                                <FaBootstrap />
                                <FaCss3 />
                                <FaHtml5 />
                                <FaPython />
                                <FaJava />
                                <IoLogoJavascript />
                            </Subtitle2>
                            <BottomLine>Currently learning: LIT & three.js </BottomLine>
                            
                        </div>
                        

                        <div className="col-lg-5 d-flex flex-column px-0 ps-lg-5 mt-5 mt-lg-0">

                           

                            <img 
                            src={pic} 
                            alt={"letter k in a circle"} 
                            className="h-100 w-100" style={{objectFit:"cover"}}/>
                            </div>
 
                    </div>
                </div>
            </div>
        </div>
            
        
    );
};

export default InfoSection;
