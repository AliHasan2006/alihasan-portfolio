import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Footer from "./components/Footer/Footer";
import Experience from "./components/Experience/Experience";
import Education from "./components/Education/Education";
import Contact from "./components/Contact/Contact";
import Project from "./components/Project/Project";
import Preloader from "./components/Preloader/Preloader";


const App = () => {
  // const [lightMode, setLightMode] = useState(false);
  const [loading, setLoading] = useState(true);

  // Loading Timer: Page refresh hone par 2.5 seconds chalega
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 700);
    return () => clearTimeout(timer);
  }, []);

  // const toggleTheme = () => {
  //   setLightMode(!lightMode);
  // };

  // Agar loading true hai, toh sirf preloader dikhao
  if (loading) {
    return <Preloader/>;
  }

  // Theme ke liye simple class logic
  // const themeClass = lightMode ? "bg-white text-black" : "bg-[#0a0a0a] text-white";

  return (
    <div className={`relative pt-20 min-h-screen transition-colors duration-500`}>
      {/* Navbar ko toggle function pass kar sakte hain agar button wahan hai */}
      <Navbar/>
      
      <div className="fade-in-content">
        <About />
        <Skills />
        <Experience />
        <Project />
        <Education />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default App;