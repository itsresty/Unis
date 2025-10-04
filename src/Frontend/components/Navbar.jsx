import { useState } from "react";
import { X, Menu, Heart, Search } from "lucide-react";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Gallery", href: "#gallery" },
  { name: "Blogs", href: "#blogs" },
  { name: "Community", href: "#community" },
  { name: "Donations", href: "#donations" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  return (
    <nav className="w-full border-b bg-white fixed z-999">
      {/* Desktop Navbar */}
      <div className="hidden md:flex justify-evenly items-center px-6 py-4">
        {/* Logo */}
        <a href="#home" className="flex items-center">
          <img src="/logo.svg" alt="Unis Logo" className="w-15 h-15" />
        </a>

        {/* Nav Links */}
        <div className="flex space-x-6">
          {navItems.map((item, key) => (
            <a key={key} href={item.href} className="hover:text-blue-600">
              {item.name}
            </a>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex items-center gap-4">
          <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
            <Heart size={22} />
          </button>

          {/* Search Box only on PC */}
          <div className="flex items-center border rounded-full px-3 py-1">
            <Search size={18} className="text-black" />
            <input
              type="text"
              placeholder="Search..."
              className="ml-2 outline-none text-sm"
            />
          </div>
        </div>
      </div>

      {/* Mobile Navbar */}
      <div className="flex md:hidden justify-between items-center px-4 py-3">
        {/* Logo left */}
        <a href="#home" className="flex items-center">
          <img src="/logo.svg" alt="Unis Logo" className="w-12 h-12" />
        </a>

        {/* Buttons right */}
        <div className="flex items-center gap-1">
          <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
            <Heart size={22} />
          </button>

          <button
            onClick={() => setShowSearch(!showSearch)}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <Search size={22} />
          </button>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Container */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg border-t px-4 py-4 space-y-4">
          {navItems.map((item, key) => (
            <a
              key={key}
              href={item.href}
              className="block text-gray-700 hover:text-blue-600 transition-colors"
              onClick={() => setIsOpen(false)} // close menu on click
            >
              {item.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};
