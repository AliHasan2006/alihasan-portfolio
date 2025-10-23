// ThemeToggleButton.jsx
import React from "react";
// Assuming the path to your theme context is correct
import useTheme from "../contexts/theme"; 
import { IoMoonOutline, IoSunnyOutline } from "react-icons/io5";

const ThemeToggleButton = () => {
  // Destructure the state and function from the custom hook
  const { lightMode, toggleTheme } = useTheme();

  // Determine the current theme state for the icon and accessibility attributes
  const isLightMode = lightMode;
  const buttonLabel = isLightMode ? "Switch to Dark Mode" : "Switch to Light Mode";

  return (
    <button
      // Add 'aria-label' for accessibility, as the button content is an icon
      aria-label={buttonLabel} 
      onClick={toggleTheme}
      // Use standard Tailwind class composition for clarity
      className={`
        fixed bottom-8 right-8 p-3 rounded-full text-xl transition-all shadow-lg
        ${isLightMode 
          ? "bg-[#7555ff] text-white hover:bg-opacity-90" // Light mode style
          : "bg-white text-black hover:bg-gray-100" // Dark mode style
        }
        focus:outline-none focus:ring-4 focus:ring-opacity-50 
        ${isLightMode ? "focus:ring-[#7555ff]" : "focus:ring-white"}
      `}
      // Optional: Add a title for hover text on desktop
      title={buttonLabel} 
    >
      {/* Conditionally render the icon based on the current theme */}
      {isLightMode ? <IoMoonOutline /> : <IoSunnyOutline />}
    </button>
  );
};

export default ThemeToggleButton;