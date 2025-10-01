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
    <div className="fixed inset-0 z-50 flex justify-center items-center bg-black overflow-hidden">
      {/* Mobile / Portrait Video */}
      <video
        className="w-full h-full object-cover block md:hidden" // always visible on mobile
        src="dist/UnisPortrait.mp4" // portrait video for mobile
        autoPlay
        muted
        playsInline
        loop
        preload="auto"
        onLoadedMetadata={(e) => e.currentTarget.play()}
      />

      {/* Desktop / Landscape Video */}
      <video
        className="w-full h-full object-cover hidden md:block" // visible on md+ screens
        src="/dist/Unis.mp4"
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
