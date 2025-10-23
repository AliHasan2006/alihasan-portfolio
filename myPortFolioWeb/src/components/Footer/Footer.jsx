import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  // Smooth scroll function
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bottom-0 text-white py-8 px-[12vw] md:px-[7vw] lg:px-[20vw]">
      <div className="container mx-auto text-center">
        {/* Name / Logo */}
              <h2 className="text-xl font-semibold text-white-500 hover:text-[#7555ff]"><a href="#about">Ali Hasan</a></h2>
        {/* Navigation Links - Responsive */}
        <nav className="flex flex-wrap justify-center space-x-4 sm:space-x-6 mt-4">
          {[
            { name: "About", id: "about" },
            { name: "Skills", id: "skills" },
            { name: "Experience", id: "experience" },
            { name: "Projects", id: "projects" },
            { name: "Education", id: "education" },
          ].map((item, index) => (
            <button
              key={index}
              onClick={() => handleScroll(item.id)}
              className="hover:text-[#7555ff] text-sm sm:text-base my-1"
            >
              {item.name}
            </button>
          ))}
        </nav>

        {/* Social Media Icons - Responsive */}
        <div className="flex flex-wrap justify-center space-x-4 mt-6">
          {[
            // { icon: <FaFacebook />, link: "https://www.facebook.com/tarun.kaushik.3511041/" },
            { icon: <FaTwitter />, link: "https://x.com/AliHasan2059781" },
            { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/ali-hasan-5174482a7/" },
            { icon: <FaInstagram />, link: "https://www.instagram.com/alihasan_kazmi/" },
            // { icon: <FaYoutube />, link: "https://www.youtube.com/codingmasteryt" },
            
          ].map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl hover:text-[#7555ff] transition-transform transform hover:scale-110"
            >
              {item.icon}
            </a>
          ))}
        </div>

        {/* Copyright Text */}
        <p className="text-sm text-gray-400 mt-6">
          © 2025 Ali Hasan. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;