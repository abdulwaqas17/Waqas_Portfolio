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
      <section  className="p-10 bg-white">
        <div>
          <div className="bg-gray-100 p-5 shadow-lg flex items-center flex-col h-[350px] w-[300px]">
            <img src={image} alt="My Image" className='h-[200px] w-[260px]'/>
            <h3 className="text-xl font-bold">{title}</h3>
            <p className="mt-2 text-gray-600 w-[280px]">{description}.</p>
            {/* <a href="#" className="block mt-4 text-indigo-500">{link}</a> */}
            <a href={link} className="block mt-4 text-indigo-500" target='_blank
            '><button>Live Demo</button></a>
          </div>
        </div>
      </section>
    </div>
  )
}


