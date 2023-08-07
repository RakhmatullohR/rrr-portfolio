import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import skillsList from '../mocks/skills';
import { AppSkills } from './style';

const Skills = () => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    setSkills(skillsList);
  }, []);

  return (
    <AppSkills id='skills'>
      <h2 className='head-text'>My Skills</h2>

      <div className='app__skills-container'>
        <motion.div className='app__skills-list'>
          {skills.map((skill) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className='app__skills-item app__flex'
              key={skill.name}
            >
              <div
                className='app__flex'
                style={{ backgroundColor: skill.bgColor }}
              >
                <img src={skill.icon} alt={skill.name} />
              </div>
              <p className='p-text'>{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </AppSkills>
  );
};

export default Skills;
