import React, { useEffect, useState } from 'react'
import '../index.css'
import { Card2 } from '../Components/Card'
import { message, Spin } from 'antd';

const Portfolio = () => {

  let projects = [
    {

    projectId : 1,
    title : 'E-Commerce With Dashboard',
    image : '/images/ecomerce.jpg',
    description : 'Built a full-featured e-commerce platform with multi-role authentication (User, Admin, Employee) using JWT and NodeMailer for password recovery.',
    url : 'https://github.com/abdulwaqas17/eCommerce_Mern-Stack'
    
  },
    {

    projectId : 2,
    title : 'Event Booking And Approval',
    image : '/images/event.jpg',
    description : 'Built a full-featured e-commerce platform with multi-role authentication (User, Admin, Employee) using JWT and NodeMailer for password recovery.',
    url : 'https://github.com/abdulwaqas17/eventBookingAndApproval'
    
  },
    {

    projectId : 3,
    title : 'Blog App using Figma Design',
    image : '/images/blog.jpg',
    description : 'Built a full-featured e-commerce platform with multi-role authentication (User, Admin, Employee) using JWT and NodeMailer for password recovery.',
    url : 'https://figma-design-r-5-263696.netlify.app/'
    
  },
    {

    projectId : 4,
    title : 'Todo App List',
    image : '/images/todo.jpg',
    description : 'Built a full-featured e-commerce platform with multi-role authentication (User, Admin, Employee) using JWT and NodeMailer for password recovery.',
    url : 'https://todo-react-263696.netlify.app/'
    
  },
    {

    projectId : 5,
    title : 'Weather App',
    image : '/images/weather.jpg',
    description : 'Built a full-featured e-commerce platform with multi-role authentication (User, Admin, Employee) using JWT and NodeMailer for password recovery.',
    url : 'https://weather-app-r6-263696.netlify.app/'
    
  }
  ]

  // const [projects, setProjects] = useState([]);
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const fetchProjects = async () => {
  //     try {
  //       const response = await fetch('https://portfolio-server-jopl.onrender.com/projects');
  //       console.log('https://portfolio-server-jopl.onrender.com/projects');
        
  //       if (!response.ok) {
  //         throw new Error('Network response was not ok');
  //       }
  //       const data = await response.json(); // Await the JSON parsing here
  //       setProjects(data);
  //     } catch (error) {
  //       console.error('Error fetching projects:', error);
  //       message.error('Failed to load projects. Please try again later.');
  //     } finally {
  //       setLoading(false);
  //     }
  //   };
  //   fetchProjects();
  // }, []);

  // if (loading) {
  //   return (
  //     <div className='flex items-center justify-center' style={{ height: '100vh' }}>
  //       <Spin size='large' />
  //     </div>
  //   );
  // }

  return (
    <div className='mt-[100px]'>
        <h2 className="text-3xl font-bold text-center mb-5 text-primaryColor">My Portfolio</h2>
      <div className='flex items-center justify-evenly flex-wrap'>
      {projects.map((project) => (
        <Card2
          key={project.projectId}
          id={project.projectId}
          image={project.image}
          title={project.title}
          description={project.description}
          link={project.url}
        />
      ))}
      </div>
      
    </div>
  );
}

export default Portfolio;
