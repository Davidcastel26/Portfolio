import React, { useEffect, useState } from "react";

// styles
import './Skills.scss'
import ReactTooltip from 'react-tooltip'
import { motion } from "framer-motion";
// components
import { AppWrap } from "../../wrapper";
// back sanity
import { urlFor, client } from "../../client";

const Skills = () => {

  const [experiences, setExperiences] = useState([])
  const [skills, setSkills] = useState([])
  
  useEffect(() => {
    const skillsQuery = '*[_type == "skills"]';
    const query = '*[_type == "experiences"]';

    client.fetch(query)
      .then((data) => {
        setExperiences(data)
        
      })
    client.fetch(skillsQuery)
      .then((data) => {
        setSkills(data)
        
      })
  }, [])

  return (
    <>
      <h2 className="head-text">Skills & Experience</h2>

      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          {
            skills.map((skill) => (
              <motion.div
                whileInView={{opacity: [0, 1]}}
                transition={{ duration: 0.5}}
                className="app__skills-item app__flex"
                key={skill.name}
              >
                <div className="app__flex" style={{backgroundColor:  skill.bgColor}}>
                  <img src={urlFor(skill.icon)} alt={skill.name} />
                </div>
                <p className="p-text">{skill.name}</p>
              </motion.div>
            ))
          }
        </motion.div>
        <motion.div className="app__skills-exp">

        </motion.div>
      </div>
    </>
  )
}

export default AppWrap(Skills, 'skills')