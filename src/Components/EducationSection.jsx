import React from 'react';

const EducationSection = () => {
  const educationData = [
    {
      degree: "High School Certificate",
      institution: "DJ Sindh Govt. Science College Karachi",
      graduationYear: "Continue",
      details: "Key Courses: Data Structures, Web Development, AI & Machine Learning",
    },
    {
      degree: "Secondary School Certificate",
      institution: "New Daisy Secondary Scool",
      graduationYear: "2023",
      details: "Achievements: Top 10% of Class, Math Club President",
    },
  ];

  return (
    <section id="education" className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        {/* <h2 className="text-4xl font-bold text-center mb-12">Education</h2> */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {educationData.map((edu, index) => (
            <div key={index} className="bg-white shadow-md rounded-lg p-6">
              <h3 className="text-2xl font-semibold mb-2">{edu.degree}</h3>
              <p className="text-lg text-gray-600 mb-4">{edu.institution}</p>
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