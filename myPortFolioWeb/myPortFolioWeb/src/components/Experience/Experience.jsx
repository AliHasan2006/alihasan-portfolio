import React from "react";
import ZennexLogo from '../../assets/company_logo/zennexLogo.jpg' // replace with your logo

 function Experience() {
  return (
    <section id="experience"
    className="py-22"
    >
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white px-[6vw] md:px-[7vw] lg:px-[16vw]">EXPERIENCE</h2>
        <div className="w-32 h-1 bg-gradient-custom mx-auto mt-2"></div>
        <p className="text-gray-400 mt-4 mx-2 text-lg font-semibold px-[6vw] md:px-[7vw] lg:px-[16vw]">
          A collection of my work experience and the roles I have taken in
          various organizations
        </p>
      </div>
    <div className="w-[82%] md:w-[60%] mx-auto bg-[white-700] rounded-2xl shadow-lg p-8 text-white border border-gray-300 hover:border-[#009EC5] hover:shadow-[inset_0_0_10px_1px_rgba(OLD_R, OLD_G, OLD_B, 0.3)] transition mb-4">
      {/* Header */}
      <div className="flex items-center justify-center gap-4 mb-4">
        <a href="https://zennexsolutions.com/"
     target="_blank"
    >
             {/* **FIX APPLIED HERE (Wrapped img in a div)** */}
             <div className="w-24 h-24 rounded-lg border border-gray-600 flex items-center justify-center bg-white transition duration-300 transform hover:scale-105 overflow-hidden">
                <img
                    src={ZennexLogo}
                    alt="Company Logo"
                    className="w-full h-full object-contain" // Now object-contain works better inside the div
                />
            </div>
    </a>
        <div>
          <h2 className="text-2xl font-bold bg-gradient-custom bg-clip-text text-transparent">Web Designer & Developer</h2>
          <div className="flex flex-col">
            <p className="text-gray-400 text-xl">Zennex Solutions</p>
          <p className="text-gray-500 text-md">June 2025 – Present</p>
          </div>
        </div>
      </div>

      {/* Description */}
      <p className="text-gray-400 text-lg md:text-xl leading-relaxed mb-6">
        Developed dynamic and scalable web applications using the MERN stack, 
        handling both frontend and backend development. Collaborated with 
        cross-functional teams to build responsive UI, implement RESTful APIs, 
        and optimize application performance in an agile environment.
      </p>

      {/* Skills */}
      <div>
        <h3 className="font-semibold text-center mb-3 text-2xl bg-gradient-custom bg-clip-text text-transparent">Skills *</h3>
        <div className="mt-4 flex flex-wrap md:justify-center gap-3">
          {["HTML", "CSS", "JavaScript", "React JS", "Node JS", "Tailwind CSS", "Redux"].map(
            (skill, index) => (
              <span
                key={index}
                className="text-black text-gray-300 bg-gray-600 px-2 md:px-3 py-1 rounded-md text-md font-medium  cursor-pointer transition"
              >
                {skill}
              </span>
            )
          )}
        </div>
      </div>
    </div>
    </section>
  );
}

export default Experience;