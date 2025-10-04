
import AboutSection from "../components/AboutSection";
import BlogsSection from "../components/BlogsSection";
import CommunitySection from "../components/CommunitySection";
import ContactSection from "../components/ContactSection";
import DonationsSection from "../components/DonationsSection";
import GallerySection from "../components/GallerySection";
import {HeroSection} from "../components/HeroSection";

import { SplashVideo } from "../components/SplashVideo";
import { useState } from "react";

export const Home = () => {
     const [showSplash, setShowSplash] = useState(true);
    
    return  <div className="min-h-screen flex flex-col justify-between container">
       
       {/* Splash on top */}
        {showSplash && <SplashVideo onFinish={() => setShowSplash(false)} />}


       
        {/* Main Content */}
        <main>
            <HeroSection/>
            <AboutSection/>
            <GallerySection/>
            <BlogsSection/>
            <CommunitySection/>
            <DonationsSection/>
            <ContactSection/>    
        </main>
        
    
    </div>
};