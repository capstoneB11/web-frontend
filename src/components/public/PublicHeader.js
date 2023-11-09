import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Logo from "../../assets/png/logo-new.png";

const PublicHeader = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogout = () => {
    const confirmLogout = window.confirm("EMANG BOLEH ? 🥺🥺🥺🥺🥺🥺🥺🥺🥺");

    if (confirmLogout) {
      // Clear the userToken from local storage
      localStorage.removeItem("userToken");

      // Navigate to the "/" page
      window.location.href = "/";
    }
  };

  const menuItems = [
    {
      label: "Homepage",
      path: "/",
      shouldDisplay:
        location.pathname === "/" || location.pathname === "/login",
    },
    {
      label: "Login",
      path: "login",
      shouldDisplay:
        location.pathname === "/" || location.pathname === "/about",
    },
    {
      label: "Home",
      path: "/dashboard/home",
      shouldDisplay: location.pathname.startsWith("/dashboard"),
    },
    {
      label: "Statistics",
      path: "/dashboard/stats",
      shouldDisplay: location.pathname.startsWith("/dashboard"),
    },
    {
      label: "Logout",
      shouldDisplay: location.pathname.startsWith("/dashboard"),
    },
  ];

  return (
    <header className="sticky top-0 left-0 w-full bg-orange-1 shadow-md z-10 sm:h-24 h-20">
      <div className="flex w-full h-full items-center justify-between px-4 sm:px-8">
        <div className="w-1/3 max-h-full sm:max-w-full">
          <a href="/">
            <img
              src={Logo}
              alt="Welcome"
              className="object-contain md:h-16 scale-100 sm:h-24 transition-transform hover:scale-110 duration-300"
            />
          </a>
        </div>
        <div className="hidden px-4 lg:flex space-x-4">
          {menuItems.map(
            (menuItem) =>
              menuItem.shouldDisplay &&
              (menuItem.label !== "Logout" ? (
                <a
                  key={menuItem.label}
                  href={menuItem.path}
                  className="font-medium text-orange-500 hover:text-orange-300 px-4 focus:text-black text-bold-2"
                >
                  {menuItem.label}
                </a>
              ) : (
                <button
                  key={menuItem.label}
                  onClick={() => handleLogout()} // Define handleLogout function
                  className="font-medium text-orange-500 hover:text-orange-300 px-4 focus:text-black text-bold-2"
                >
                  {menuItem.label}
                </button>
              ))
          )}
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
          {menuItems.map(
            (menuItem) =>
              menuItem.shouldDisplay &&
              (menuItem.label !== "Logout" ? (
                <a
                  key={menuItem.label}
                  href={menuItem.path}
                  className="font-medium text-orange-500 hover:text-orange-300 px-4 focus:text-black text-bold-2"
                >
                  {menuItem.label}
                </a>
              ) : (
                <button
                  key={menuItem.label}
                  onClick={() => handleLogout()} // Define handleLogout function
                  className="font-medium text-orange-500 hover:text-orange-300 px-4 focus:text-black text-bold-2 text-left"
                >
                  {menuItem.label}
                </button>
              ))
          )}
        </div>
      )}
    </header>
  );
};

export default PublicHeader;
