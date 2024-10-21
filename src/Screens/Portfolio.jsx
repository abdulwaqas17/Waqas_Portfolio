import React from 'react'
import '../index.css'

const Portfolio = () => {
  return (
    <div>
      <section id="projects" className="p-10 bg-white">
      <h2 className="text-3xl font-bold text-center mb-5">My Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-gray-100 p-5 rounded-lg shadow-lg">
          <h3 className="text-xl font-bold">Project Title</h3>
          <p className="mt-2 text-gray-600">A short description of the project.</p>
          <a href="#" className="block mt-4 text-indigo-500">View Project</a>
        </div>
        {/* Add more project cards similarly */}
      </div>
    </section>
    </div>
  )
}

export default Portfolio
