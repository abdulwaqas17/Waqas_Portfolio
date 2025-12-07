import React, { useState } from "react";
import {
  FaInstagram,
  FaFacebook,
  FaLinkedin,
  FaGithub,
  FaTwitter,
} from "react-icons/fa";
import { Modal } from "antd";
import { TbBrandFiverr } from "react-icons/tb";
import { FaX, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  const handleSuccesClick = (e) => {
    e.preventDefault();

    if (email.trim() === "") {
      setModalMessage("Please enter your email ID");
    } else {
      setModalMessage("Your subscription has been added!");
    }

    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
    if (modalMessage === "Your subscription has been added!") {
      setEmail("");
    }
  };

  return (
    <div className="footer text-white p-8">
      <div className="container mx-auto">
        <div className="subscription text-center mb-8">
          <h6 className="text-black mb-4">
            Subscribe to our newsletter and stay updated
          </h6>
          <div className="flex justify-center">
            <form
              className="flex flex-wrap items-center justify-center form"
              onSubmit={handleSuccesClick}
            >
              <input
                type="email"
                placeholder="Your email ID"
                className="footer-input rounded-md shadow-lg py-3 px-5 text-black border-none "
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button
                type="submit"
                className="bg-primaryColor text-white rounded-md text-center px-5 py-3 shadow-lg hover:bg-teal-600 transition duration-300 subscribe"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="footer-name flex items-center mb-4 md:mb-0">
            {/* <FaShopify color='red' size='40' /> */}
            <div className="w-[50px] h-[50px] rounded-full bg"></div>
            <h1 className="text-xl font-bold ml-2 text-primaryColor">
              Abdul Waqas
            </h1>
          </div>
          <div className="text-center md:text-left mb-4 md:mb-0 flex gap-2">
            <p className="text-black">Home</p>
            <p className="text-black">About</p>
            <p className="text-black">Services</p>
            <p className="text-black">Portfolio</p>
            <p className="text-black">Contact</p>
          </div>
          <div className="flex space-x-4 mb-4 md:mb-0">
            <a href="https://www.instagram.com/muhammad_waqas2005/?hl=en" target="_blank">
              <FaInstagram size="30" className="text-primaryColor hover:text-teal-600 transition-colors" />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=100045892972953" target="_blank"
           
            >
              <FaFacebook size="30" className="text-primaryColor hover:text-teal-600 transition-colors" />
            </a>
            <a
              href="https://www.linkedin.com/in/abdul-waqas-03a668323/"
              target="_blank"
            >
              <FaLinkedin size="30" className="text-primaryColor hover:text-teal-600 transition-colors" />
            </a>
            <a href="https://github.com/abdulwaqas17" target="_blank">
              <FaGithub size="30" className="text-primaryColor hover:text-teal-600 transition-colors" />
            </a>
           
          </div>
        </div>

        <div className="text-center mt-8">
          <h6 className="text-black">Copyright @ 2024 | All Rights Reserved</h6>
        </div>

        <Modal
          title="Subscription Status"
          visible={isModalVisible}
          onOk={handleOk}
          cancelButtonProps={{ style: { display: "none" } }}
        >
          <p>{modalMessage}</p>
        </Modal>
      </div>
    </div>
  );
};

export default Footer;
