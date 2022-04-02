import React from 'react'

// import the container and the components 

import { About, Footer, Header, Skills, Testimonials, Work } from './container'
import { Navbar } from './components'

// import styles 

import './App.scss'

const App = () => {
  return (
    <div className='app'>
      <Navbar/>
      <Header/>
      <About/>
      <Work/>
      <Skills/>
      <Testimonials/>
      <Footer/>
    </div>
  )
}

export default App