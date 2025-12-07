import React from 'react';

const EducationSection = () => {
  const educationData = [
    {
      degree: "Intermediate",
      institution: "Science and Commerce College Karachi",
      graduationYear: "2023-2025",
      details: "Pre-engineering",
    },
    {
      degree: "Matriculation",
      institution: "New Daisy Secondary School",
      graduationYear: "2023",
      details: "Science",
    },
    {
      degree: "Web and App Development",
      institution: "Saylani Mass IT Training",
      graduationYear: "May 2024 - July 2025",
      details: "IT Course",
    },
      {
      degree: "Frontend Developer Developer",
      institution: "Applotech",
      graduationYear: "June 2025 - Nov 2025",
      details: "Remote Job",
    },
    {
      degree: "MERN Stack Developer",
      institution: "SMIT Bootcamp 3.O",
      graduationYear: "Nov 2025 - Continuing",
      details: "Onsite Internship",
    },
  
  ];

  return (
    <section id="education" className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {educationData.map((edu, index) => (
            <div key={index} className="bg-white shadow-md rounded-lg p-6">
              <h3 className="text-xl sm:text-2xl font-semibold mb-2 text-primaryColor">{edu.degree}</h3>
              <p className="text-base sm:text-lg text-gray-600 mb-4">{edu.institution}</p>
              <p className="text-gray-700">Graduated: {edu.graduationYear}</p>
              <p className="text-gray-500">{edu.details}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
