import { motion } from 'framer-motion'
import './NavBar.css'
import logo1 from "../../assets/logo.png"
import logo2 from "../../assets/logo2.png"

function NavBar(props) {
  const spring = {
    type: "spring",
    stiffness: 700,
    damping: 30
  };
  console.log(props.ison)
  return (

    <div data-ison={props.ison} className="navbar">
      <div  className="menu">
        <div className="switch"  onClick={props.switch}>
          <motion.div className="handle" layout transition={spring} />
        </div>
        <div className="logo">
          <img alt='mylogo' className='logoimg' src={props.ison ? logo1 : logo2} />
          <h3 >Berkaoui<span>Mohamed</span></h3></div>
        <div onClick={props.Toggle} className="hamburger-menu">
          <div className="bar"></div>
        </div>
      </div>
    </div>



  )


}

export default NavBar


