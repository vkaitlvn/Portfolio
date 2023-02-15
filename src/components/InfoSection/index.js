
import React from 'react';

import {
     
   TopLine,
   Heading,
   Subtitle,
   BottomLine

} from './InfoElements'

import pic from "../../images/logo-white.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';




const InfoSection = ({
    alt,
}) => {
    return (
      
        
        <div style={{ background: '#000000'}} className="text-white row py-5" id='about' >
             
            <div className="col-12 px-0">
                
                <div className="container-lg">
                
                    
        

                    <div className="row px-4 justify-content-center align-items-center">
                        <div className="col-lg-6 mb-4 mb-md-0">


                            <TopLine>KAITCODES</TopLine>
                            <Heading >ABOUT ME</Heading>
                            <Subtitle>
                                Recent CS graduate with most experience in bulding and hosting websites, UI/UX design and research, and data science: research and analysis.
                            </Subtitle>
                            <BottomLine>Currently learning: three.js & Blender</BottomLine>

                            <TopLine>Most Utilized Languages:</TopLine>
                            <Subtitle>
                               <ul>Javascript, HTML/CSS, Java, LINUX/UNIX, SQL, R, Python </ul>
                               
                            </Subtitle>
                            




                        </div>
                        


                        
                        {/* <TrackVisibility>
                        {({ isVisible }) =>
                        <div className={isVisible ? "animate__animated animate__pulse" : ""}>
                            <div className="col-lg-5 d-flex flex-column px-0 ps-lg-5 mt-5 mt-lg-0">

                                <img 
                                src={pic} 
                                alt={"letter k in a circle"} 
                                className="h-100 w-100" style={{objectFit:"cover"}}/>
                            </div>
                        </div>}
                        </TrackVisibility> */}
                        <div className="col-lg-5 d-flex flex-column px-0 ps-lg-5 mt-5 mt-lg-0">

                            <TrackVisibility>
                            {({ isVisible }) =>
                        <div className={isVisible ? "animate__animated animate__pulse animate__infinite animate__slower" : ""}>

                            <img 
                            src={pic} 
                            alt={"letter k in a circle"} 
                            className="h-100 w-100" style={{objectFit:"cover"}}/>
                            </div>}

                            </TrackVisibility>
                        </div>

                        
                    </div>
                </div>
            </div>
        </div>
            
        
    );
};

export default InfoSection;
