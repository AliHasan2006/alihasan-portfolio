import React from 'react'
import { MdLocationPin } from "react-icons/md";
import { IoIosMail } from "react-icons/io";
import { useState } from 'react';
function Contact() {
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data submitted:', formData);
    // Add your form submission logic here (e.g., API call)
    alert(`Thank you for your message, ${formData.name}! (Check console for data)`);
  };
  return (
 <section
      id="education"
      className="px-[12vw] md:px-[7vw] lg:px-[14vw] font-sans mb-20"
    >
      {/* Section Title */}
      <div className="text-center mb-12 md:mb-20">
        <h2 className="text-4xl font-bold text-white">Get In Touch</h2>
         <div className="w-32 h-1 bg-gradient-custom mx-auto mt-2"></div>
         <p className="text-gray-400 mt-4 text-lg font-semibold">
         Ready to start your next project? Let's discuss how we can work together
        </p>
      </div>

      <div  className='flex flex-col gap-12 md:flex-row text-white'>
        {/* left side */}
        <div className='md:w-1/2'>
         <h1 className='text-3xl sm:text-4xl md:text-5xl bg-gradient-custom bg-clip-text text-transparent font-semibold mb-8'>Let's Connect</h1>
         <p className='text-gray-400 text-md mb-8 mx-auto'>I'm always interested in new opportunities and exciting projects. Whether you have a question or just want to say hi, I'll do my best to get back to you!
        </p>
        {/* Contact Details */}
        <div className='flex flex-col space-y-2'>
          <div className='flex flex-row space-x-4 items-center'>
            <p className='text-3xl md:text-4xl text-white'><IoIosMail/></p>
          <div>
              <h3 className='text-gray-200 text-lg'>Mail</h3>
            <h3 className='text-gray-400 text-md'>alihasankazmi7214@gmail.com</h3>
          </div>
            </div>
          <div className='flex flex-row space-x-4 items-center'>
            <p className='text-3xl md:text-4xl text-white'><MdLocationPin/></p>
            <div>
              <h3 className='text-gray-200 text-lg'>Location</h3>
            <h3 className='text-gray-400 text-md'>Lucknow, Uttar Pradesh, India</h3>
            </div>
            </div>
        </div>
        </div>
        {/* right side */}
        <div className='md:w-1/2'>
            <form onSubmit={handleSubmit} className="space-y-6">
{/* Name Field */}
          <div className="form-group">
            <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Your Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-4 border-none rounded-lg bg-gray-800 text-white placeholder-gray-500 focus:ring-2 focus:ring-[#009EC5] focus:outline-none transition"
            />
          </div>

          {/* Email Field */}
          <div className="form-group">
            <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">Your Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-4 border-none rounded-lg bg-gray-800 text-white placeholder-gray-500 focus:ring-2 focus:ring-[#009EC5] focus:outline-none transition"
            />
          </div>

          {/* Message Field */}
          <div className="form-group">
            <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Write your message here</label>
            <textarea
              id="message"
              name="message"
              placeholder="Enter your message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="6" // Set the height of the textarea
              className="w-full p-4 border-none rounded-lg bg-gray-800 text-white placeholder-gray-500 resize-y focus:ring-2 focus:ring-[#009EC5] focus:outline-none transition"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button type="submit"
            className="w-full py-3 md:py-4 text-xl font-semibold rounded-xl text-black transition-all duration-300 transform hover:scale-[1.01] shadow-lg bg-gradient-custom"
          >
            Send message
          </button>
            </form>
        </div>
      </div>
</section>
  )
}

export default Contact