import { useState, useEffect } from "react";

export const Preloader = ({ onFinish }) => {
  const [isMobile, setIsMobile] = useState(false);

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 375);
    };

    // Initial check
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Handle user interaction to finish preloader
  useEffect(() => {
    const handleInteraction = () => {
      if (onFinish) onFinish();
    };

    window.addEventListener("touchstart", handleInteraction, { passive: true });
    window.addEventListener("scroll", handleInteraction, { passive: true });
    window.addEventListener("keydown", handleInteraction);

    return () => {
      window.removeEventListener("touchstart", handleInteraction);
      window.removeEventListener("scroll", handleInteraction);
      window.removeEventListener("keydown", handleInteraction);
    };
  }, [onFinish]);

  return (
    <div className="fixed inset-0 z-[99999] flex items-center justify-center bg-black">
        {/* -----LOGO-----*/}
        {/*--------------- */}
        
        
        
        {/* ------Desktop Preloader----- */}
        {isMobile && (
            <video
            autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
                
                >
                <source src="/Unis.mp4" type="video/mp4" />
            </video>
            
        )}
        {/* ---------------------------- */}
        
        
        
        {/* -----Mobile Preloader----- */}
        {isMobile && (
            <video
            autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
                
                >
                <source src="/Unis.mp4" type="video/mp4" />
            </video>
            
        )}
        {/* ---------------------------- */}
    </div>
  )
};
