import React from 'react'
import '../index.css'

const Card = (props) => {
  const { icon, title, number } = props
  return (
    <div>
      <div className='flex flex-col items-center gap-1 border-2 border-sky-300 rounded-md p-2  hover:bg-gray-100'>
        <div>{icon}</div>
        <p>{title}</p>
        <p className='text-gray-400'>{number}</p>
      </div>
    </div>
  )
}

export default Card

// import React from 'react'

export const Card2 = (props) => {
  const { image, title, description, link } = props
  return (
    <div>
      <section id="projects" className="p-10 bg-white">
        <h2 className="text-3xl font-bold text-center mb-5 text-[#2aa8d2]">My Portfolio</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gray-100 p-5 rounded-lg shadow-lg">
            <img src={image} alt="My Image" className='h-[300px] w-[300px]'/>
            <h3 className="text-xl font-bold">{title}</h3>
            <p className="mt-2 text-gray-600">{description}.</p>
            {/* <a href="#" className="block mt-4 text-indigo-500">{link}</a> */}
            <a href={link} className="block mt-4 text-indigo-500" target='_blank
            '><button>Live Demo</button></a>
          </div>
        </div>
      </section>
    </div>
  )
}


