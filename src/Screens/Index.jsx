import React from 'react';
import { Link } from 'react-router-dom';
import { IoMdHand } from 'react-icons/io';
import '../index.css';

const Home = () => {
  return (
    <div className='flex items-center justify-center gap-12 px-10 py-16 flex-wrap-reverse home-bg max-sm:mt-5'>
      {/* Left Content Section */}
      <div className='flex flex-col items-center gap-6 max-w-lg'>
        <div className='flex items-center gap-2'>
          <p className='text-3xl font-light text-gray-800'>Hi,</p>
          <IoMdHand size={35} color='orange' className='-mt-2 animate-waving-hand' />
        </div>

        <div>
          <p className='text-3xl font-light text-center text-gray-700'>I'm</p>
          <h2 className='text-2xl  font-bold text-[#2aa8d2] mt-2 leading-tight sm:text-3xl'>
            ZEESHAN AHMED SIDDIQUI
          </h2>
        </div>

        <p className='text-sm text-gray-800 typewriter sm:text-lg'>
          Front-end Web Developer <span className='text-[#2aa8d2]'>|</span> UI/UX Designer
        </p>

        <p className='text-lg text-gray-600  text-center leading-relaxed'>
          I’m a creative web developer based in Pakistan, passionate and dedicated to my work.
        </p>

        <Link to='/contact'>
          <button className='px-6 py-4 bg-[#2aa8d2] text-white shadow-lg hover:bg-sky-700 transition duration-300'>
            Hire Me
          </button>
        </Link>
      </div>

      {/* Right Image Section */}
      <div className='w-[350px] h-[400px] border-8 border-gray-200 rounded-custom shadow-lg overflow-hidden round'>
      </div>
    </div>
  );
};

export default Home;
