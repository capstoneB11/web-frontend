import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

const PublicHeader = () => {
  const location = useLocation()
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const shouldDisplayAboutMenu = location.pathname === '/' || location.pathname === '/login';
  const shouldDisplayLoginMenu = location.pathname === '/' || location.pathname === '/about';

  return (
    <header className="fixed top-0 left-0 w-full bg-orange-500 shadow-md z-10 h-24">
      <div className="flex w-full items-center justify-between px-3">
        <div className="px-4 max-w-[200px]">
          <a href="/">
            <img 
              src="/png/logo-white.png" 
              alt="Welcome" 
              className="max-w-full h-24" />
          </a>
        </div>
        <div className="hidden px-4 lg:flex space-x-4">
          {shouldDisplayAboutMenu && (
            <a 
            href="#about"
            className="text-white hover:text-orange-600 focus:text-orange-500"
            >About Us</a>
          )}
          {shouldDisplayLoginMenu && (
            <a
            href="login"
            className="text-white hover:text-orange-600 focus:text-orange-500"
            >Login</a>
          )}
        </div>
        <div className="lg:hidden flex items-center">
          {isMenuOpen ? (
            <button
              onClick={toggleMenu}
              className="text-xl text-black hover:text-orange-600"
            >
              ✕ {/* Close icon (e.g., 'X') when the menu is open */}
            </button>
          ) : (
            <button
              onClick={toggleMenu}
              className="text-xl text-black hover:text-orange-600"
            >
              ☰ {/* Hamburger icon (e.g., '☰') when the menu is closed */}
            </button>
          )}
        </div>
      </div>
      {isMenuOpen && (
        <div className="lg:hidden bg-white p-4">
          {shouldDisplayAboutMenu && (<a href="#about" className="block text-black hover:text-orange-600 focus:text-orange-500 py-2">About Us</a>)}
          {shouldDisplayLoginMenu && (<a href="login" className="block text-black hover:text-orange-600 focus:text-orange-500 py-2">Login</a>)}
        </div>
      )}
    </header>
  );
};

export default PublicHeader;