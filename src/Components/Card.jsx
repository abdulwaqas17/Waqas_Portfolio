import React from "react";
import "../index.css";

const Card = (props) => {
  const { icon, title, number } = props;
  return (
    <div className="flex justify-center mt-3 ">
      <div
        className="flex flex-col items-center gap-1 border-2 border-primaryColor rounded-md p-4
       hover:bg-gray-100 md:max-w-[250px] md:w-[95px] w-[80%]"
      >
        <div>{icon}</div>
        <p className="text-lg font-semibold">{title}</p>
        <p className="text-gray-400">{number}</p>
      </div>
    </div>
  );
};

export default Card;

// import React from 'react'

export const Card2 = (props) => {
  const { image, title, description, link } = props;
  return (
    <div>
      <section className="p-10 bg-white">
        <div>
          <div className="max-w-xs rounded-lg  overflow-hidden shadow-lg transition-transform transform hover:scale-105">
            <img src={image} alt="My Image" className="md:h-[250px] md:w-[300px]" />
            <h3 className="text-xl font-bold ml-3">{title}</h3>
            <p className="mt-2 text-gray-600 ml-3 md:w-[280px]">{description}.</p>
            {/* <a href="#" className="block mt-4 text-indigo-500">{link}</a> */}
            <a
              href={link} target="_blank"
              className="block mt-4 text-indigo-500"
             
            >
              <button className="bg-primaryColor text-white p-2 w-full rounded-lg hover:bg-primaryColor transition duration-300">
                Live Demo
              </button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
