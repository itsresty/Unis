import React, { useState, useEffect, useRef } from "react";

export const SplashVideo = () => {
  const [isVisible, setIsVisible] = useState(true);
  const mobileVideoRef = useRef(null);
  const desktopVideoRef = useRef(null);

  useEffect(() => {
    // Force play videos on mount
    const playVideo = async () => {
      try {
        if (window.innerWidth < 768 && mobileVideoRef.current) {
          await mobileVideoRef.current.play();
        } else if (desktopVideoRef.current) {
          await desktopVideoRef.current.play();
        }
      } catch (err) {
        console.error("Video play error:", err);
      }
    };

    playVideo();

    const handleUserInteraction = () => {
      setIsVisible(false);
    };

    if (window.innerWidth >= 768) {
      window.addEventListener("wheel", handleUserInteraction, { passive: true });
    } else {
      window.addEventListener("touchstart", handleUserInteraction, { passive: true });
    }

    return () => {
      window.removeEventListener("wheel", handleUserInteraction);
      window.removeEventListener("touchstart", handleUserInteraction);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black">
      {/* Desktop / Landscape Video */}
      <video
        ref={desktopVideoRef}
        className="hidden md:block w-full h-full object-cover"
        muted
        playsInline
        loop
        preload="auto"
        style={{ backgroundColor: 'black' }}
      >
        <source src="/Unis.mp4" type="video/mp4" />
      </video>
      
      {/* Desktop Overlay */}
      <div className="hidden md:flex absolute inset-0 flex-col justify-center items-center pointer-events-none">
        <h1 className="text-6xl font-bold text-white text-center drop-shadow-lg">Everafter</h1>
        <p className="absolute bottom-12 text-lg animate-bounce text-white drop-shadow-lg">Scroll</p>
      </div>

      {/* Mobile / Portrait Video */}
      <video
        ref={mobileVideoRef}
        className=" w-full h-full object-cover absolute inset-0"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster=""
        x-webkit-airplay="allow"
       
      >
        <source src="/UnisPortrait.mp4" />
      </video>
      
      {/* Mobile Overlay */}
      <div className="flex md:hidden absolute inset-0 flex-col justify-center items-center pointer-events-none">
        <p className="absolute bottom-12 text-lg animate-bounce text-white px-4 text-center drop-shadow-lg">
          Tap to continue
        </p>
      </div>
    </div>
  );
};