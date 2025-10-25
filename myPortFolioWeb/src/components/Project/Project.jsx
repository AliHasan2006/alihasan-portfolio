import React from 'react'
import { projects } from '../../constants'
import { MdOpenInNew } from "react-icons/md";

function Project() {

  return (
    <section
      id="projects"
      className="py-24 font-sans"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white px-[6vw] md:px-[7vw] lg:px-[16vw]">Projects</h2>
         <div className="w-32 h-1 bg-gradient-custom mx-auto mt-2"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold px-[6vw] md:px-[7vw] lg:px-[16vw]">
         A showcase of the projects I have worked on, highlighting my skills and experience in various technologies
        </p>
      </div>
            {/* Projects Grid */}
{/* <div className="py-16 sm:py-8"> */}
      <div className="w-[82%] md:w-[70%] mx-auto">
        
        {/* Responsive Grid: Single column on small screens, two columns on large screens */}
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-8">
          
          {/* Map through the projects array to render each card */}
          {projects.map((project, index) => (
            <div 
                 key={index} 
                 className="flex flex-col rounded-xl border border-gray p-6 shadow-2xl transition duration-300 hover:shadow-lg hover:border-[#009EC5] hover:shadow-gray-700/50 mb-5"
            >
              
              {/* Image/Screenshot Area */}
            <div className="h-64 overflow-hidden rounded-lg border border-gray-700/50">
                     {/* Actual Image using <img> tag */}
                 <img 
                src={project.img} 
                alt={`${project.title} screenshot`} 
                className="w-full h-full object-cover" 
                 /> 
            </div>
              
              {/* Content Area */}
              <div className="mt-8 flex-grow">
                <h3 className="text-3xl font-bold text-gray-200 mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.type}</p>
                <p className="text-gray-400 text-base mb-6">{project.description}</p>
                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <span 
                      key={i} 
                      className="text-sm cursor-pointer rounded-md font-semibold p-2 text-gray-300 bg-gray-600"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              {/* Action Buttons */}
              <div className="mt-6 flex space-x-4 pt-4 border-t border-gray-700">
                <a 
                  href={project.demoLink} 
                  className="flex items-center space-x-2 rounded-lg border border-white/20 bg-gray-200 px-4 py-2 text-sm font-medium text-black shadow-sm hover:bg-gray-300"
                  target='_blank'
                >
                  <span><MdOpenInNew/></span>
                  <span>Live Demo</span>
                </a>
                <a 
                  href={project.codeLink} 
                  className="flex items-center space-x-2 rounded-lg border border-white/10 px-4 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700"
                  target='_blank'
                >
                  <span>Code</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Project;

