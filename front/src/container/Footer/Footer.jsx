import React, {useState, useEffect} from 'react'

// STYLES  
import './Footer.scss'
import { images } from '../../constants'
import {AppWrap, MotionWrap } from '../../wrapper'
// backend 
import { client } from '../../client'


const Footer = () => {
  return (
    <>
      <h2 className="head-text">Take a coffee & chat with me</h2>
      <div className="app__footer-cards">
        <div className="app__footer-card">
          <img src={images.email} alt="email"/>
          <a href="mailto: davcastellanoslarios@gmail.com" className='p-text'>davcastellanoslarios@gmail.com</a>
        </div>
        <div>
        <img src={images.mobile} alt="mobile"/>
          <a href="tel: +502 3743 1717" className='p-text'>+502 3743 1717</a>
        </div>
      </div>

      <div className="app__footer-form app__flex">
      <div className="app__flex">
          <input type="text" className="p-text" placeholder='Your Name' name='name' value={name} onChange={handlChangeInput}/>
        </div>
        <div className="app__flex">
          <input type="email" className="p-text" placeholder='Your Email' name='email' value={email} onChange={handlChangeInput}/>
        </div>
      </div>
    </>
  )
}

export default AppWrap(
  MotionWrap(Footer, 'app__footer'),
  'app__whitebg'
) 