import './First.css'
import { motion, useScroll, useTransform } from 'framer-motion'
import mario from '../../../assets/mario.png'
import { useRef } from 'react'
function First() {
  const carouselRef = useRef()
  const { scrollYProgress } = useScroll(
    {
      target: carouselRef,
      offset: ["start end", "end end"]

    })
  const pacmanmotion = useTransform(scrollYProgress, [0.5, 1], ['-100vw', '95vw'])
  const mariomotion = useTransform(scrollYProgress, [0.7, 1], ['100vh', '-100vh'])

  const y1 = useTransform(scrollYProgress, [0.35,0.38], ['20vh',"02vh"])
  const y2 = useTransform(scrollYProgress, [0.38,0.42], ['20vh',"06vh"])
  const y3 = useTransform(scrollYProgress, [0.42,0.45], ['20vh',"010vh"])
  const y4 = useTransform(scrollYProgress, [0.45,0.48], ['20vh',"014vh"])


  const x1 = useTransform(scrollYProgress, [0.35,0.38], ['17vw',"08vw"])

  const x2= useTransform(scrollYProgress, [0.38,0.42], ['18vw',"06vw"])

  const x3 = useTransform(scrollYProgress, [0.42,0.45], ['19vw',"04vw"])

  const x4 = useTransform(scrollYProgress, [0.45,0.48], ['20vw',"02vw"])

  return (
    <>
    <motion.div  className="first-about">
      <div id='marge'></div>

      <motion.div

        ref={carouselRef}
        className='disc1'>


<div>



        <motion.p className='text text1' style={{y:y1,x:x1}} ></motion.p>
                  <motion.p className='text text2' style={{y:y2,x:x2}}  ></motion.p>
                <motion.p className='text text3' style={{y:y3,x:x3}}    ></motion.p>
          <motion.p className='text text4' style={{y:y4,x:x4}}   >
        
I've always loved technology. From a young age, technology has interested me. Most children play video games of some kind, from tetris to spyro, crash bandicoot to final fantasy, I loved playing with computers, but my interest didn't stop just at entertainment.


            I remember taking apart my computer when I was 12, an event which horrified my parents.

            I still build my own computers.

            I never lost my curiosity, but my interest in technologies changed as I expanded my knowledge from taking apart equipment to building new websites in code.

            Now I focus on people and learning how they interact with websites, making sure they can achieve their goals leaving them satisfied and more likely to return as customers..
            </motion.p >
            <motion.div id='images'>

            </motion.div>


        
        <motion.div style={{ x:pacmanmotion}} className='pacanim'>



          <motion.div className='pacman pacman1'></motion.div>
          <motion.div className='pacman pacman2'></motion.div>
          <motion.div className='pacman pacman3'></motion.div>


        </motion.div>
      
</div>
      </motion.div>
    </motion.div>

  </>
  )
}

export default First