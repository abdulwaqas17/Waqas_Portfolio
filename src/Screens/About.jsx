import React from "react";
import "../index.css";
import { FaDownload, FaHeadset, FaLightbulb } from "react-icons/fa";
import { GrCompliance } from "react-icons/gr";
import { MdVerified } from "react-icons/md";
import EducationSection from "../Components/EducationSection";
import Card from "../Components/Card";

const About = () => {
  return (
    <div>
      <section id="about" className="p-10 bg-white mt-[50px]">
        <h2 className="text-3xl font-bold text-center mb-5 text-primaryColor">
          About Me
        </h2>
        <div className="flex items-center justify-around w-full flex-wrap">
          <div className="w-[350px] h-[400px] border-8 border-gray-200 rounded-custom shadow-lg overflow-hidden round"></div>
          <div className="flex flex-col gap-8 ">
            <div className="flex md:flex-row gap-4 flex-col mt-5 ">
              <Card
                icon={<FaLightbulb size={20} className="text-primaryColor" />}
                title={"Experience"}
                number={"1+ years"}
              />
              <Card
                icon={<GrCompliance size={20} className="text-primaryColor" />}
                title={"Completed"}
                number={"50+ Projects"}
              />
              <Card
                icon={<FaHeadset size={20} className="text-primaryColor" />}
                title={"Support"}
                number={"24/7 Online"}
              />
            </div>
            <div>
              <p className="text-sm text-gray-600 leading-relaxed ">
                I am a highly motivated and detail-oriented front-end web
                developer <br /> seeking a challenging role that utilizes my
                skills in HTML, CSS, JavaScript, <br />
                React JS and various frameworks to build responsive,
                user-friendly, and <br />
                modern web applications. I aim to continuously learn and grow as
                a developer, <br />
                staying up to date with industry trends and best practices to
                deliver high-quality <br /> solutions.
              </p>
            </div>
            <div>
              <a href="/images/Muhammad_Waqas_CV1.pdf" download>
                <button className="flex items-center justify-center gap-1 px-6 py-4 bg-primaryColor text-white shadow-lg hover:bg-sky-700 transition duration-300">
                  <p>Download CV</p>
                  <div>
                    <FaDownload />
                  </div>
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center bd">
          <h2 className="text-3xl font-bold text-center mb-5 text-primaryColor mt-5">
            Skills
          </h2>
          <div className="flex items-center justify-center flex-col bg-slate-100 border-2 border-primaryColor mt-4 w-full sm:w-[500px] h-auto sm:h-[300px] rounded-md shadow-2xl hover:shadow-slate-800">
            <h2 className="font-bold underline text-center">
              Frontend & Backend Development
            </h2>
            <div className="flex items-center justify-center gap-4 flex-wrap mt-5">
              <div className="flex gap-1 items-center">
                <MdVerified className="text-primaryColor" size="20" />
                <p className="text-lg">
                  Html <br />{" "}
                  <h6 className="text-sm text-gray-400 ">Advance</h6>
                </p>
              </div>
              <div className="flex gap-1 items-center">
                <MdVerified className="text-primaryColor" size="20" />
                <p className="text-lg">
                  Css <br /> <h6 className="text-sm text-gray-400 ">Advance</h6>
                </p>
              </div>
              <div className="flex gap-1 items-center">
                <MdVerified className="text-primaryColor" size="20" />
                <p className="text-lg">
                  JavaScript <br />{" "}
                  <h6 className="text-sm text-gray-400 ">Intermediate</h6>
                </p>
              </div>
              <div className="flex gap-1 items-center">
                <MdVerified className="text-primaryColor" size="20" />
                <p className="text-lg">
                  React Js <br />{" "}
                  <h6 className="text-sm text-gray-400 ">Intermediate</h6>
                </p>
              </div>
              <div className="flex gap-1 items-center">
                <MdVerified className="text-primaryColor" size="20" />
                <p className="text-lg">
                  Node JS <br />{" "}
                  <h6 className="text-sm text-gray-400 ">Advance</h6>
                </p>
              </div>
              <div className="flex gap-1 items-center">
                <MdVerified className="text-primaryColor" size="20" />
                <p className="text-lg">
                  Express JS <br />{" "}
                  <h6 className="text-sm text-gray-400 ">Intermediate</h6>
                </p>
              </div>
              <div className="flex gap-1 items-center">
                <MdVerified className="text-primaryColor" size="20" />
                <p className="text-lg">
                  Mongo DB <br />{" "}
                  <h6 className="text-sm text-gray-400 ">Intermediate</h6>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bd">
          <h2 className="text-3xl font-bold text-center mb-5 text-primaryColor mt-16">
            Education
          </h2>
          <EducationSection />
        </div>
      </section>
    </div>
  );
};

export default About;
