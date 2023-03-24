import { AnimatePresence, motion } from 'framer-motion'
import './About.css'
import Third from './third/Third'
import Tesst from './test/Tesst'
import Firstt from './first/Firstt'
import {  useState } from 'react'
import Placeholder from './test/placeholder/Placeholder'
import img from '../../assets/12.png'
import ScrollToTop from './scrolltotop/Scrolltotop'
function About(props) {




      const [loading, setLoading] = useState(false);
  
    setTimeout(() => {
      setLoading(true);
    }, 4000);

      return (
    
        <motion.div  initial={{ opacity:0,y:70 }} 
        animate={{opacity:1,y:0}} 
        exit={{ opacity:0,y:-80}}
        transition={{ duration:0.5 ,ease:"linear" }} >
   
{!loading&&  <AnimatePresence ><Placeholder/></AnimatePresence>
       }
      
 <motion.div className='main-about' style={{overflow:!loading?"hidden":null,height:!loading?"100vh":null}}>

          
<ScrollToTop/>
<Tesst/>
<Firstt/>

<Third/>




            </motion.div>
       </motion.div>)
}

export default About
