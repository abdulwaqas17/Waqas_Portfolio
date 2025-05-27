import React, { useContext, useState } from 'react';
import { Drawer } from 'antd';
import { CiMenuFries } from 'react-icons/ci';
import { routes } from '../Routes';
import { NavLink } from 'react-router-dom';

const Toggle = ({setShowLogin}) => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] =useState(true);
 
const showLoading = () => {
    setOpen(true);
    setLoading(false);

    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };
  return (
    <>
      <button onClick={showLoading}>
      <CiMenuFries size='30' color='white' />
      </button>
      <Drawer 
        closable
        destroyOnClose
        title={<div className='footer-name flex items-center justify-center gap-0'>
            <div className='w-[60px] h-[60px] rounded-full border bg'></div>
            <h2 className='text-xl font-bold ml-2 text-[#219e8d]'>Muhammad Waqas</h2>
          </div>}
        placement="right"
        open={open}
        loading={loading}
        onClose={() => setOpen(false)}
      >
        
        <div className='flex items-center flex-col justify-center gap-4 mt-16'>
          {routes.map(({ path, label, icon }, index)=>(
            <NavLink key={index} to={path} onClick={() => setOpen(false)} className={({isActive})=>
             isActive ? 'text-[#18586d]  text-xl underline font-bold': ' text-xl text-primaryColor hover:text-[#2d7a70]'}>
             <div className='flex gap-2'>{icon}{label}</div>
            </NavLink>
          ))}
        </div>
      </Drawer>
    </>
  );
};

export default Toggle;