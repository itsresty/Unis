import {HeroSection} from "../components/HeroSection";
import { Navbar } from "../components/Navbar";
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
            
        </main>
        {/* Footer */}


    </div>
};