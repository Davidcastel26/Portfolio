import React, { useEffect, useState } from "react";

// styles
import './Testimonials.scss'
import ReactTooltip from "react-tooltip";
import { motion } from "framer-motion";
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi'
// components
import { AppWrap, MotionWrap } from "../../wrapper";
// back sanity
import { urlFor, client } from "../../client";

const Testimonials = () => {

  const [brands, setBrands] = useState([])
  const [testimonials, setTestimonials] = useState([])
  const [currentIndex, setCurrentIndex] = useState(0)


  useEffect( () => {
    const query = '*[_type == "testimonials"]';
    const brandsQuery = '*[_type == "brands"]';

    client.fetch(query)
      .then((data) => {
        setTestimonials(data)
      })

    client.fetch(brandsQuery)
      .then((data) =>{
        setBrands(data)
      })   
  })

  return (
    <div></div>
  )
}

export default Testimonials