import React from 'react'

const Services = () => {
  return (
    <div>
      <section id="services" className="p-10 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-5">My Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-white p-5 rounded-lg shadow-lg text-center">
          <img src="path_to_icon" alt="Service 1" className="w-16 h-16 mx-auto mb-4"/>
          <h3 className="text-xl font-bold mb-2">Web Development</h3>
          <p className="text-gray-600">
            I build responsive and dynamic websites using the latest technologies.
          </p>
        </div>

        <div className="bg-white p-5 rounded-lg shadow-lg text-center">
          <img src="path_to_icon" alt="Service 2" className="w-16 h-16 mx-auto mb-4"/>
          <h3 className="text-xl font-bold mb-2">UI/UX Design</h3>
          <p className="text-gray-600">
            Creating intuitive and user-friendly designs for web and mobile applications.
          </p>
        </div>

        <div className="bg-white p-5 rounded-lg shadow-lg text-center">
          <img src="path_to_icon" alt="Service 3" className="w-16 h-16 mx-auto mb-4"/>
          <h3 className="text-xl font-bold mb-2">SEO Optimization</h3>
          <p className="text-gray-600">
            Improving website visibility and performance on search engines.
          </p>
        </div>
      </div>
    </section>
    </div>
  )
}

export default Services
