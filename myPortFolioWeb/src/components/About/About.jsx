import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import ProfileImgNew from '../../assets/ProfileImgNew.png';
import Tilt from 'react-parallax-tilt';

function About() {
  return (
    <section
      id='about'
      className='py-9 px-6 sm:px-10 lg:px-32 font-poppins mt-8'
    >
      <div className='flex flex-col items-center text-center'>

        {/* Profile Image */}
  <div className='flex justify-center'>
        <div className="p-[3px] bg-gradient-custom rounded-full">
          <Tilt
            tiltMaxAngleX={15}
            tiltMaxAngleY={15}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope={true}
            className="rounded-full"
          >
            <img
              src={ProfileImgNew}
              alt="Ali Hasan"
              className="w-40 h-40 sm:w-52 sm:h-52 md:w-64 md:h-64 rounded-full object-cover border-2 border-[#009EC5]"
            />
          </Tilt>
        </div>
      </div>

        {/* Text Content */}
        <div className='mt-6 sm:mt-8 px-2'>
          {/* Headline */}
          <h1 className='text-3xl sm:text-5xl md:text-6xl font-semibold text-white leading-snug flex flex-wrap justify-center'>
            Hey,&nbsp;I'm&nbsp;
            <span className='bg-gradient-custom bg-clip-text text-transparent'>
              Ali Hasan
            </span>
          </h1>

          {/* Type Animation */}
          <h3 className="text-lg sm:text-2xl md:text-5xl font-semibold mt-2 sm:mt-4 text-white">
            I am a{' '}
            <TypeAnimation
              sequence={[
                'Fullstack Developer', 2000,
                'Frontend Developer', 2000,
                'Backend Developer', 2000,
                'React Developer', 2000,
                'Web Developer', 2000
              ]}
              wrapper="span"
              cursor={true}
              repeat={Infinity}
              speed={50}
              className='bg-gradient-custom bg-clip-text text-transparent'
            />
          </h3>

          {/* About Paragraph */}
          <p className='text-gray-400 mt-4 text-sm sm:text-base max-w-md mx-auto leading-relaxed'>
            I am a passionate Software Developer with expertise in building clean,
            user-friendly, and performance-driven applications.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6">
            <a
              href="https://drive.google.com/file/d/1FHNhwFeqya6-67OmS5oNxsTSo1eTiRfj/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-white py-3 md:py-4 px-6 rounded-full text-sm sm:text-base font-semibold transition-transform hover:scale-105 bg-gradient-custom"
            >
              View Resume
            </a>

            <a
              href="#projects"
              className="inline-block text-white py-3 md:py-4 px-6 md:px-8 rounded-full text-sm sm:text-base font-semibold transition-transform hover:scale-105 border-2 border-white hover:border-[#009EC5]"
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
