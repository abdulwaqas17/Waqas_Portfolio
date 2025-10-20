import React from 'react';

const EducationSection = () => {
  const educationData = [
    {
      degree: "High School Certificate",
      institution: "Govt. Science and Commerce College Karachi",
      graduationYear: "2023-2025",
      details: "Pre-engineering",
    },
    {
      degree: "Secondary School Certificate",
      institution: "New Daisy Secondary School",
      graduationYear: "2023",
      details: "Science",
    },
    {
      degree: "Web and App Development",
      institution: "Saylani Mass IT Training",
      graduationYear: "2024-2025",
      details: "Mern Stack Developer",
    },
    {
      degree: "Certificate In Freelancing",
      institution: "Digi Skills Training Program",
      graduationYear: "2023",
      details: "Freelancing",
    },
    {
      degree: "MERN Stack Internship",
      institution: "Applotech",
      graduationYear: "2025",
      details: "Mern Stack Developer",
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
