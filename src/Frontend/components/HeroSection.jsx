import React, { useState, useEffect, useRef } from "react";

export const HeroSection = () => {
  const AutoCarousel = ({ interval = 5000 }) => {
    const [current, setCurrent] = useState(0);
    const slidesRef = useRef([]);

    useEffect(() => {
      const slides = slidesRef.current;
      const timer = setInterval(() => {
        slides.forEach((img, index) => {
          if (img) img.style.opacity = index === current ? "1" : "0";
        });
        setCurrent((prev) => (prev + 1) % slides.length);
      }, interval);

      return () => clearInterval(timer);
    }, [current, interval]);

    return (
      <section>

            {/* Desktop */}
        <div className="relative w-full h-[500px] overflow-hidden pt-10 max-sm:hidden">
        <img
          ref={(el) => (slidesRef.current[0] = el)}
          src="/UnisCurious.jpeg"
          alt="Slide 1"
          className="absolute w-full h-full object-cover transition-opacity duration-700 opacity-100"
        />
        <img
          ref={(el) => (slidesRef.current[1] = el)}
          src="/UnisSwicy.jpeg"
          alt="Slide 2"
          className="absolute w-full h-full object-cover transition-opacity duration-700 opacity-0"
        />
        <img
          ref={(el) => (slidesRef.current[2] = el)}
          src="/UnisWeunis1.jpeg"
          alt="Slide 3"
          className="absolute w-full h-full object-cover transition-opacity duration-700 opacity-0"
        />
        <img
          ref={(el) => (slidesRef.current[3] = el)}
          src="/UnisWeunis2.jpeg"
          alt="Slide 4"
          className="absolute w-full h-full object-cover transition-opacity duration-700 opacity-0"
        />
      </div>

          {/* Mobile */}
          <div className="relative w-full h-[500px] overflow-hidden pt-3">
            <img
          ref={(el) => (slidesRef.current[0] = el)}
          src="/UnisCurious.jpeg"
          alt="Slide 1"
          className="absolute w-full h-full object-cover transition-opacity duration-700 opacity-100"
        />
        <img
          ref={(el) => (slidesRef.current[1] = el)}
          src="/UnisSwicy.jpeg"
          alt="Slide 2"
          className="absolute w-full h-full object-cover transition-opacity duration-700 opacity-0"
        />
         <img
          ref={(el) => (slidesRef.current[2] = el)}
          src="/UnisWeunis1.jpeg"
          alt="Slide 3"
          className="absolute w-full h-full object-cover transition-opacity duration-700 opacity-0"
        />
        <img
          ref={(el) => (slidesRef.current[3] = el)}
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
