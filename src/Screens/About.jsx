import React from 'react'
import '../index.css'

const About = () => {
  return (
    <div>
     <section id="about" className="p-10 bg-white">
      <h2 className="text-3xl font-bold text-center mb-5">About Me</h2>
      <p className="text-gray-600 text-center max-w-3xl mx-auto">
        I am a passionate web developer with experience in creating dynamic and responsive websites.
      </p>
    </section>
    <section id="skills" className="p-10 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-5">My Skills</h2>
      <div className="flex justify-center space-x-4">
        <div className="text-center">
          <img src="path_to_icon" alt="React" className="w-16 h-16 mx-auto"/>
          <p className="mt-2">React</p>
        </div>
        <div className="text-center">
          <img src="path_to_icon" alt="JavaScript" className="w-16 h-16 mx-auto"/>
          <p className="mt-2">JavaScript</p>
        </div>
        {/* Add more skills similarly */}
      </div>
    </section>
    </div>
  )
}

export default About
