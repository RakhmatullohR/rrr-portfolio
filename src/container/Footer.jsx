import React from 'react';
import { AppFooter } from './style';
import { AiFillMail } from 'react-icons/ai';
import { FaTelegram } from 'react-icons/fa';
import { FaSquarePhone } from 'react-icons/fa6';

export default function Footer() {
  return (
    <AppFooter id='contact'>
      <div className='hero'>
        <div className='head-text'>contact me</div>
        <div className='description'>
          If you have seen my potential or want to talk to me, feel free to send
          me a message
        </div>
      </div>
      <div className='social_link_wrapper app__flex'>
        <div className='social_link'>
          <AiFillMail />
          <span>rrr.engineer.94@gmail.com</span>
        </div>
        <div className='social_link'>
          <FaSquarePhone />
          <span>+99890-099-55-94</span>
        </div>
        <div className='social_link'>
          <FaTelegram />
          <span>@RakhmatullohR</span>
        </div>
      </div>
      <div className='footer_text'>© Digital One 2023. All rights reserved</div>
    </AppFooter>
  );
}
