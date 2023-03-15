import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react';
import './Third.css'
import what1 from '../../../assets/what1.png'
import what2 from '../../../assets/what2.png'
import what3 from '../../../assets/what3.png'
import lastback1 from '../../../assets/lastback4.png'
import lastback2 from '../../../assets/lastback3.png'
import lastback3 from '../../../assets/lastback2.png'

import ContactBar from '../../contactbar/ContactBar';
import frontimg from "../../../assets/front.png"
import backimg from "../../../assets/back.png"

function Second() {


  const ref = useRef(null);
  const isInView = useInView(ref);
  console.log(isInView)

  const carouselRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: carouselRef,
    offset: ["start end", "end end"]

  })
  const scale = useTransform(scrollYProgress, [0.8, 1], [1, 0.6]);
  const opacity = useTransform(scrollYProgress, [0.76, 1], [1, 0])
  const x = useTransform(scrollYProgress, [0.38, 0.67], ['32%', '-135%'])

  const whatido1 = useTransform(scrollYProgress, [0.34,0.344], [ -100,0])
  const whatido2 = useTransform(scrollYProgress, [0.34,0.344], [ 100,0])
  const whatido3 = useTransform(scrollYProgress, [0.34,0.344], [ 0,0.8])


  const scale1 = useTransform(scrollYProgress, [0.38,0.5], [ 1,0.5])
  const scale2 = useTransform(scrollYProgress, [0.38,0.525,0.67], [0.5, 1,0.5])
  const scale3 = useTransform(scrollYProgress, [0.54,0.67], [0.5, 1])
  const blur1 = useTransform(scrollYProgress, [0.38,0.53], [1,0.1])
  const blur2 = useTransform(scrollYProgress, [0.38,0.53,0.67], [0.1, 1,0.1])
  const blur3 = useTransform(scrollYProgress, [0.53,0.67], [0.1, 1])
  const op = useTransform(scrollYProgress, [0.99,0.995], [0.1, 0.8])
 const stars=useTransform(scrollYProgress, [0.99,0.995], [0, 0.8])
  const xdev = useTransform(scrollYProgress, [0.99,0.991], ["-5vw", '0vw'])
  const xdis = useTransform(scrollYProgress, [0.99,0.991], ["5vw", '0vw'])
  const opdev = useTransform(scrollYProgress, [0.99,0.991], [0, 0.8])


  return (
    <div ref={carouselRef}  className='second-about'>
      <motion.div style={{ height: "200vh"}}>
        <div style={{ top: '0%', position: "sticky" }}>
          <motion.div style={{ scale: scale, opacity: opacity, }} className='backgroundsecond'>
         

            <div className='leftslide'>
 <div className='leftslideback'>
  <motion.img style={{x:whatido1}} src={what1} alt=''/>
  <motion.img src={what2}style={{x:whatido2}} alt=''/>
  <motion.img src={what3} style={{x:whatido2,opacity:whatido3}} alt=''/>

 </div>
              <motion.div style={{ x: x,scale:scale1,opacity:blur1}} className='slider slider1'>

                <h1>FRONTEND APPS</h1><br/>
                <p>
                Build client-side applications with modern features  and maintain semantic coding style among other best practices for SEO optimisation. Use modern tech such as reactJS, TailwindCSS...
             </p> 
             <img src={frontimg} alt=''/>
             </motion.div>
              <motion.div style={{ x: x,scale:scale2,opacity:blur2 }} className='slider slider2'>
                <h1>BACKEND APPS</h1><br/><br/>
                <p>
                Build scalable and maintainable server applications using cutting-edge technologies such as Node js and MongoDB             </p> 
             <img src={backimg} alt=''/>
</motion.div>
              <motion.div style={{ x: x,scale:scale3,opacity:blur3}} className='slider slider3'>
                <h1>
                NATIVE APPS
                </h1>
                <p>
                Use Flutter for building simple native mobile applications. Flutter is modern, fast, cross-platform, and popular.
             </p> </motion.div>

          

            </div>


          </motion.div>
        </div>
      </motion.div>
   

      <motion.div ref={carouselRef} className='test'>
      <motion.section style={{opacity:stars}}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
     
    </motion.section>
      <motion.img style={{opacity:op }} id="img1" src={lastback2} alt=""/>
      <motion.img  src={lastback1} alt=""/>
      <motion.img  
src={lastback3} id="astronaut" alt=""/>

<h1 id='skills'>Skills</h1> 


      <motion.div  class="skills"> 
	<motion.div  style={{x:xdev,opacity:opdev}} >
    
  <li>
		<h3>ADOBE PHOTOSHOP</h3><span class="barskills"><motion.span style={{width:isInView?'85%':'0',transitionDelay:"0s"}}  class="jquery"></motion.span></span>
	</li>
  <li>
		<h3>ADOBE ILLISTRATOR</h3><span class="barskills"><motion.span style={{width:isInView?'70%':'0',transitionDelay:"0.1s"}}  class="jquery"></motion.span></span>
	</li>
  <li>
		<h3>ADOBE XD</h3><span class="barskills"><motion.span style={{width:isInView?'60%':'0',transitionDelay:"0.2s"}}  class="jquery"></motion.span></span>
	</li>
  <li>
		<h3>AFTER EFFECT</h3><span class="barskills"><motion.span style={{width:isInView?'70%':'0',transitionDelay:"0.3s"}}  class="jquery"></motion.span></span>
	</li>
  <li>
		<h3>WORDPRESS</h3><span class="barskills"><motion.span style={{width:isInView?'75%':'0',transitionDelay:"0.4s"}}  class="jquery"></motion.span></span>
	</li>

 


  </motion.div>
  
  <motion.div  style={{x:xdis,opacity:opdev}} >

	<li ref={ref}>
		<h3>HTML/CSS</h3><span class="barskills"><motion.span style={{width:isInView?'87%':'0'}}  class="html"></motion.span ></span>
	</li>

	<li>
		<h3>JAVASCRIPT</h3><span class="barskills"><motion.span style={{width:isInView?'85%':'0',transitionDelay:"0.1s"}}  class="javascript"></motion.span></span>
	</li>

	<li>
		<h3>REACT-JS</h3><span class="barskills"><motion.span style={{width:isInView?'80%':'0',transitionDelay:"0.2s"}}  class="react"></motion.span></span>
	</li>

	<li>
		<h3>JQUERY</h3><span class="barskills"><motion.span style={{width:isInView?'60%':'0',transitionDelay:"0.3s"}}   class="jquery"></motion.span ></span>
	</li>
  <li>
		<h3>NODE-JS/EXPRESS-JS</h3><span class="barskills"><motion.span style={{width:isInView?'70%':'0',transitionDelay:"0.4s"}}  class="expressjs"></motion.span></span>
	</li>
 
 
  </motion.div>
</motion.div>


<ContactBar/>
      </motion.div>

    </div >

  )
}

export default Second

