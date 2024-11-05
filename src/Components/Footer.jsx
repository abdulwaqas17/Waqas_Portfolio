import React from 'react';
import '../index.css';
import { FaFacebookF, FaTwitter, FaGoogle, FaInstagram, FaLinkedinIn, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='w-full h-[300px] bg-[#2aa8d2]'>
      {/* Remove the container if you want to extend the Footer to full width. */}
      <div className="container my-5">
        <footer className="bg-dark text-center text-white">
          {/* Grid container */}
          <div className="container p-4 pb-0">
            {/* Section: Social media */}
            <section className="mb-4 flex items-center justify-center gap-3">
              {/* Facebook */}
              <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button">
                <FaFacebookF size={30}/>
              </a>

              {/* Twitter */}
              <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button">
                <FaTwitter />
              </a>

              {/* Google */}
              <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button">
                <FaGoogle />
              </a>

              {/* Instagram */}
              <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button">
                <FaInstagram />
              </a>

              {/* Linkedin */}
              <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button">
                <FaLinkedinIn />
              </a>

              {/* Github */}
              <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button">
                <FaGithub />
              </a>
            </section>
            {/* Section: Social media */}
          </div>
          {/* Grid container */}

          {/* Copyright */}
          <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
            © 2024 Copyright:
            <a className="text-white">  Design By Zeeshan Ahmed Siddiqui </a>
          </div>
          {/* Copyright */}
        </footer>
      </div>
      {/* End of .container */}
    </div>
  );
};

export default Footer;
 