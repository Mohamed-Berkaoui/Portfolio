import './About.css'
import { motion, useTransform } from 'framer-motion'
import Loader from './loader/Loader'
import { useScroll } from 'framer-motion'
import { useEffect, useRef } from 'react';
import { MouseParallax, ScrollParallax } from "react-just-parallax";


function About() {
const {scrollYProgress}=useScroll();

const x1=useTransform(scrollYProgress,[0,1],[0,600])

  return (

    <motion.div className='main-about' initial={{ opacity: 0.2 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.7, type: 'spring' }} >


      <div className='aboutheader'>
 
<MouseParallax enableOnTouchDevice isAbsolutelyPositioned> 
        <motion.div className='headertext' initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}

          transition={{ delay:2.7, duration: 0.5, type: 'spring' }}>
  <h1 >Hi Again</h1>
        </motion.div></MouseParallax>
      </div>





      <motion.div
      className="secendtext"
      initial={
       { y: 0}
      }
      whileInView={
     {   y: 50,
        rotate: -10,
        transition: {
          type: "spring",
          bounce: 0.1,
          duration: 0.8}
        }}
      viewport={{ once: true, amount: 0.8 }}
    >




        <h3> I am ambitious, ready to innovate, both in my private life and in
          my professional life. Developing my career,
          broadening my knowledge and refining my skills are always my priority.</h3>

      </motion.div>



      <motion.div className='secendtext'
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.7, type: 'spring' }}
      >
        <h3>What I Do</h3>

      </motion.div>



      <motion.div className='thirdtext'
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.7, type: 'spring' }}>
        <h3>Integration of website mockups
          I use web technologies to transform mockups into websites


          Hosting
          I have the skills to host applications on remote servers


          Custom development
          I can highlight an idea with a complete web application

        </h3>

      </motion.div>

    </motion.div>

  )
}

export default About