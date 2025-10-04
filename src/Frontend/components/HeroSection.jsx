import React, { useState, useEffect, useRef } from "react";

export const HeroSection = () => {
  const AutoCarousel = ({ interval = 3000 }) => {
    const [current, setCurrent] = useState(0);
    const desktopSlidesRef = useRef([]);
    const mobileSlidesRef = useRef([]);

    useEffect(() => {
      const timer = setInterval(() => {
        // Update desktop slides
        desktopSlidesRef.current.forEach((img, index) => {
          if (img) img.style.opacity = index === current ? "1" : "0";
        });
        
        // Update mobile slides
        mobileSlidesRef.current.forEach((img, index) => {
          if (img) img.style.opacity = index === current ? "1" : "0";
        });
        
        setCurrent((prev) => (prev + 1) % 4);
      }, interval);

      return () => clearInterval(timer);
    }, [current, interval]);

    return (
      <section>
        {/* Desktop: hidden on small screens */}
        <div className="relative w-full h-[500px] overflow-hidden pt-10 hidden sm:block">
          <img
            ref={(el) => (desktopSlidesRef.current[0] = el)}
            src="/UnisCurious.jpeg"
            alt="Slide 1"
            className="absolute w-full h-full object-cover transition-opacity duration-700 opacity-100"
          />
          <img
            ref={(el) => (desktopSlidesRef.current[1] = el)}
            src="/UnisSwicy.jpeg"
            alt="Slide 2"
            className="absolute w-full h-full object-cover transition-opacity duration-700 opacity-0"
          />
          <img
            ref={(el) => (desktopSlidesRef.current[2] = el)}
            src="/UnisWeunis1.jpeg"
            alt="Slide 3"
            className="absolute w-full h-full object-cover transition-opacity duration-700 opacity-0"
          />
          <img
            ref={(el) => (desktopSlidesRef.current[3] = el)}
            src="/UnisWeunis2.jpeg"
            alt="Slide 4"
            className="absolute w-full h-full object-cover transition-opacity duration-700 opacity-0"
          />
        </div>

        {/* Mobile: hidden on medium+ screens */}
        <div className="relative w-full h-[300px] overflow-hidden pt-3 block sm:hidden">
          <img
            ref={(el) => (mobileSlidesRef.current[0] = el)}
            src="/UnisCurious.jpeg"
            alt="Slide 1"
            className="absolute w-full h-full object-cover transition-opacity duration-700 opacity-100"
          />
          <img
            ref={(el) => (mobileSlidesRef.current[1] = el)}
            src="/UnisSwicy.jpeg"
            alt="Slide 2"
            className="absolute w-full h-full object-cover transition-opacity duration-700 opacity-0"
          />
          <img
            ref={(el) => (mobileSlidesRef.current[2] = el)}
            src="/UnisWeunis1.jpeg"
            alt="Slide 3"
            className="absolute w-full h-full object-cover transition-opacity duration-700 opacity-0"
          />
          <img
            ref={(el) => (mobileSlidesRef.current[3] = el)}
            src="/UnisWeunis2.jpeg"
            alt="Slide 4"
            className="absolute w-full h-full object-cover transition-opacity duration-700 opacity-0"
          />
        </div>
      </section>
    );
  };

  return (
    <div className="pt-20">
      <AutoCarousel />
    </div>
  );
};

export default HeroSection;