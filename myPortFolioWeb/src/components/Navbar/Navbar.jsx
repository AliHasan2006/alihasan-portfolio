import React, { useState, useEffect } from "react";
import { FiX } from "react-icons/fi";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import Tilt from "react-parallax-tilt";
import { CgMenuRightAlt } from "react-icons/cg";

const menuItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "project", label: "Projects" },
  { id: "contact", label: "Contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMenuItemClick = (sectionId) => {
    setActiveSection(sectionId);
    setIsOpen(false);
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed z-50 transition-all duration-300
        ${
          isScrolled
  ? "top-0 w-full bg-gray-700 shadow-md"
  : "top-0 md:top-4 left-1/2 -translate-x-1/2 w-full md:w-[80vw] lg:w-[70vw] md:rounded-2xl bg-gray-700 md:bg-gray-600 md:backdrop-blur-md shadow-lg"

        }`}
    >
      <div
        className={`flex justify-between items-center h-14 font-poppins
          ${isScrolled ? "px-[6vw]" : "px-6 md:px-8"}`}
      >
        {/* Logo */}
        <Tilt tiltMaxAngleX={15} tiltMaxAngleY={15}>
          <div className="text-xl md:text-2xl font-semibold font-mono cursor-pointer text-white">
            <span className="text-[#009EC5]">&lt;</span>
            <span>Ali</span>
            <span className="text-[#009EC5]">/</span>
            <span>Hasan</span>
            <span className="text-[#009EC5]">&gt;</span>
          </div>
        </Tilt>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-10 text-lg">
          <ul className="flex space-x-8">
            {menuItems.map((item) => (
              <li
                key={item.id}
                className={`cursor-pointer transition
                  ${
                    activeSection === item.id
                      ? "text-[#009EC5] font-semibold"
                      : "text-white hover:text-[#009EC5]"
                  }`}
              >
                <button onClick={() => handleMenuItemClick(item.id)}>
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(true)}>
            <CgMenuRightAlt className="text-3xl" />
          </button>
        </div>
      </div>

      {/* ================= MOBILE SIDEBAR ================= */}
      <div
        className={`fixed inset-0 z-50 md:hidden transition
          ${isOpen ? "visible" : "invisible"}`}
      >
        {/* Overlay */}
        <div
          onClick={() => setIsOpen(false)}
          className={`absolute inset-0 bg-black/40 transition-opacity
            ${isOpen ? "opacity-100" : ""}`}
        />

        {/* Sidebar */}
        <div
          className={`absolute top-0 right-0 h-full w-[75%] max-w-[320px]
            bg-gradient-to-b from-[#001325] to-[#020c1e]
            text-white px-6 py-8
            transform transition-transform duration-300
            ${isOpen ? "translate-x-0" : "translate-x-full"}`}
        >
          {/* Close */}
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 text-3xl"
          >
            <FiX />
          </button>

          {/* Menu */}
          <ul className="mt-16 space-y-6 text-lg">
            {menuItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => handleMenuItemClick(item.id)}
                  className={`transition hover:text-[#009EC5]
                    ${
                      activeSection === item.id
                        ? "text-[#009EC5] font-semibold"
                        : ""
                    }`}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>

          {/* Social Icons */}
          <div className="flex space-x-6 mt-10">
            <FaGithub className="text-xl hover:text-[#009EC5] cursor-pointer" />
            <FaLinkedin className="text-xl hover:text-[#009EC5] cursor-pointer" />
            <FaTwitter className="text-xl hover:text-[#009EC5] cursor-pointer" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
