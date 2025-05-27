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
      <div  className='flex items-center justify-around w-full h-[60px] fixed z-[4] top-0 bg-primaryColor border-b-2 border-b-primaryColor'>
        <div>
          <h3 className='font-bold text-white text-xl'>Muhammad Waqas</h3>
        </div>
        <div className='flex items-center flex-row gap-4 nav-linkk'>
          {routes.map(({ path, label }, index)=>(
            <NavLink key={index} to={path} className={({isActive})=>
             isActive ? 'text-[#17706c] underline font-bold': 'text-white hover:text-[#28777c]'}>
            {label}
            </NavLink>
          ))}
        </div>
        <div>
         
            <Link to="/contact"><button className='px-6 py-2 bg-transparent border-2 border-white text-white shadow-lg hover:bg-teal-500 transition duration-300'>Contact Me</button></Link>
         
         
        </div>
        <div className='toggle max-sm:mr-2'><Toggle/></div>
      </div>
    </div>
  )
}

export default Header
