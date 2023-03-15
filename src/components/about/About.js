import { AnimatePresence, motion } from 'framer-motion'
import './About.css'
import Third from './third/Third'
import Tesst from './test/Tesst'
import Firstt from './first/Firstt'
import {  useState } from 'react'
import Placeholder from './test/placeholder/Placeholder'
import img from '../../assets/12.png'
import ScrollToTop from './scrolltotop/Scrolltotop'
import Menu from './test/Menu'
function About(props) {




      const [loading, setLoading] = useState(false);
  
    setTimeout(() => {
      setLoading(true);
    }, 4000);

      return (
    
        <motion.div  initial={{ opacity:0,y:100 }} 
        animate={{opacity:1,y:0}} 
        exit={{ opacity:0,y:-300}}
        transition={{ duration:0.7,type:"keyframes" ,ease:"easeInOut" }} >
{!props.res?(<div id='placeholder'><Menu/> <img src={img} alt=''/></div>):(

        <>
            <AnimatePresence>
{loading ?null: (

        <Placeholder/>
      ) }
      </AnimatePresence>
 <motion.div className='main-about' >

          
<ScrollToTop/>

    <Tesst/>
<Firstt/>

<Third/>




            </motion.div></>
       )}
       </motion.div>)
}

export default About