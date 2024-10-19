import React from 'react'
import '../index.css'
import { routes } from '../Routes'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
      <div className='flex items-center justify-between'>
        <div>
          <h3>Zeeshan Ahmed Siddiqui</h3>
        </div>
        <div className='flex items-center flex-row gap-4'>
          {routes.map(({ path, label }, index)=>(
            <Link key={index} to={path}>
            {label}
            </Link>
          ))}
        </div>
        <div>
          <button>
            <Link to="/contact">Contact</Link>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Header
