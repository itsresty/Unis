import React, { useState, useEffect } from "react";

export const SplashVideo = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleUserInteraction = () => {
      setIsVisible(false);
    };

    if (window.innerWidth >= 768) {
      // Desktop: listen for scroll (wheel)
      window.addEventListener("wheel", handleUserInteraction, { passive: true });
    } else {
      // Mobile: listen for tap (touchstart)
      window.addEventListener("touchstart", handleUserInteraction, { passive: true });
    }

    return () => {
      window.removeEventListener("wheel", handleUserInteraction);
      window.removeEventListener("touchstart", handleUserInteraction);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Desktop / Landscape Video */}
      <video
        className="w-full h-full object-cover hidden md:block"
        src="/Unis.mp4"
        autoPlay
        muted
        playsInline
        loop
        preload="auto"
      />
      {/* Desktop Overlay */}
      <div className="hidden md:flex absolute inset-0 flex-col justify-center items-center pointer-events-none">
        <h1 className="text-6xl font-bold text-white text-center">Everafter</h1>
        <p className="absolute bottom-12 text-lg animate-bounce text-white">Scroll</p>
      </div>

      {/* Mobile / Portrait Video */}
      <video
        className="w-full h-full object-cover block sm:block"
        src="/UnisPortrait.mp4"
        autoPlay
        muted
        playsInline
        loop
        preload="auto"
      />
      {/* Mobile Overlay */}
      <div className="flex md:hidden absolute inset-0 flex-col justify-center items-center pointer-events-none">
        <p className="absolute bottom-12 text-lg animate-bounce text-white">Tap to continue</p>
      </div>
    </div>
  );
};
