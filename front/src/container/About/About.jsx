import React, { useEffect, useState } from "react";

// styles
import "./About.scss";
import { motion } from "framer-motion";
// import { images } from "../../constants";
// client back
import { urlFor, client } from "../../client";
// componentes
import { AppWrap } from "../../wrapper"; 

// const abouts = [
//   {
//     title: "Web Development",
//     description: "I am a good web developer.",
//     imgUrl: images.about01,
//   },
//   {
//     title: "Frontend",
//     description: "Deliver the better face for a product.",
//     imgUrl: images.about02,
//   },
//   {
//     title: "Backend",
//     description: "Provide the best logic for the services & business.",
//     imgUrl: images.about03,
//   },
// ];

const About = () => {

  const [abouts, setAbouts] = useState([])

  useEffect(() => {
    const query = '*[_type == "abouts"]';

    client.fetch(query)
      .then((data) => { setAbouts(data)})

  },[])

  return (
    <>
      <h2 className="head-text">
        I know that
        <span> Good Dev</span>
        <br />
        means
        <span> Good Business</span>
      </h2>

      <div className="app__profiles">
        {abouts.map((about, index)=> (
          <motion.div
           whileInView={{opacity: 1}}
           whileHover={{scale: 1.1}}
           transition={{duration: 0.5, type:'tween'}}
           className="app__profile-item"
           key={about.title + index}  
          >
            <img src={ urlFor(about.imgUrl) } alt={about.title} />
            {
              console.log(`${urlFor(about.imgUrl)} + ABOUT `)
            }
            <h2 className="bold-text" style={{marginTop: 20}}> {about.title} </h2>
            <h2 className="p-text" style={{marginTop: 10}}> {about.description} </h2>
          </motion.div>
          ))
        }
      </div>
    </>
  );
};

export default AppWrap(About, 'about');
