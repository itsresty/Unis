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

  // Retry video play on user interaction (fixes mobile power-saving pause)
  useEffect(() => {
    const handleInteraction = () => {
      const videos = document.querySelectorAll("video");
      videos.forEach((video) => {
        if (video.paused) {
          video.play().catch((err) => console.log("Retry play:", err));
        }
      });
    };

    window.addEventListener("touchstart", handleInteraction);
    window.addEventListener("scroll", handleInteraction);

    return () => {
      window.removeEventListener("touchstart", handleInteraction);
      window.removeEventListener("scroll", handleInteraction);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-center items-center bg-black overflow-hidden transition-opacity duration-700 ease-out">
      {/* Mobile / Portrait Video */}
      <video
        className="w-full h-full object-cover block md:hidden"
        src="/dist/UnisPortrait.mp4" // portrait video
        autoPlay
        muted
        playsInline
        loop
        preload="auto"
        onLoadedMetadata={(e) => {
          const video = e.currentTarget;
          setTimeout(() => {
            try {
              video.play();
            } catch (err) {
              console.log("Video play was interrupted:", err);
            }
          }, 100);
        }}
      />

      {/* Desktop / Landscape Video */}
      <video
        className="w-full h-full object-cover hidden md:block"
        src="/dist/Unis.mp4" // landscape video
        autoPlay
        muted
        playsInline
        loop
        preload="auto"
        onLoadedMetadata={(e) => {
          const video = e.currentTarget;
          setTimeout(() => {
            try {
              video.play();
            } catch (err) {
              console.log("Video play was interrupted:", err);
            }
          }, 100);
        }}
      />

      {/* Overlay Text */}
      <div className="absolute text-white text-4xl font-bold">Everafter</div>
      <div className="absolute bottom-12 text-white text-lg animate-bounce">
        Scroll ↓
      </div>
    </div>
  );
};
