import React from 'react'
import { projects } from '../../constants'

function Project() {
  return (
    <section
      id="education"
      className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">Projects</h2>
         <div className="w-32 h-1 bg-gradient-custom mx-auto mt-2"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
         A showcase of the projects I have worked on, highlighting my skills and experience in various technologies
        </p>
      </div>
            {/* Projects Grid */}
<div className="grid gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <div
            key={project.id}
            onClick={() => handleOpenModal(project)}
            className="border border-white bg-gray-900 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden cursor-pointer hover:shadow-purple-500/50 hover:-translate-y-2 transition-transform duration-300"
          >
            <div className="p-6">
              <img
                src={project.image}
                alt={project.title}
                className="w-full rounded-md border border-gray-700"
              />
            </div>
            <div className="p-6">
              <h3 className="text-3xl font-bold">
                {project.title}
              </h3>
              <p className="text-lg text-gray-300 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 pt-2 border-t border-gray-800">
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-gray-700 text-gray-100 text-xs px-2 py-1 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
     <div className="flex space-x-4 pt-4">
                <button className="flex items-center justify-center px-4 py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition duration-150">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
                    Live Demo
                </button>
                <button className="flex items-center justify-center px-4 py-3 border border-gray-600 text-white font-semibold rounded-lg hover:bg-gray-800 transition duration-150">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>
                    Code
                </button>
            </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Project;
