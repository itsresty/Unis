// SplashVideo.jsx
import React, { useState, useEffect } from "react";

export const SplashVideo = ({ onFinish }) => {
  const [isVisible, setIsVisible] = useState(true);

  // Hide splash on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(false);
      if (onFinish) onFinish();
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [onFinish]);

  if (!isVisible) return null;

  return (
    <div className="fixed top-0 left-0 w-screen h-screen z-50 flex justify-center items-center bg-black overflow-hidden transition-opacity duration-700 ease-out">
      {/* Desktop / Landscape Video */}
      <video
        className="hidden md:block w-full h-full object-cover"
        src="/Unis.mp4" // landscape video
        autoPlay
        muted
        playsInline
        loop
        preload="auto"
        onLoadedMetadata={(e) => e.currentTarget.play()}
      />

      {/* Mobile / Portrait Video */}
      <video
        className="block md:hidden w-full h-full object-cover"
        src="/UnisPortrait.mp4" 
        autoPlay
        muted
        playsInline
        loop
        preload="auto"
        onLoadedMetadata={(e) => e.currentTarget.play()}
      />

      {/* Overlay Text */}
      <div className="absolute text-white text-4xl font-bold">Everafter</div>
      <div className="absolute bottom-12 text-white text-lg animate-bounce">
        Scroll ↓
      </div>
    </div>
  );
};
