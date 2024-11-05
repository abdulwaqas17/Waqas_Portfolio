import React from 'react'
import '../index.css'
import { FaDownload, FaHeadset, FaLightbulb } from 'react-icons/fa'
import { GrCompliance } from 'react-icons/gr'
import { MdVerified } from 'react-icons/md'
import EducationSection from '../Components/EducationSection'
import Card from '../Components/Card'

const About = () => {
  
  return (
    <div>
      <section id="about" className="p-10 bg-white mt-[50px]">
        <h2 className="text-3xl font-bold text-center mb-5 text-[#2aa8d2]">About Me</h2>
        <div className='flex items-center justify-around w-full flex-wrap'>
          <div className='w-[350px] h-[400px] border-8 border-gray-200 rounded-custom shadow-lg overflow-hidden round'>
          </div>
          <div className='flex flex-col gap-8 '>
            <div className='flex flex-row gap-4 '>
              <Card icon={<FaLightbulb size={20} color='#2aa8d2' />} title={'Experience'} number={'2+ years'}/>
              <Card icon={<GrCompliance size={20} color='#2aa8d2' />} title={'Completed'} number={'25+ Projects'}/>
              <Card icon={<FaHeadset size={20} color='#2aa8d2' />} title={'Support'} number={'24/7 Online'}/>
            </div>
            <div><p className='text-sm text-gray-600 leading-relaxed '>I am a highly motivated and detail-oriented front-end web developer <br /> seeking a challenging role that utilizes my skills in HTML, CSS, JavaScript,  <br />React JS and various frameworks to build  responsive, user-friendly, and  <br />modern web applications. I aim to continuously learn and grow as a  developer,  <br />staying up to date with industry trends and best practices to deliver high-quality <br /> solutions.</p>
            </div>
            <div>
              <a  href="https://drive.usercontent.google.com/u/0/uc?id=1A6mUOdxJornKsnmr3UaB58TFZMfqnIwf&export=download">
                <button className='flex items-center justify-center gap-1 px-6 py-4 bg-[#2aa8d2] text-white shadow-lg hover:bg-sky-700 transition duration-300'>
                  <p>Download CV</p>
                  <div><FaDownload /></div>

                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center bd">
          <h2 className="text-3xl font-bold text-center mb-5 text-[#2aa8d2] mt-5">Skills</h2>
          <div className='flex items-center justify-center flex-col bg-slate-100 border-2 border-[#2aa8d2] mt-4 w-[500px] h-[300px] rounded-md shadow-2xl hover:shadow-slate-800'>
            <h2 className='font-bold underline'>Frontend development & UI/UX Design</h2>
            <div className="flex items-center justify-around gap-2 flex-wrap mt-5">
              <div className='flex gap-1 items-center'>
                <MdVerified color="#2aa8d2" size="20"/>
                <p className='text-lg'>Html <br /> <h6 className='text-sm text-gray-400 '>Advance</h6></p>
              </div>
              <div className='flex gap-1 items-center'>
                <MdVerified color="#2aa8d2" size="20"/>
                <p className='text-lg'>Css <br /> <h6 className='text-sm text-gray-400 '>Advance</h6></p>
              </div>
              <div className='flex gap-1 items-center'>
                <MdVerified color="#2aa8d2" size="20"/>
                <p className='text-lg'>JavaScript <br /> <h6 className='text-sm text-gray-400 '>Intermediate</h6></p>
              </div>
              <div className='flex gap-1 items-center'>
                <MdVerified color="#2aa8d2" size="20"/>
                <p className='text-lg'>React Js <br /> <h6 className='text-sm text-gray-400 '>Intermediate</h6></p>
              </div>
              <div className='flex gap-1 items-center'>
                <MdVerified color="#2aa8d2" size="20"/>
                <p className='text-lg'>Bootstrap <br /> <h6 className='text-sm text-gray-400 '>Advance</h6></p>
              </div>
              <div className='flex gap-1 items-center'>
                <MdVerified color="#2aa8d2" size="20"/>
                <p className='text-lg'>Git & GitHub <br /> <h6 className='text-sm text-gray-400 '>Intermediate</h6></p>
              </div>
              <div className='flex gap-1 items-center'>
                <MdVerified color="#2aa8d2" size="20"/>
                <p className='text-lg'>Tailwind Css <br /> <h6 className='text-sm text-gray-400 '>Intermediate</h6></p>
              </div>
              <div className='flex gap-1 items-center'>
                <MdVerified color="#2aa8d2" size="20"/>
                <p className='text-lg'>Adobe XD <br /> <h6 className='text-sm text-gray-400 '>Advance</h6></p>
              </div>
            </div>
          </div>
        </div>
        <div className='bd'>
        <h2 className="text-3xl font-bold text-center mb-5 text-[#2aa8d2] mt-16">Education</h2>
       <EducationSection/>
        </div>
      </section>
    </div>
  )
}

export default About
