import React, { useState } from 'react';
// import { images } from '../constants';
import { AppNavbar } from './style';
import { FaBars } from 'react-icons/fa';
import { FaX } from 'react-icons/fa6';
import { motion } from 'framer-motion';
import logo from '../assets/RakhmatullohR-logo.png';

export default function Navbar() {
  const [toggle, setToggle] = useState(false);

  // Function will execute on click of button
  const onButtonClick = () => {
    // using Java Script method to get PDF file
    fetch('./Rustamov.pdf').then((response) => {
      response.blob().then((blob) => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);
        // Setting various property values
        let alink = document.createElement('a');
        alink.href = fileURL;
        alink.download = 'Rustamov.pdf';
        alink.click();
      });
    });
  };
  return (
    <nav>
      <AppNavbar>
        <div className='app__navbar-logo'>
          <img src={logo} alt='logo' />
        </div>
        <ul className='app__navbar-links'>
          {['home', 'work', 'skills', 'contact']?.map((item) => {
            return (
              <li key={`link-${item}`} className='app__flex p-text'>
                <div />
                <a href={`#${item}`}>{item}</a>
              </li>
            );
          })}
          <li className='app__flex p-text'>
            <div />
            <span onClick={onButtonClick}>resume</span>
          </li>
        </ul>
        <div className='app__navbar-menu'>
          <FaBars onClick={() => setToggle(!toggle)} />

          {toggle && (
            <motion.div
              whileInView={{ x: [300, 0] }}
              transition={{ duration: 0.85, ease: 'easeOut' }}
            >
              <FaX onClick={() => setToggle(!toggle)} />
              <ul>
                {['home', 'work', 'skills', 'contact']?.map((item) => {
                  return (
                    <li key={`link-${item}`}>
                      <a href={`#${item}`}>{item}</a>
                    </li>
                  );
                })}
                <li>
                  <span
                    onClick={onButtonClick}
                    style={{ color: 'red', cursor: 'pointer' }}
                  >
                    RESUME
                  </span>
                </li>
              </ul>
            </motion.div>
          )}
        </div>
      </AppNavbar>
    </nav>
  );
}
