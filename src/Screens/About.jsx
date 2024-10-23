import React from 'react'
import '../index.css'
import { FaDownload, FaHeadset, FaLightbulb } from 'react-icons/fa'
import { GrCompliance } from 'react-icons/gr'

const About = () => {
  return (
    <div>
      <section id="about" className="p-10 bg-white mt-[50px]">
        <h2 className="text-3xl font-bold text-center mb-5 text-[orange]">About Me</h2>
        <div className='flex items-center justify-around w-full'>
          <div className='w-[350px] h-[400px] border-8 border-gray-200 rounded-custom shadow-lg overflow-hidden round'>
          </div>
          <div className='flex flex-col gap-8 '>
            <div className='flex flex-row gap-4 '>
              <div className='flex flex-col items-center gap-1 border-2 rounded-md p-2'>
                <div><FaLightbulb size={20} color='orange' /></div>
                <p>Experience</p>
                <p className='text-gray-400'>2+ years</p>
              </div>
              <div className='flex flex-col items-center gap-1 border-2 rounded-md p-2'>
                <div><GrCompliance size={20} color='orange' /></div>
                <p>Completed</p>
                <p className='text-gray-400'>25+ projects</p>
              </div>
              <div className='flex flex-col items-center gap-1 border-2 rounded-md p-2'>
                <div><FaHeadset size={20} color='orange' /></div>
                <p>Support</p>
                <p className='text-gray-400'>24/7 Online</p>
              </div>
            </div>
            <div><p className='text-sm text-gray-600 leading-relaxed '>I am a highly motivated and detail-oriented front-end web developer <br /> seeking a challenging role that utilizes my skills in HTML, CSS, JavaScript,  <br />React JS and various frameworks to build  responsive, user-friendly, and  <br />modern web applications. I aim to continuously learn and grow as a  developer,  <br />staying up to date with industry trends and best practices to deliver high-quality <br /> solutions.</p>
            </div>
            <div>
              <a target='_blank' href="https://drive.google.com/file/d/1A6mUOdxJornKsnmr3UaB58TFZMfqnIwf/view?usp=drive_link">
              <button className='flex items-center justify-center gap-1 px-6 py-4 bg-orange-500 text-white shadow-lg hover:bg-orange-600 transition duration-300'>
                <p>Download CV</p> 
                <div><FaDownload /></div>

              </button>
              </a>
            </div>
          </div>
        </div>
        <h2 className="text-3xl font-bold text-center mb-5 text-[orange] mt-5">Skills</h2>
      </section>
    </div>
  )
}

export default About
