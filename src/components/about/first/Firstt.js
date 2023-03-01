import './Firstt.css'
import arcade from "../../../assets/12.png"
import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import { useEffect, useRef } from 'react'
import video from '../../../assets/video.mp4'
import video2 from '../../../assets/static-tv.gif'
import mypic from "../../../assets/mypic.png"
import devpic from "../../../assets/web.jpg"
import { useState } from 'react'

function Firstt() {
  const refrence = useRef(null)
  const { scrollYProgress } = useScroll({
    target: refrence,
    offset: ["start end", "end end"]


  })
  const scale = useTransform(scrollYProgress, [0.45, 0.6, 0.665, 0.766], [1, 5, 10, 0])

  const opacity = useTransform(scrollYProgress, [0.6, 0.601], [1, 0])
  const y = useTransform(scrollYProgress, [0.45, 0.65], ['0vh', '-38vh'])
  const phonenumber = useTransform(scrollYProgress, [0.5, 0.6], ['2vw', '4vw'])

  const rotate = useTransform(scrollYProgress, [0.45, 0.55], ['0deg', '5deg'])
  const display = useTransform(scrollYProgress, [0.419, 0.42], [1, 0])

  const display2 = useTransform(scrollYProgress, [0.419, 0.42, 0.44], [0, 1, 0])

  const back = useTransform(scrollYProgress, [0.6, 0.7], ["rgb(0,0,0)", "rgb(255,255,255)"])



  const h1y = useTransform(scrollYProgress, [0.25, 0.4], ['100vh', '-65vh'])
  const colortext = useTransform(scrollYProgress, [0.6, 0.7], ['rgb(255,255,255)', 'rgb(0,0,0)'])

  const ydevimg = useTransform(scrollYProgress, [0.7, 1], [-490, 490])


  const ref = useRef(null)
  const isInView = useInView(ref)

  return (

    <>
      <div ref={refrence} className='firstabout'>


        <div style={{ position: "sticky", top: '0' }}>


          <motion.div style={{ scale: scale, opacity: opacity, rotate: rotate, y: y }} className='arcade'>
            <motion.h1 style={{ y: h1y }} id='h1'>
              I've always loved technology. From a young age, technology has interested me.I'm like most children play video games of some kind, from tetris to spyro, crash bandicoot to final fantasy, But also  loved playing with computers, my interest didn't stop just at entertainment.
              I remember taking apart my computer when I was 14, an event which horrified my parents.
              I still build my own computers.
              I never lost my curiosity, but my interest in technologies changed as I expanded my knowledge from taking apart equipment to building new websites in code.

              Now I focus on people and learning how they interact with websites, making sure they can achieve their goals leaving them satisfied and more likely to return as customers.
            </motion.h1>

            <motion.img src={arcade} id="arcadeimg" />
            <motion.video src={video} style={{ opacity: display }} autoPlay={true} muted loop />
            <motion.img id='static' src={video2} style={{ opacity: display2 }} />
          </motion.div>
        </div>
        <motion.div style={{ background: back }} className='tvshow'>

          <motion.h1 style={{ fontSize: phonenumber, color: colortext }} id='phonenumber' >+216 22 495 056
            <br /><br /><br /><br /><br />It's all about passion<br /><br /></motion.h1>
          <motion.h2 id='text2'  >
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
              <p className='myinormations1'>Age </p >
              <p className='myinormations2'> 30 years</p >

              <p className='myinormations1'>Residence </p >
              <p className='myinormations2'> Tunisia</p >
              <p className='myinormations1'>Address </p >
              <p className='myinormations2'> beb souika, Tunis</p >

              <p className='myinormations1'>E-mail </p >
              <p className='myinormations2'> berkaouimed1@gmail.com</p >

            </div>
            <div ref={ref} className='info2'>
              <motion.img style={{ y: isInView ? 0 : 700 }} src={mypic} id='mypic' alt='' /></div>
          </div>
        </motion.div>
      </div>



    </>
  )
}

export default Firstt