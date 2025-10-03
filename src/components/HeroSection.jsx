import React, { useState, useEffect } from "react";

export const HeroSection = () => {
  // TextType component inside Hero.jsx
  function TextType({ text, typingSpeed = 100, pauseDuration = 1500, showCursor = true, cursorCharacter = "_" }) {
    const [displayText, setDisplayText] = useState("");
    const [textIndex, setTextIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
      let timeout;

      if (!isDeleting && charIndex < text[textIndex].length) {
        timeout = setTimeout(() => {
          setDisplayText((prev) => prev + text[textIndex][charIndex]);
          setCharIndex((prev) => prev + 1);
        }, typingSpeed);
      } else if (isDeleting && charIndex > 0) {
        timeout = setTimeout(() => {
          setDisplayText((prev) => prev.slice(0, -1));
          setCharIndex((prev) => prev - 1);
        }, typingSpeed / 2);
      } else if (!isDeleting && charIndex === text[textIndex].length) {
        timeout = setTimeout(() => setIsDeleting(true), pauseDuration);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setTextIndex((prev) => (prev + 1) % text.length);
      }

      return () => clearTimeout(timeout);
    }, [charIndex, isDeleting, text, textIndex, typingSpeed, pauseDuration]);

    return (
      <span>
        {displayText}
        {showCursor && <span>{cursorCharacter}</span>}
      </span>
    );
  }

  return (
    <section className="hero min-h-screen flex items-center justify-center " id="#herosection">
      <h1 className="text-4xl font-bold">
        <TextType
          text={["Hi, I'm Resty Montero", "Future Full Stack Developer", "Happy coding!"]}
          typingSpeed={75}
          pauseDuration={1500}
          showCursor={true}
          cursorCharacter="_"
        />
      </h1>
    </section>
  );
};
