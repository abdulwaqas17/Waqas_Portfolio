import React from 'react'
import '../index.css'
import { routes } from '../Routes'
import { Link, NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div>
      <div className='flex items-center justify-around w-full h-[60px] fixed z-[2px] top-0 bg-white border-b-2 border-b-[orange]'>
        <div>
          <h3 className='font-bold text-[orange] text-xl'>Zeeshan Ahmed Siddiqui</h3>
        </div>
        <div className='flex items-center flex-row gap-4'>
          {routes.map(({ path, label }, index)=>(
            <NavLink key={index} to={path} className={({isActive})=>
             isActive ? 'text-[orange] underline font-bold': 'text-black'}>
            {label}
            </NavLink>
          ))}
        </div>
        <div>
         
            <Link to="/contact"><button className='px-6 py-4 bg-orange-500 text-white shadow-lg hover:bg-orange-600 transition duration-300'>Contact Me</button></Link>
         
        </div>
      </div>
    </div>
  )
}

export default Header
