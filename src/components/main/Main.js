import './Main.css'
import Home from '../home/Home';
import About from '../about/About';
import NavMenu from '../navmenu/NavMenu';
import NavBar from '../navbar/NavBar';
import { useState } from 'react';
import { Routes, Route, useLocation } from "react-router-dom"
import { AnimatePresence } from 'framer-motion'
import Contact from '../contact/Contact';
import Works from './works'
function Main() {

  const location = useLocation()

  const [isActive, setActive] = useState(true);
  const [res, setRes] = useState(isActive);

  const Toggleclass = () => {
    isActive?setRes(!isActive): setTimeout(() => {
      setRes(!isActive);

    }, 500);
   
      setActive(!isActive);

   


    
  };

  return (
<>   

    <div  className={isActive ? "container" : "container active"} >
    <NavBar Toggle={Toggleclass}   />

      <div className="main-container">
       

        <div onClick={isActive?null:Toggleclass} className="main">
      
          <div  className='page'>
     
            <AnimatePresence  mode="wait" >

              <Routes  location={location} key={location.pathname} >
                <Route  path='/' element={<Home />} />
                <Route  path='/about' element={<About res={res} />} />
                <Route  path='/works' element={<Works />} />

                <Route  path='/contact' element={<Contact />} />

              </Routes>
            </AnimatePresence >
          </div>
        </div>
        <div className="shadow one"></div>
        <div className="shadow two"></div>
      </div>
      <NavMenu Toggle={Toggleclass} />
    </div>
</>
  )
}

export default Main
