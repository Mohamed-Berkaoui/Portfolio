import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react';
import './Third.css'
import what1 from '../../../assets/what1.png'
import what2 from '../../../assets/what2.png'
import what3 from '../../../assets/what3.png'
import lastback1 from '../../../assets/lastback4.png'
import lastback2 from '../../../assets/lastback3.png'
import ContactBar from '../../contactbar/ContactBar';

function Second() {
  const carouselRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: carouselRef,
    offset: ["start end", "end end"]

  })
  const scale = useTransform(scrollYProgress, [0.8, 1], [1, 0.6]);
  const opacity = useTransform(scrollYProgress, [0.76, 1], [1, 0.5])
  const x = useTransform(scrollYProgress, [0.27, 0.7], ['50%', '-150%'])

  const whatido1 = useTransform(scrollYProgress, [0.229,0.23], [ -100,0])
  const whatido2 = useTransform(scrollYProgress, [0.229,0.23], [ 100,0])
  const whatido3 = useTransform(scrollYProgress, [0.229,0.23], [ 0,1])


  const scale1 = useTransform(scrollYProgress, [0.27,0.48], [ 1,0.5])
  const scale2 = useTransform(scrollYProgress, [0.27,0.48,0.7], [0.5, 1,0.5])
  const scale3 = useTransform(scrollYProgress, [0.48,0.7], [0.5, 1])
  const blur1 = useTransform(scrollYProgress, [0.26,0.47], [1,0.3])
  const blur2 = useTransform(scrollYProgress, [0.27,0.47,0.7], [0.3, 1,0.3])
  const blur3 = useTransform(scrollYProgress, [0.5,0.7], [0.3, 1])
  const op = useTransform(scrollYProgress, [0.95,1], [0.3, 1])


  return (
    <div ref={carouselRef}  className='second-about'>
      <motion.div style={{ height: "300vh", background: "black" }}>
        <div style={{ top: '0%', position: "sticky" }}>
          <motion.div style={{ scale: scale, opacity: opacity, }} className='backgroundsecond'>
         

            <div className='leftslide'>
 <div className='leftslideback'>
  <motion.img style={{x:whatido1}} src={what1} alt=''/>
  <motion.img src={what2}style={{x:whatido2}} alt=''/>
  <motion.img src={what3} style={{x:whatido2,opacity:whatido3}} alt=''/>

 </div>
              <motion.div style={{ x: x,scale:scale1,opacity:blur1}} className='slider slider1'>

                <h1>FRONTEND APPS</h1>
                <p>
                Build client-side applications with modern features like SPA and maintain semantic coding style among other best practices for SEO optimisation. Use modern tech such as reactJS, TailwindCSS...
             </p> 
             </motion.div>
              <motion.div style={{ x: x,opacity:scale2,scale:scale2,opacity:blur2 }} className='slider slider2'>
                <h1>BACKEND APPS</h1>
                <p>
                Build scalable and maintainable server applications using cutting-edge technologies such as Nest.js, Docker, and MongoDB
             </p> </motion.div>
              <motion.div style={{ x: x,opacity:scale3 ,scale:scale3,opacity:blur3}} className='slider slider3'>
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
      <motion.img style={{opacity:op }} id="img1" src={lastback2} alt=""/>
      <motion.img  src={lastback1} alt=""/>



<ContactBar/>
      </motion.div>

    </div >

  )
}

export default Second

/*

<h1><span>Archer</span> Vs <span>Saber</span></h1>
<div class="gallery">
  <img src="https://assets.codepen.io/1480814/archer.jpg" alt="Archer from Fate/Stay">
  <img src="https://assets.codepen.io/1480814/saber.jpg" alt="Saber from Fate/Stay">
</div>
.gallery {
  --z: 32px; 
  --s: 360px; 
  --g: 8px;   
  
  display: grid;
  gap: var(--g);
  width: calc(2*var(--s) + var(--g));
  grid-auto-flow: column;
}
.gallery > img {
  width: 0;
  min-width: calc(100% + var(--z)/2);
  height: var(--s);
  object-fit: cover;
  -webkit-mask: var(--mask);
          mask: var(--mask);
  cursor: pointer;
  transition: .5s;
}
.gallery > img:hover {
  width: calc(var(--s)/2);
}
.gallery > img:first-child {
  place-self: start;
  clip-path: polygon(calc(2*var(--z)) 0,100% 0,100% 100%,0 100%);
  --mask: 
    conic-gradient(from -135deg at right,#0000,#000 1deg 89deg,#0000 90deg) 
      50%/100% calc(2*var(--z)) repeat-y;
}
.gallery > img:last-child {
  place-self: end;
  clip-path: polygon(0 0,100% 0,calc(100% - 2*var(--z)) 100%,0 100%);
  --mask: 
    conic-gradient(from   45deg at left ,#0000,#000 1deg 89deg,#0000 90deg) 
      50% calc(50% - var(--z))/100% calc(2*var(--z)) repeat-y;
}

body {
  margin: 0;
  min-height: 100vh;
  display: grid;
  place-content: center;
  background: #A8DBA8;
}
h1 {
  text-align: center;
  font-family: system-ui, sans-serif;
  font-size: 3rem;
  word-spacing: .8em;
}
h1 span:first-child {
  color: #af3817;
}
h1 span:last-child {
  color: #0b3fa1;
}*/