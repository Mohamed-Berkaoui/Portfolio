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
<>
{!props.res?(<div id='placeholder'><Tesst/> <img src={img} /></div>):(

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
       </>)
}

export default About