import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Footer from "./components/Footer/Footer";
import Experience from "./components/Experience/Experience";
import Education from "./components/Education/Education";
import ThemeToggleButton from "./components/ThemeToggleButton";
import { ThemeProvider } from "./contexts/theme";
import Contact from "./components/Contact/Contact";
import Project from "./components/Project/Project";

const App = () => {
const [lightMode, setLightMode] = useState(false);
  const toggleTheme = () =>{
    console.log("hi");
    
    setLightMode(!lightMode);
  }

  // Define a class based on the lightMode state
  const themeClass = lightMode ? 'theme-light' : 'theme-dark';
  return (
<ThemeProvider value={{lightMode,toggleTheme}}>
      <div className="relative pt-20">
        <Navbar />
      <About />
        <Skills /> 
        <Experience />
        <Project/>
        <Education />
        <Contact />
        <Footer />
        {/* <ThemeToggleButton /> */}
        
   </div>
</ThemeProvider>
  );
};

export default App;