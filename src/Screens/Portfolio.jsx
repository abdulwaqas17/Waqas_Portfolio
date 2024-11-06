import React, { useEffect, useState } from 'react'
import '../index.css'
import { Card2 } from '../Components/Card'
import { message, Spin } from 'antd';

const Portfolio = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch('https://portfolio-server-jopl.onrender.com/projects');
        console.log('https://portfolio-server-jopl.onrender.com/projects');
        
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json(); // Await the JSON parsing here
        setProjects(data);
      } catch (error) {
        console.error('Error fetching projects:', error);
        message.error('Failed to load projects. Please try again later.');
      } finally {
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);

  if (loading) {
    return (
      <div className='flex items-center justify-center' style={{ height: '100vh' }}>
        <Spin size='large' />
      </div>
    );
  }

  return (
    <div className='mt-[100px]'>
        <h2 className="text-3xl font-bold text-center mb-5 text-[#2aa8d2]">My Portfolio</h2>
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
