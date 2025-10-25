import React, { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Tilt from "react-parallax-tilt";
import { CgMenuRightAlt } from "react-icons/cg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
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

  const menuItems = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "project", label: "Projects" },
    { id: "education", label: "Education" },
  ];

  return (
    <nav
      className={`fixed bg-[#0c181d] py-8 top-0 mb-10 w-full z-50 transition duration-300 px-[7vw] md:px-[7vw] lg:px-[14vw] ${
        isScrolled
          ? "bg-[#1c282c] w-[70vw] mx-auto bg-opacity-50 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className={`text-white flex justify-between items-center font-poppins`}> {/* Added font-poppins here */}
        {/* Logo */}
        <Tilt
            key={null}
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope={true}
          >
          <div className="text-2xl md:text-3xl font-semibold font-mono cursor-pointer transition duration-300 transform hover:scale-120">
            <span className="bg-gradient-custom bg-clip-text text-transparent">&lt;</span>
            <span className="text-white">Ali</span>
            <span className="bg-gradient-custom bg-clip-text text-transparent">/</span>
            <span className="text-white">Hasan</span>
            <span className="bg-gradient-custom bg-clip-text text-transparent">&gt;</span>
          </div>
        </Tilt>
        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-lg text-gray-300 font-poppins"> {/* Changed font-outfit to font-poppins */}
          {menuItems.map((item) => (
            <li
              key={item.id}
              className={`cursor-pointer hover:text-[#009EC5] ${
                activeSection === item.id ? "text-[#009EC5]" : ""
              }`}
            >
              <button onClick={() => handleMenuItemClick(item.id)} className={``}>
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Social Icons (No font change needed here as they are icons) */}
        <div className="hidden md:flex space-x-4">
          <a
            href="https://github.com/AliHasan2006"
            target="_blank"
            className="text-gray-300 hover:text-[#009EC5]"
          >
            <FaGithub size={28} />
          </a>
          <a
            href="https://www.linkedin.com/in/ali-hasan-5174482a77"
            target="_blank"
            className="text-gray-300 hover:text-[#009EC5]"
          >
            <FaLinkedin size={28} />
          </a>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          {isOpen ? (
            <FiX
              className="text-5xl font-bold text-[#009EC5] cursor-pointer z-100"
              onClick={() => setIsOpen(false)}
            />
          ) : (
           <CgMenuRightAlt
              className="text-5xl font-bold text-[#009EC5] cursor-pointer"
              onClick={() => setIsOpen(true)}
            />
          )}
        </div>
      </div>

      {/* Mobile Menu Items */}
      {isOpen ? (
        <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-4/5 bg-[#1c282c] bg-opacity-60 backdrop-blur-lg z-70 rounded-lg shadow-lg md:hidden font-poppins"> {/* Added font-poppins here */}
          <ul className="flex flex-col items-center space-y-4 py-4 text-lg text-gray-300">
            {menuItems.map((item) => (
              <li
                key={item.id}
                className={`cursor-pointer hover:text-[#009EC5] ${
                  activeSection === item.id ? "text-[#009EC5]" : null
                }`}
              >
                <button onClick={() => handleMenuItemClick(item.id)}>
                  {item.label}
                </button>
              </li>
            ))}
            <div className="flex items-center space-x-4 py-4 text-gray-300">
              <a
                href="https://github.com/AliHasan2006"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white"
              >
                <FaGithub size={28} />
              </a>
              <a
                href="https://linkedin.com/in/ali-hasan-5174482a7"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white"
              >
                <FaLinkedin size={28} />
              </a>
            </div>
          </ul>
        </div>
      ) : null}
    </nav>
  );
};

export default Navbar;