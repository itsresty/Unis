import {HeroSection} from "../components/HeroSection";
import { Navbar } from "../components/Navbar";
import { ContactButton } from "../components/ContactButton";


export const Home = () => {
    return <div className="min-h-screen flex flex-col justify-between container">
       
      
        {/* Navbar */}
       <Navbar/>
        <ContactButton/>
        {/* Main Content */}
        <main>
            <HeroSection/>
            
        </main>
        {/* Footer */}


    </div>
};