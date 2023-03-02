import { AnimatePresence, motion } from 'framer-motion'
import './About.css'
import Third from './third/Third'
import Tesst from './test/Tesst'
import Firstt from './first/Firstt'
import ContactBar from '../contactbar/ContactBar'
import { useEffect, useState } from 'react'
import Placeholder from './test/placeholder/Placeholder'

function About() {




      const [loading, setLoading] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    }, 4000);
  }, []);
      return (
<>



          
            <AnimatePresence>
{loading ?null: (
    
    
        <Placeholder/>
      ) }</AnimatePresence>
            <motion.div className='main-about'     >

          


    <Tesst/>
<Firstt/>

<Third/>


<ContactBar/>


            </motion.div>
       
       </>)
}

export default About