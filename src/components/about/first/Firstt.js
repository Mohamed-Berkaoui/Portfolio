import './Firstt.css'
import arcade from "../../../assets/12.png"
import { motion, useScroll, useTransform, useMotionValueEvent, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import video from '../../../assets/video.mp4'
import video2 from '../../../assets/static-tv.gif'
import mypic from "../../../assets/mypic.png"
import devpic from "../../../assets/web.jpg"
import correcticon from "../../../assets/correct.png"

import location from "../../../assets/location.png"
import email from "../../../assets/email.png"
import location2 from "../../../assets/resident.png"


function Firstt() {
  const refrence = useRef(null)
  const ref = useRef(null);
  const isInView = useInView(ref);

  const { scrollYProgress } = useScroll({
    target: refrence,
    offset: ["start end", "end end"]


  })
  const [display1, setDisplay] = useState('block')

  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, "change", (latest) => {
    latest > 2600 ? setDisplay("none") : setDisplay("block")
  })

  const scale = useTransform(scrollYProgress, [0.35, 0.4, 0.47, 0.6], [1, 1.2, 1.2, 10])

  const opacity = useTransform(scrollYProgress, [0.55, 0.601], [1, 0])
  const y = useTransform(scrollYProgress, [0.47, 0.65], ['0vh', '-100vh'])
  const phonenumber = useTransform(scrollYProgress, [0.47, 0.55], ['1.5em', '3.2em'])

  const rotate = useTransform(scrollYProgress, [0.35, 0.4], ['0deg', '6deg'])
  const rotatevdieo = useTransform(scrollYProgress, [0.35, 0.4], ['-6deg', '0deg'])
  const scalevideo = useTransform(scrollYProgress, [0.35, 0.4], [1, 1.2])
  const yvideo = useTransform(scrollYProgress, [0.35, 0.4], [0, 10])

  const display = useTransform(scrollYProgress, [0.409, 0.41], [0.8, 0])

  const display2 = useTransform(scrollYProgress, [0.409, 0.41,0.424, 0.425], [0, 1,1, 0])

  const back = useTransform(scrollYProgress, [0.5, 0.6], ["rgb(40,40,40)", "rgb(220,220,220)"])


  const h1y = useTransform(scrollYProgress, [0.2, 0.35], [ '130vh', '63vh'])
  const hadearop = useTransform(scrollYProgress, [0.25,window.innerWidth>700?0.29: 0.32], [1, 0])

  const colortext = useTransform(scrollYProgress, [0.5, 0.51], ['rgb(255,255,255)', 'rgb(0,0,0)'])

  const ydevimg = useTransform(scrollYProgress, [0.7, 1], [-490, 490])


  return (


    <div ref={refrence} className='firstabout'>


      <div className='stickydiv' >


        <motion.div className='arcade'>


          <motion.img loading="lazy" style={{ scale: scale, opacity: opacity, rotate: rotate, y: y, display: display1 }} src={arcade} id="arcadeimg" />
          <motion.video loading="lazy" src={video} style={{ opacity: display, rotate: rotatevdieo, scale: scalevideo, y: yvideo, display: display1 }} autoPlay={true} muted loop />
          <motion.img loading="lazy" id='static' src={video2} style={{ opacity: display2, display: display1 }} />

        </motion.div>
      </div>
<motion.h1 style={{opacity:hadearop}} id='headtext'>“choose a job you<br/> love and you will<br/> never have to work<br/> a day in your life.”</motion.h1>
      <motion.div style={{ background: back }} className='tvshow'>
        <motion.h1 style={{ y: h1y }} id='h1'>
          I've always loved technology. From a young age, technology has interested me.I'm like most children play video games of some kind, from tetris to spyro, crash bandicoot to final fantasy, But also  loved playing with computers, my interest didn't stop just at entertainment.
          I remember taking apart my computer when I was 14, an event which horrified my parents.
          I still build my own computers.
          I never lost my curiosity, but my interest in technologies changed as I expanded my knowledge from taking apart equipment to building new websites in code.

          Now I focus on people and learning how they interact with websites, making sure they can achieve their goals leaving them satisfied and more likely to return as customers.
        </motion.h1>
        <motion.h1 style={{ fontSize: phonenumber, color: colortext }} id='phonenumber' >+216 22 495 056
          <br /><br /><br /><br />It's all about passion</motion.h1>
      

        <motion.h2 style={{ color: colortext }} id='text2'  >

          I am ambitious, ready to innovate,
          both in my private life and in my
          professional life.Developing my career,
          broadening my knowledge and refining
          my skills are always my priority.
          I am a ProfessionalWeb Developer. I have been doing my own freelance work for over five years now. If you're looking for a freelance web programmer, I think you'll be pleased with what I can offer.
          <br /><br />
          I'm passionate about bringing both the technical and visual aspects of digital products to life.
          User experience, beautiful pixels and writing clean accessible, human code matters to me.
          I sweat the details. And as a follower of John Maeda’s Laws Of Simplicity, I agree that less is more.
          <br />
          I'm happiest when I'm creating, learning, exploring and thinking about how to make things better
          <br/>
                      I create successful responsive websites that are fast, easy to use, and built with best practices. The main area of my expertise is front-end development, HTML, CSS, JS, building small and medium web apps, custom plugins, features, animations, and coding interactive layouts.

        </motion.h2>

        <div  id='text3'>
          <div className='innershadow innershadow1' ></div>
          <div className='innershadow innershadow2' ></div>

          <motion.img id='backpc' style={{ y: ydevimg }} src={devpic} alt='' />
         <div className='iconss iconss1'> <motion.img  src={location} alt='' /><h2>TUNISIA</h2></div>
         <div className='iconss iconss2'><motion.img   src={location2} alt='' /><h2>BEB SOUIKA,TUNIS</h2></div>
         <div className='iconss iconss3'><motion.img   src={email} alt='' /><h2>BERKAOUIMEDEV@GMAIL.COM</h2></div>


        </div>

        <motion.div  ref={ref} className='infos'>
        <div    className='backsvg'>
          <motion.svg xmlns="http://www.w3.org/2000/svg" version="1.1" xlink="http://www.w3.org/1999/xlink" svgjs="http://svgjs.dev/svgjs" viewBox="0 0 1422 800">

            <g strokeWidth="2" stroke="url(#oooscillate-grad)" fill="none"             strokeLinecap="round">
              <motion.path initial={{ pathLength: 0, fill: "none" }}
                animate={isInView&&{pathLength: 1, fill: 'none' }}
                
                transition={{
               delay: 0.2, duration: 2, ease: "easeInOut"
                }} d="M 0 572 Q 355.5 230 711 400 Q 1066.5 570 1422 572" opacity="0.59"></motion.path>
              <motion.path initial={{ pathLength: 0, fill: "none" }}
                animate={isInView&&{pathLength: 1, fill: 'none' }}
   strokeWidth="2"
            stroke="rgba(0, 0, 0, 1)"
            strokeLinecap="round" 
                transition={{
               delay: 0.2, duration: 2, ease: "easeInOut"
                }} d="M 0 550 Q 355.5 230 711 400 Q 1066.5 570 1422 550" opacity="0.44"></motion.path>
              <motion.path initial={{ pathLength: 0, fill: "none" }}
                animate={isInView&&{pathLength: 1, fill: 'none' }}
   strokeWidth="2"
            stroke="rgba(0, 0, 0, 1)"
            strokeLinecap="round" 
                transition={{
               delay: 0.2, duration: 2, ease: "easeInOut"
                }} d="M 0 528 Q 355.5 230 711 400 Q 1066.5 570 1422 528" opacity="0.61"></motion.path>
              <motion.path initial={{ pathLength: 0, fill: "none" }}
                animate={isInView&&{pathLength: 1, fill: 'none' }}
   strokeWidth="2"
            stroke="rgba(0, 0, 0, 1)"
            strokeLinecap="round" 
                transition={{
               delay: 0.2, duration: 2, ease: "easeInOut"
                }} d="M 0 506 Q 355.5 230 711 400 Q 1066.5 570 1422 506" opacity="0.90"></motion.path>
              <motion.path initial={{ pathLength: 0, fill: "none" }}
                animate={isInView&&{pathLength: 1, fill: 'none' }}
   strokeWidth="2"
            stroke="rgba(0, 0, 0, 1)"
            strokeLinecap="round" 
                transition={{
               delay: 0.2, duration: 2, ease: "easeInOut"
                }} d="M 0 484 Q 355.5 230 711 400 Q 1066.5 570 1422 484" opacity="0.64"></motion.path>
              <motion.path initial={{ pathLength: 0, fill: "none" }}
                animate={isInView&&{pathLength: 1, fill: 'none' }}
   strokeWidth="2"
            stroke="rgba(0, 0, 0, 1)"
            strokeLinecap="round" 
                transition={{
               delay: 0.2, duration: 2, ease: "easeInOut"
                }} d="M 0 462 Q 355.5 230 711 400 Q 1066.5 570 1422 462" opacity="1.00"></motion.path>
              <motion.path initial={{ pathLength: 0, fill: "none" }}
                animate={isInView&&{pathLength: 1, fill: 'none' }}
   strokeWidth="2"
            stroke="rgba(0, 0, 0, 1)"
            strokeLinecap="round" 
                transition={{
               delay: 0.2, duration: 2, ease: "easeInOut"
                }} d="M 0 440 Q 355.5 230 711 400 Q 1066.5 570 1422 440" opacity="0.79"></motion.path>
              <motion.path initial={{ pathLength: 0, fill: "none" }}
                animate={isInView&&{pathLength: 1, fill: 'none' }}
   strokeWidth="2"
            stroke="rgba(0, 0, 0, 1)"
            strokeLinecap="round" 
                transition={{
               delay: 0.2, duration: 2, ease: "easeInOut"
                }} d="M 0 418 Q 355.5 230 711 400 Q 1066.5 570 1422 418" opacity="0.86"></motion.path>
              <motion.path initial={{ pathLength: 0, fill: "none" }}
                animate={isInView&&{pathLength: 1, fill: 'none' }}
   strokeWidth="2"
            stroke="rgba(0, 0, 0, 1)"
            strokeLinecap="round" 
                transition={{
               delay: 0.2, duration: 2, ease: "easeInOut"
                }} d="M 0 396 Q 355.5 230 711 400 Q 1066.5 570 1422 396" opacity="0.85"></motion.path>
              <motion.path initial={{ pathLength: 0, fill: "none" }}
                animate={isInView&&{pathLength: 1, fill: 'none' }}
   strokeWidth="2"
            stroke="rgba(0, 0, 0, 1)"
            strokeLinecap="round" 
                transition={{
               delay: 0.2, duration: 2, ease: "easeInOut"
                }} d="M 0 374 Q 355.5 230 711 400 Q 1066.5 570 1422 374" opacity="0.12"></motion.path>
              <motion.path initial={{ pathLength: 0, fill: "none" }}
                animate={isInView&&{pathLength: 1, fill: 'none' }}
   strokeWidth="2"
            stroke="rgba(0, 0, 0, 1)"
            strokeLinecap="round" 
                transition={{
               delay: 0.2, duration: 2, ease: "easeInOut"
                }} d="M 0 352 Q 355.5 230 711 400 Q 1066.5 570 1422 352" opacity="0.16"></motion.path>
              <motion.path initial={{ pathLength: 0, fill: "none" }}
                animate={isInView&&{pathLength: 1, fill: 'none' }}
   strokeWidth="2"
            stroke="rgba(0, 0, 0, 1)"
            strokeLinecap="round" 
                transition={{
               delay: 0.2, duration: 2, ease: "easeInOut"
                }} d="M 0 330 Q 355.5 230 711 400 Q 1066.5 570 1422 330" opacity="0.20"></motion.path>
              <motion.path initial={{ pathLength: 0, fill: "none" }}
                animate={isInView&&{pathLength: 1, fill: 'none' }}
   strokeWidth="2"
            stroke="rgba(0, 0, 0, 1)"
            strokeLinecap="round" 
                transition={{
               delay: 0.2, duration: 2, ease: "easeInOut"
                }} d="M 0 308 Q 355.5 230 711 400 Q 1066.5 570 1422 308" opacity="0.62"></motion.path>
              <motion.path initial={{ pathLength: 0, fill: "none" }}
                animate={isInView&&{pathLength: 1, fill: 'none' }}
   strokeWidth="2"
            stroke="rgba(0, 0, 0, 1)"
            strokeLinecap="round" 
                transition={{
               delay: 0.2, duration: 2, ease: "easeInOut"
                }} d="M 0 286 Q 355.5 230 711 400 Q 1066.5 570 1422 286" opacity="0.64"></motion.path>
              <motion.path initial={{ pathLength: 0, fill: "none" }}
                animate={isInView&&{pathLength: 1, fill: 'none' }}
   strokeWidth="2"
            stroke="rgba(0, 0, 0, 1)"
            strokeLinecap="round" 
                transition={{
               delay: 0.2, duration: 2, ease: "easeInOut"
                }} d="M 0 264 Q 355.5 230 711 400 Q 1066.5 570 1422 264" opacity="0.56"></motion.path>
              <motion.path initial={{ pathLength: 0, fill: "none" }}
                animate={isInView&&{pathLength: 1, fill: 'none' }}
   strokeWidth="2"
            stroke="rgba(0, 0, 0, 1)"
            strokeLinecap="round" 
                transition={{
               delay: 0.2, duration: 2, ease: "easeInOut"
                }} d="M 0 242 Q 355.5 230 711 400 Q 1066.5 570 1422 242" opacity="0.49"></motion.path>
              <motion.path initial={{ pathLength: 0, fill: "none" }}
                animate={isInView&&{pathLength: 1, fill: 'none' }}
   strokeWidth="2"
            stroke="rgba(0, 0, 0, 1)"
            strokeLinecap="round" 
                transition={{
               delay: 0.2, duration: 2, ease: "easeInOut"
                }} d="M 0 220 Q 355.5 230 711 400 Q 1066.5 570 1422 220" opacity="0.67"></motion.path>
              <motion.path initial={{ pathLength: 0, fill: "none" }}
                animate={isInView&&{pathLength: 1, fill: 'none' }}
   strokeWidth="2"
            stroke="rgba(0, 0, 0, 1)"
            strokeLinecap="round" 
                transition={{
               delay: 0.2, duration: 2, ease: "easeInOut"
                }} d="M 0 198 Q 355.5 230 711 400 Q 1066.5 570 1422 198" opacity="0.99"></motion.path>
              <motion.path initial={{ pathLength: 0, fill: "none" }}
                animate={isInView&&{pathLength: 1, fill: 'none' }}
   strokeWidth="2"
            stroke="rgba(0, 0, 0, 1)"
            strokeLinecap="round" 
                transition={{
               delay: 0.2, duration: 2, ease: "easeInOut"
                }} d="M 0 176 Q 355.5 230 711 400 Q 1066.5 570 1422 176" opacity="0.37"></motion.path>
              <motion.path initial={{ pathLength: 0, fill: "none" }}
                animate={isInView&&{pathLength: 1, fill: 'none' }}
   strokeWidth="2"
            stroke="rgba(0, 0, 0, 1)"
            strokeLinecap="round" 
                transition={{
               delay: 0.2, duration: 2, ease: "easeInOut"
                }} d="M 0 154 Q 355.5 230 711 400 Q 1066.5 570 1422 154" opacity="0.68"></motion.path>
              <motion.path initial={{ pathLength: 0, fill: "none" }}
                animate={isInView&&{pathLength: 1, fill: 'none' }}
   strokeWidth="2"
            stroke="rgba(0, 0, 0, 1)"
            strokeLinecap="round" 
                transition={{
               delay: 0.2, duration: 2, ease: "easeInOut"
                }} d="M 0 132 Q 355.5 230 711 400 Q 1066.5 570 1422 132" opacity="0.87"></motion.path>
              <motion.path initial={{ pathLength: 0, fill: "none" }}
                animate={isInView&&{pathLength: 1, fill: 'none' }}
   strokeWidth="2"
            stroke="rgba(0, 0, 0, 1)"
            strokeLinecap="round" 
                transition={{
               delay: 0.2, duration: 2, ease: "easeInOut"
                }} d="M 0 110 Q 355.5 230 711 400 Q 1066.5 570 1422 110" opacity="0.65"></motion.path>
              <motion.path initial={{ pathLength: 0, fill: "none" }}
                animate={isInView&&{pathLength: 1, fill: 'none' }}
   strokeWidth="2"
            stroke="rgba(0, 0, 0, 1)"
            strokeLinecap="round" 
                transition={{
               delay: 0.2, duration: 2, ease: "easeInOut"
                }} d="M 0 88 Q 355.5 230 711 400 Q 1066.5 570 1422 88" opacity="0.51"></motion.path>
              <motion.path initial={{ pathLength: 0, fill: "none" }}
                animate={isInView&&{pathLength: 1, fill: 'none' }}
   strokeWidth="2"
            stroke="rgba(0, 0, 0, 1)"
            strokeLinecap="round" 
                transition={{
               delay: 0.2, duration: 2, ease: "easeInOut"
                }} d="M 0 66 Q 355.5 230 711 400 Q 1066.5 570 1422 66" opacity="0.56"></motion.path>
              <motion.path initial={{ pathLength: 0, fill: "none" }}
                animate={isInView&&{pathLength: 1, fill: 'none' }}
   strokeWidth="2"
            stroke="rgba(0, 0, 0, 1)"
            strokeLinecap="round" 
                transition={{
               delay: 0.2, duration: 2, ease: "easeInOut"
                }} d="M 0 44 Q 355.5 230 711 400 Q 1066.5 570 1422 44" opacity="0.80"></motion.path></g></motion.svg>


        </div>
          <div className='info1'>
       <h1>What's the  need of a <br/><span>Freelancer?</span></h1>
<p>For all website creation , Logo , Flyer Brochure ,Leaflet , catalog  and poster...<br/>
a freelancer can make it at a very reasonable price.the key of success for a freelancer is his creativity,flexibility  and availability
<br/><br/>

  <li><img src={correcticon} alt=''/>
AN ADAPTED SERVICE</li>
  <li><img src={correcticon} alt=''/>A PRIVILEGED CONTACT</li>
  <li><img src={correcticon} alt=''/>CHEAPER COSTS</li>
  <li><img src={correcticon} alt=''/>TIME SAVING</li>

</p> </div>
          <div className='info2'>
            <motion.img initial={{ y: 300 }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }} src={mypic} id='mypic' alt='' /></div>
        </motion.div>
      </motion.div>
    </div>




  )
}

export default Firstt
