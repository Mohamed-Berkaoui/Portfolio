import './Firstt.css'
import arcade from "../../../assets/12.png"
import { motion, useInView, useScroll, useTransform,useMotionValueEvent } from 'framer-motion'
import {  useRef, useState } from 'react'
import video from '../../../assets/video.mp4'
import video2 from '../../../assets/static-tv.gif'
import mypic from "../../../assets/mypic.png"
import devpic from "../../../assets/web.jpg"

function Firstt() {
  const refrence = useRef(null)
  const { scrollYProgress } = useScroll({
    target: refrence,
    offset: ["start end", "end end"]


  })
  const [display1,setDisplay]=useState('block')

  const { scrollY} = useScroll()

  useMotionValueEvent(scrollY, "change", (latest) => {
latest>2000?setDisplay("none"):setDisplay("block")  })

  const scale = useTransform(scrollYProgress, [0.35,0.4,0.47, 0.6], [1,1.2,1.2,10])

  const opacity = useTransform(scrollYProgress, [0.6, 0.601], [1, 0])
  const y = useTransform(scrollYProgress, [0.47, 0.65], ['0vh', '-100vh'])
  const phonenumber = useTransform(scrollYProgress, [0.47, 0.55], ['1.5em', '3.5em'])

  const rotate = useTransform(scrollYProgress, [0.35, 0.4], ['0deg', '6deg'])
  const rotatevdieo = useTransform(scrollYProgress, [0.35, 0.4], ['-6deg', '0deg'])
  const scalevideo = useTransform(scrollYProgress, [0.35,0.4], [1,1.2])
  const yvideo = useTransform(scrollYProgress, [0.35,0.4], [0,10])

  const display = useTransform(scrollYProgress, [0.409, 0.41], [1, 0])

  const display2 = useTransform(scrollYProgress, [0.409, 0.41, 0.425], [0, 1, 0])

  const back = useTransform(scrollYProgress, [0.5, 0.6], ["rgb(40,40,40)", "rgb(255,255,255)"])


  const h1y = useTransform(scrollYProgress, [0.2, 0.45], [window.innerWidth>500?'180vh':'120vh', '60vh'])

  const colortext = useTransform(scrollYProgress, [0.5, 0.51], ['rgb(255,255,255)', 'rgb(0,0,0)'])

  const ydevimg = useTransform(scrollYProgress, [0.7, 1], [-490, 490])


  const ref = useRef(null)
  const isInView = useInView(ref)

  return (

  
      <div ref={refrence} className='firstabout'>


        <div className='stickydiv' >


          <motion.div className='arcade'>
          

            <motion.img style={{ scale: scale, opacity: opacity, rotate: rotate, y: y,display:display1 }}  src={arcade} id="arcadeimg" />
            <motion.video src={video} style={{ opacity: display ,rotate:rotatevdieo ,scale:scalevideo,y:yvideo}} autoPlay={true} muted loop />
            <motion.img id='static' src={video2} style={{ opacity: display2 }} />
           
          </motion.div>
        </div>
       
        <motion.div style={{ background: back }} className='tvshow'>
        <motion.h1 style={{ y: h1y  }} id='h1'>
              I've always loved technology. From a young age, technology has interested me.I'm like most children play video games of some kind, from tetris to spyro, crash bandicoot to final fantasy, But also  loved playing with computers, my interest didn't stop just at entertainment.
              I remember taking apart my computer when I was 14, an event which horrified my parents.
              I still build my own computers.
              I never lost my curiosity, but my interest in technologies changed as I expanded my knowledge from taking apart equipment to building new websites in code.

              Now I focus on people and learning how they interact with websites, making sure they can achieve their goals leaving them satisfied and more likely to return as customers.
            </motion.h1>
          <motion.h1 style={{ fontSize: phonenumber, color: colortext }} id='phonenumber' >+216 22 495 056
            <br /><br /><br /><br /><br />It's all about passion<br /><br /></motion.h1>
          <motion.h2 style={{  color: colortext }}  id='text2'  >
            I am ambitious,ready to innovate,
            both in my private life and in my
            professional life.Developing my career,
            broadening my knowledge and refining
            my skills are always my priority.
            am ambitious,ready to innovate,
            both in my private life and in my
            professional life.Developing my career,
            broadening my knowledge and refining
            my skills are always my priority.
            I am ambitious,ready to innovate,
            both in my private life and in my
            professional life.Developing my career,
            broadening my knowledge and refining
            my skills are always my priority.
            am ambitious,ready to innovate,
            both in my private life and in my
            professional life.Developing my career,
            broadening my knowledge and refining
            my skills are always my priority.




            I am ambitious, ready to innovate,
            both in my private life and in my
            professional life.Developing my career,
            broadening my knowledge and refining
            my skills are always my priority.
            I am a ProfessionalWeb Developer. I have been doing my own freelance work for over five years now. If you're looking for a freelance web programmer, I think you'll be pleased with what I can offer.</motion.h2>

          <div id='text3'>
            <div className='innershadow innershadow1' ></div>
            <div className='innershadow innershadow2' ></div>

            <motion.img style={{ y: ydevimg }} src={devpic} alt='' />
            <motion.h1  >
              I create successful responsive websites that are fast, easy to use, and built with best practices. The main area of my expertise is front-end development, HTML, CSS, JS, building small and medium web apps, custom plugins, features, animations, and coding interactive layouts.
            </motion.h1>
          </div>

          <div className='infos'>
            <div className='info1'>
           <span className="myinformations" data-replace="30 years"><span>age</span></span>
             
              <span className="myinformations" data-replace="Tunisia"><span>Residence</span></span>

            
              <span className="myinformations" data-replace="beb souika, Tunis"><span>Address</span></span>
            
              <span className="myinformations" data-replace="berkaouimed1@gmail.com"><span>E-mail </span></span>
            </div>
            <div ref={ref} className='info2'>
              <motion.img style={{ y: isInView ? 0 : 700 }} src={mypic} id='mypic' alt='' /></div>
          </div>
        </motion.div>
      </div>



   
  )
}

export default Firstt