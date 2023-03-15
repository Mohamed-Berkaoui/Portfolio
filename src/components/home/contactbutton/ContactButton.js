import './ContactButton.css'
import {motion} from'framer-motion'

function ContactButton() {
  return (
    
    <motion.div whileTap={{ scale: 0.9 }} className='bottoncontact' >
    <span id='buttonspan'>Contact ME!</span>
    <div className='liquid'></div> </motion.div>
  )
}

export default ContactButton