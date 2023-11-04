import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Logo from '../../assets/png/logo-new.png'

const PublicHeader = () => {
  const location = useLocation()
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuItems = [
    { label: 'Homepage', path: '/', shouldDisplay: location.pathname === '/' || location.pathname === '/login' },
    { label: 'Login', path: 'login', shouldDisplay: location.pathname === '/' || location.pathname === '/about' },
    { label: 'Home', path: '/dashboard/home', shouldDisplay: location.pathname.startsWith('/dashboard')},
    { label: 'Tracker', path: '/dashboard/tracker', shouldDisplay: location.pathname.startsWith('/dashboard')},
    { label: 'Summary', path: '/dashboard/summary', shouldDisplay: location.pathname.startsWith('/dashboard')},
  ]

  return (
    <header className="sticky top-0 left-0 w-full bg-orange-1 shadow-md z-10 sm:h-24 h-20">
      <div className="flex w-full h-full items-center justify-between px-4 sm:px-8">
        <div className="w-1/3 max-h-full sm:max-w-full">
          <a href="/">
            <img 
              src={Logo} 
              alt="Welcome" 
              className="object-contain md:h-16 scale-100 sm:h-24 transition-transform hover:scale-110 duration-300" />
          </a>
        </div>
        <div className="hidden px-4 lg:flex space-x-4">
          {menuItems.map((menuItem) =>
            menuItem.shouldDisplay && (
            <a
              key={menuItem.label}
              href={menuItem.path}
              className="font-medium text-orange-500 hover:text-orange-300 px-4 focus:text-black text-bold-2"
              >
              {menuItem.label}
            </a>
          ))}
        </div>
        <div className="lg:hidden flex items-center">
          {isMenuOpen ? (
            <button
              onClick={toggleMenu}
              className="text-xl text-orange-500 hover:text-black"
            >
              ✕ {/* Close icon (e.g., 'X') when the menu is open */}
            </button>
          ) : (
            <button
              onClick={toggleMenu}
              className="text-xl text-orange-500 hover:text-black"
            >
              ☰ {/* Hamburger icon (e.g., '☰') when the menu is closed */}
            </button>
          )}
        </div>
      </div>
      {isMenuOpen && (
        <div className="lg:hidden bg-white p-4 space-y-4 flex flex-col">
          {menuItems.map((menuItem) => 
            menuItem.shouldDisplay && (
            <a
              key={menuItem.label}
              href={menuItem.path}
              className="text-orange-500 hover:text-orange-300 focus:text-black"
              >
              {menuItem.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};

export default PublicHeader;