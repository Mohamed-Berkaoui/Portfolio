import React, { useRef } from 'react'
import {motion, useScroll, useTransform, useViewportScroll} from "framer-motion"


function Test() {
  const carouselRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: carouselRef,
    offset: ["start end", "end end"]
   
  })
  const scaleRight = useTransform(scrollYProgress, [0.3,0.9], [3, 2]);

  const yRight = useTransform(scrollYProgress, [0.3,0.9], ["0vh", "0vh"]);
  const xRight = useTransform(scrollYProgress, [0.3,0.9], ["0vw", "70vw"]);

  const yLeft = useTransform(scrollYProgress, [0.3,0.9], ["-0vh", "0vh"]);
  const xLeft = useTransform(scrollYProgress, [0.3,0.9], ["-100vw", "5vw"]);

  const zRight = useTransform(scrollYProgress, [0.3,0.9], ["-200vw", "-70vw"]);

  
  return (


  
  
  <>


    
   <div ref={carouselRef}  style={{ width: "100vw", height: "300vh" }}>
      <div 
        style={{
          height: "110vh",
          display: "flex",
          position: "sticky",
          top: "0px",
        }}
      >
       
        <motion.div
          className="child"
         
           style={{
            display:'flex',
            alignItems:'center',
            height: "100%",
            width: "50vw",
            scale: scaleRight,
            y: yRight,
            x: xRight,
          }}
         
        >

          <h2>first</h2>
        </motion.div>
        
      </div>
     
    </div>
 <div style={{ width: "100vw", height: "150vh" ,background:'red'}}>
</div>
</> )
}

export default Test