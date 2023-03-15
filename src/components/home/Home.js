import './Home.css'
import { motion,} from 'framer-motion'
import TiltCard from './tiltcard/TiltCard'
import ContactButton from './contactbutton/ContactButton'
import HomeText from './hometext/HomeText'
import ContactBar from '../contactbar/ContactBar'
import { Link } from 'react-router-dom'


function Home(props) {

 

  const options = {
    y:501.2,
    speed: 1000,
    max: 30,
    perspective: 1000,
  };

  return (

    <motion.div             
    initial={{ opacity:0,y:300 }} 
    animate={{opacity:1,y:0}} 
    exit={{ opacity:0,y:-300}}
    transition={{ duration: 1,type:"spring" ,ease:"easeInOut" }} >
        <div className="overlay">
          <div  className='wavyanimation'>
            <div className='wave'></div>
          </div>


          <motion.div initial={{ opacity:0,y:50 }} animate={{opacity:1,y:0}}  transition={{delay:1, duration: 0.5 }} className='hometext'>
          <HomeText  />
          </motion.div>


          <motion.div   initial={{ opacity:0,x:50 }} animate={{opacity:1,x:0}}  transition={{delay:1.2, duration: 0.5 }} className='discreption'>
           
           <p>I’m probably the most passionate Web Developer you will ever get to work with. 
             If you have a great project that needs some amazing skills, I’m your guy!
           </p>
     
        <Link  style={{textDecoration:'none'}} to={'/about'}>
   <h4>CATCH A SIGHT <span>{">>"}</span> </h4></Link>
         </motion.div>

          <motion.div initial={{ opacity:0,x:50 }} animate={{opacity:1,x:0}}  transition={{delay:1.2, duration: 0.5 }} className='tiltcard'>
          <TiltCard ison={props.ison} options={options} /> 
          </motion.div>
          
          <motion.div initial={{ opacity:0,x:-50 }} animate={{opacity:1,x:0}}  transition={{delay:0.8, duration: 0.5 }} className='contactbutton'><Link style={{textDecoration:'none'}} to={'/contact'}>
          <ContactButton /></Link></motion.div>
          <ContactBar/>

        </div>
        </motion.div>
      





  )
}

export default Home