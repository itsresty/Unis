import { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { X, Menu } from 'lucide-react';
const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about",},
  { name: "Gallery", href: "#gallery" },
  { name: "Blogs", href: "#blogs" },
  { name: "Community", href: "#community" },
  { name: "Donations", href: "#donation" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); 
  return (
   <nav>
    
    <div className="flex justify-between items-center w-full  border-b border-black  pt-5 ">
      
 {/* Logo */}
      <a href="#home" className="flex items-center gap-2">
        <img 
          src="/logo.svg" 
          alt="Unis Logo"
          className="w-12 h-12"
        />
      </a>

      {/* Desktop Nav */}  
        <div className=" hidden md:flex space-x-6">
          {navItems.map((item, key) => (
            <a key={key} href={item.href} className="">
              {item.name}
            </a>
          ))}
        </div>
      {/* Mobile Menu Button */}

     <button
  onClick={() => setIsOpen(!isOpen)}
  className="md:hidden p-2 z-50"
  aria-label={isOpen ? "Close menu" : "Open menu"}
>
  {isOpen ? <X size={24} /> : <Menu size={24} />}
</button>

      <div className={cn(" fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center",
      "transition-all duration-300 md:hidden",
      isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      )}>
      
      <div className="flex flex-col space-y-6 text-2xl">
  {navItems.map((item, key) => (
    <a
      key={key}
      href={item.href}
      onClick={() => setIsOpen(false)}
      className=""
    >
      {item.name}
    </a>
  ))}
</div>

      </div>
    </div>
   </nav>
  );
};
