import React, {useEffect, useState} from 'react'

// styles
import './Work.scss';
import { AiFillEye, AiFillGithub} from 'react-icons/ai';
import { motion } from 'framer-motion';
// components 
import {AppWrap} from '../../wrapper'
// back sanity
import { urlFor, client } from "../../client";

const Work = () => {

  // use State 
  const [activeFilter, setActiveFilter] = useState('All')
  const [animateCard, setAnimateCard ] = useState({ y : 0, opacity: 1 });
  const [works, setWorks] = useState([])
  const [filterWork, setFilterWork] = useState([])

  // use Effect 
  useEffect(()=>{
    const query = '*[_type == "works"]';

    client.fetch(query)
      .then((data)=>{
        setWorks(data)
        setFilterWork(data)
      })
  },[])

  const handleWorkFilter = (item) => { }

  return (
    <>
      <h2 className="head-text">My Creative <span> Portfolio </span> Section</h2>

      <div className="app__work-filter">
        {['UI/UX', 'Web App', 'React JS', 'All'].map((item,index) => (
          <div
            key={index}
            onClick={() => handleWorkFilter(item)}
            className={`app__work-filter-item app__flex p-text ${activeFilter  === item ? 'item-active' : '' }`}
          >
            {item}
          </div>
          
        ))}
      </div>
      <motion.div
        animate={animateCard}
        transition={{duration: 0.5, delayChildren: 0.5}}
        className="app__work-portfolio"
      >
        {works.map((work, index)=>(
         
          <div className="app__work-item app__flex" key={index}>
            <div className="app__work-img app__flex">
              <img src={urlFor(work.imgUrl)} alt={work.name} />
              <motion.div
                whileHover={{opacity: [0, 1]}}
                transition={{duration:0.25, ease:'easeInOut', staggerChildren: 0.5}}
                className="app__work-hover app__flex"
              >
                <a href={work.projectLink} alt='projectLink' target="_blank" rel='noreferrer'></a>
              </motion.div>
             {
              console.log(` ${urlFor(work.imgUrl)} + WORK`)
             }
            </div>
          </div>
        ))}
      </motion.div>
    </>
  )
}

export default Work