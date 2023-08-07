import React from 'react';
import { motion } from 'framer-motion';
import { images } from '../constants';
import { AppHeader } from './style';
export default function Header() {
  const scaleVariants = {
    whileInView: {
      scale: [0, 1],
      opacity: [0, 1],
      transition: {
        duration: 1,
        ease: 'easeInOut',
      },
    },
  };
  return (
    <AppHeader id='home' className='app__header app__flex'>
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className='app__header-info'
      >
        <div className='app__header-badge'>
          <div className='badge-cmp app__flex'>
            <span>👋</span>
            <div style={{ marginLeft: '20px' }}>
              <p className='p-text'>Hello, I am</p>
              <h1 className='head-text'>Rakhmatulloh</h1>
            </div>
          </div>
          <div className='tag-cmp app__flex'>
            <div style={{ marginLeft: '1rem' }}>
              <p className='p-text'>Front end developer</p>
              {/* <p className='p-text'>
                Freelancer
              </p> */}
            </div>
          </div>
        </div>
      </motion.div>
      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className='app__header-img'
      >
        <img src={images.profile} alt='profile_bg' />
        <motion.img
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1, ease: 'easeInOut' }}
          src={images.circle}
          alt='profile_circle'
          className='overlay_circle'
        />
      </motion.div>
      <motion.div
        variants={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className='app__header-circles'
      >
        {[images.react, images.redux, images.node].map((circle, index) => {
          return (
            <div className='circle-cmp app__flex' key={`circle-${index}`}>
              <img src={circle} alt='circle' />
            </div>
          );
        })}
      </motion.div>
    </AppHeader>
  );
}
