import { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "Home", href: "#home" },
  { 
    name: "About", 
    href: "#about",
    subCategory: [
      { name: "Members", href: "#members" },
      { name: "Achievements", href: "#achievements" },
      { name: "Albums", href: "#albums" },
    ]
  },
  { name: "Gallery", href: "#gallery" },
  { name: "Blogs", href: "#blogs" },
  { name: "Community", href: "#community" },
  { name: "Donations", href: "#donation" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  

  return (
   <nav>
    <div>
      
 {/* Logo */}
      <a href="#home" className="flex items-center gap-2">
        <img 
          src="/logo.svg" 
          alt="Unis Logo"
          className="w-12 h-12"
        />
      </a>


        <div>
          <a>
            {navItems.name}
          </a>
        </div>
    </div>
   </nav>
  );
};
