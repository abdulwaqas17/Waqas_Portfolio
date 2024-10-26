import React from 'react'
import '../index.css'
import { routes } from '../Routes'
import { Link, NavLink } from 'react-router-dom'
import Toggle from './Drawer'
// import Drawer from './Drawer'
// import Toggle from './Drawer'

const Header = () => {
  return (
    <div>
      <div  className='flex items-center justify-around w-full h-[60px] fixed z-[2px] top-0 bg-[#2aa8d2] border-b-2 border-b-[#2aa8d2]'>
        <div>
          <h3 className='font-bold text-white text-xl'>Zeeshan Ahmed Siddiqui</h3>
        </div>
        <div className='flex items-center flex-row gap-4 nav-linkk'>
          {routes.map(({ path, label }, index)=>(
            <NavLink key={index} to={path} className={({isActive})=>
             isActive ? 'text-[#18586d] underline font-bold': 'text-white hover:text-[#18586d]'}>
            {label}
            </NavLink>
          ))}
        </div>
        <div>
         
            <Link to="/contact"><button className='px-6 py-4 bg-transparent border-2 border-white text-white shadow-lg hover:bg-sky-700 transition duration-300'>Contact Me</button></Link>
         
         
        </div>
        <div className='toggle'><Toggle/></div>
      </div>
    </div>
  )
}

export default Header
