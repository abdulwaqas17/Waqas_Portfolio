import React, { useEffect, useState } from "react";
import "../index.css";
import { Card2 } from "../Components/Card";
import { message, Spin } from "antd";

const Portfolio = () => {
  let projects = [
    {
      projectId: 12,
      title: "Shiwani Textile (Project)",
      image: "/images/shiwani1.PNG",
      description:
        "Developed a modern textile website on Next.js with product catalog, categories, and live deployment for showcasing collections globally.",
      techs: ["Live", "Next Js", "Frammer Motion", "Swiper Js"],
      url: "https://shiwanitextile.com/",
    },
    {
      projectId: 13,
      title: "HS Outfitters (Project)",
      image: "/images/hs2.PNG",
      description:
        "Created a clothing brand website for HS Outfitters on Next.js with product showcase, category browsing, and live deployment for global customers.",
      techs: ["Live", "Next Js", "Frammer Motion", "JWT"],
      url: "https://hsoutfitters.com/",
    },

    {
      projectId: 6,
      title: "Clinic Management System",
      image: "/images/clinic1.PNG",
      description:
        "Worked on the Clinic Management System project, implementing features for scheduling, record keeping, and smooth daily operations.",
      techs: ["Next Js", "Express.js", "MongoDB","xls" ],
      url: "https://www.linkedin.com/posts/abdul-waqas-03a668323_mernstack-webdevelopment-fullstackdeveloper-activity-7401575023100243968-3yO2?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAFHKFC4BXh8oH2roMQZExr8NIvR2u-rjKHI",
    },
    {
      projectId: 90,
      title: "Expense Tracker",
      image: "/images/expense-tranker.png",
      description:
        "Contributed to building a complete Expense Tracker platform, enabling users to store, update, and review expenses effortlessly.",
      techs: [ "Next Js", "Express.js", "MongoDB","Open Api Key"],
      url: "https://www.linkedin.com/posts/abdul-waqas-03a668323_smitbootcamp3-expensetracker-fullstackdeveloper-activity-7391153855448670208-ddZT?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFHKFC4BXh8oH2roMQZExr8NIvR2u-rjKHI",
    },
    {
      projectId: 14,
      title: "Healt Mate",
      image: "/images/health-mate.jpg",
      description:
        "Developed an AI-powered healthcare platform named Health Mate using Next.js and Express.js, enabling users to manage reports.",
      techs: ["Next Js", "Express.js", "MongoDB"],
      url: "https://final-hackathon-ecru-sigma.vercel.app/",
    },
    {
      projectId: 15,
      title: "Store App",
      image: "/images/store-app.webp",
      description:
        "Built a store management app using React Native CLI where store owners can manage items, edit or delete products, and view their profiles.",
      techs: ["React Native"],
      url: "https://www.linkedin.com/posts/abdul-waqas-03a668323_reactnative-mobileappdevelopment-asyncstorage-activity-7404108778448654336-k6w_?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFHKFC4BXh8oH2roMQZExr8NIvR2u-rjKHI",
    },
   
    {
      projectId: 1,
      title: "E-Commerce With Dashboard",
      image: "/images/ecom-with-backend.png",
      description:
        "Built a full-featured e-commerce platform with multi-role authentication (User, Admin, Employee) using JWT and NodeMailer for password recovery.",
      techs: ["React JS", "Express.js", "MongoDB", "NodeMailer"],
      url: "https://www.linkedin.com/posts/abdul-waqas-03a668323_mern-ecommercewebsite-admindashboard-activity-7338951034687393792-MJH7?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFHKFC4BXh8oH2roMQZExr8NIvR2u-rjKHI",
    },
    {
      projectId: 2,
      title: "Event Booking And Approval",
      image: "/images/event.png",
      description:
        "Developed a MERN-based event booking and approval system with user/admin dashboards and MongoDB-powered data handling.",
      techs: ["React JS", "Node.js", "Express.js", "MongoDB"],
      url: "https://github.com/abdulwaqas17/eventBookingAndApproval",
    },
     {
      projectId: 3,
      title: "Blog App using Figma Design",
      image: "/images/blog-app.png",
      description:
        "Converting Figma design into a responsive React UI, using Firebase for user authentication and real-time Firestore database.",
      techs: ["React JS", "Firebase", "Figma"],
      url: "https://figma-design-r-5-263696.netlify.app/",
    },

    // {
    //   projectId: 5,
    //   title: "Online Resume Generator",
    //   image: "/images/resume.jpg",
    //   description:
    //     "Built a responsive Resume Generator using HTML, CSS, and JavaScript with multiple template options for easy to use and customization.",
    //   techs: ["HTML", "CSS", "JavaScript"],
    //   url: "https://abdulwaqas17.github.io/Resume-Generator_JS-24/",
    // },

 
    {
      projectId: 8,
      title: "SS Caterets Restaurant Website",
      image: "/images/ss-caters.PNG",
      description:
        "Created a responsive multi-section restaurant website using HTML & CSS featuring daily deals, special offers, and a clean menu layout.",
      techs: ["HTML", "CSS"],
      url: "https://abdulwaqas17.github.io/SS-CATERETS/",
    },
    
    {
      projectId: 4,
      title: "Todo List Web Application",
      image: "/images/todo.PNG",
      description:
        "Built a responsive TODO list app using React.js with full CRUD functionality, allowing users to add, update, delete, and mark tasks as complete.",
      techs: ["React Js", "Tailwind CSS", "Local Storage"],
      url: "https://todo-react-263696.netlify.app/",
    },
    {
      projectId: 9,
      title: "Acme Mart E-commerce Platform",
      image: "/images/acme.PNG",
      description:
        "Developed a multi-page responsive mart website, featuring multiple sections like products, categories, deals, and contact.",
      techs: ["HTML", "CSS"],
      url: "https://abdulwaqas17.github.io/ACME-Mart/",
    },
       {
      projectId: 7,
      title: "User and Admin Dashboard",
      image: "/images/adminDash.jpg",
      description:
        "Developed a responsive multi-role (User/Admin) dashboard with sign up/login authentication and role-based access control.",
      techs: ["HTML", "CSS", "JavaScript", "Local Storage"],
      url: "https://usersdashboard-263696.netlify.app/",
    },
    {
      projectId: 10,
      title: "E-commerce Website Functional",
      image: "/images/metro.PNG",
      description:
        "Built a multi-feature e-commerce website with add-to-cart, checkout flow, product filtering, and role-based dashboard.",
      techs: ["HTML", "CSS", "JavaScript", "Local Storage"],
      url: "https://ecommercewebsite-263696.netlify.app/",
    },
    {
      projectId: 11,
      title: "Positivus Website from Figma",
      image: "/images/positivus.PNG",
      description:
        "Converted the Positivus website from Figma design into responsive HTML, CSS, and Bootstrap with clean layout and mobile-friendly design.",
      techs: ["HTML", "CSS", "Bootstrap", "Figma"],
      url: "https://hackathonmodule1.netlify.app/",
    },
    // {
    //   projectId: 12,
    //   title: "Rock Paper Scissors Game",
    //   image: "/images/rps.PNG",
    //   description:
    //     "Built a full-featured e-commerce platform with multi-role authentication (User, Admin, Employee) using JWT and NodeMailer for password recovery.",
    //   techs: ["HTML", "CSS","JavaScript"],
    //   url: "https://abdulwaqas17.github.io/R-P-S_Game/",
    // },
  ];

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
    <div className="mt-[100px]">
      <h2 className="text-3xl font-bold text-center mb-8 text-primaryColor">
        My Portfolio
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[50px] gap-x-[100px] px-5 md:px-10 lg:px-20 mb-10">
        {projects.map((project) => (
          <Card2
            key={project.projectId}
            id={project.projectId}
            image={project.image}
            title={project.title}
            description={project.description}
            link={project.url}
            techs={project.techs}
          />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
