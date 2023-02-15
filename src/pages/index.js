
import React, {useState} from 'react';
import Footer from '../components/Footer';
import FixSocialIcon from '../components/SocialIcon/FixSocialIcon';

import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar';
import Contact2 from '../components/Contact/Contact2';
import Projects from '../components/Projects/Projects'




 
const Home = () => {
    const[isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="container-fluid">
            <FixSocialIcon/>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            <HeroSection/>
            <InfoSection />
            <Projects/>
            <Contact2/>

            
            <Footer/>
            

            
            
            

    

        </div>

    );
}

export default Home;
