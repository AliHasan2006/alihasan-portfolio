import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import ProfileImgNew from '../../assets/ProfileImgNew.png';
import Tilt from 'react-parallax-tilt';
import { FaLongArrowAltDown } from "react-icons/fa";

function About() {
  return (
    <section
      id='about'
      // Simplified responsive padding for the section
      className='py-4 px-6 sm:px-10 lg:px-48 font-poppins mt-16 md:mt-20 lg:mt-12z'
    >
      <div className='flex flex-col items-center'>
        {/* Profile Image (Tilt) */}
        <div className="flex justify-center p-1 bg-gradient-custom w-49 h-49 sm:w-65 sm:h-65 md:w-[17.5rem] md:h-[17.5rem] rounded-full">
          <Tilt
            className="w-48 h-48 sm:w-64 sm:h-64 md:w-[17rem] md:h-[17rem] rounded-full"
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope={true}
          >
            <img
              src={ProfileImgNew}
              alt="Ali Hasan"
              className="w-full h-full rounded-full object-cover drop-shadow-[2_5px_5px_rgba(117,85,255,0.5)]"
            />
          </Tilt>
        </div>

        {/* Text Content */}
        <div className='text-center mt-8'>
          {/* Greetings - Used 'font-serif' for unique heading look. Replace with your custom font utility (e.g., 'font-unique-heading') */}
          <div className='text-4xl sm:text-5xl md:text-7xl font-poppins font-medium text-white mb-2 leading-tight flex justify-center'>
            <h1>Hey,  I'm</h1>
            <h1 className='bg-gradient-custom bg-clip-text text-transparent'>&nbsp;Ali Hasan</h1>
          </div>
          
          {/* TypeAnimation Section - Combined for all screen sizes */}
          {/* TypeAnimation is placed in a single Div, and responsive Tailwind classes are used instead of 'hidden sm:visible' for cleaner code.
              Removed unnecessary TypeAnimation props.
          */}
          <h3 className="text-2xl font-semibold bg-gradient-custom bg-clip-text text-transparent sm:text-4xl md:text-5xl font-serif leading-tight mt-4">
            <span className="text-white">I am a </span>
            <TypeAnimation
              sequence={[
                'Fullstack Developer', 2000,
                'Frontend Developer', 2000,
                'Backend Developer', 2000,
                'React Developer', 2000,
                // 'MERN Stack Developer', 2000,
                'Java Problem Solver', 2000,
              ]}
              wrapper="span"
              cursor={true}
              repeat={Infinity}
              speed={50}
              style={{ 
                display: 'inline-block', 
                // Custom color applied directly in style
              }}
            />
          </h3>

          {/* About me Paragraph - Added 'font-poppins' */}
          <p className='text-start md:text-center mb-10 mt-8 leading-relaxed max-w-2xl mx-auto font-poppins text-gray-400'>
            I am a passionate Software Developer with expertise in building clean, user-friendly, and performance-driven applications.
          </p>
          
          {/* Buttons */}
          <div 
            id="btn" 
            className="flex flex-row justify-center gap-6 mt-5"
          >
            {/* Resume Button */}
            <a
              href="https://drive.google.com/file/d/1FHNhwFeqya6-67OmS5oNxsTSo1eTiRfj/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-white py-4 px-6 md:px-10 rounded-full text-md font-semibold transition duration-300 transform hover:scale-105 bg-gradient-custom"
            >
              View Resume
            </a>

            {/* Work Button */}
            <a
              href='#skills'
              className="inline-block text-white py-4 px-10 md:px-8 rounded-full text-md font-semibold transition duration-300 transform hover:scale-105 border-2 border-white hover:border-[#009EC5]"
            >
              My Work
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;