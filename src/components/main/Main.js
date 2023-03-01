import './Main.css'
import Home from '../home/Home';
import About from '../about/About';
import NavMenu from '../navmenu/NavMenu';
import NavBar from '../navbar/NavBar';
import { useState } from 'react';
import { Routes, Route, useLocation } from "react-router-dom"
import { AnimatePresence } from 'framer-motion'
import Contact from '../contact/Contact';

function Main() {
  const [ison, setIson] = useState(0);
  const toggleSwitch = () => setIson(!ison);

  const location = useLocation()

  const [isActive, setActive] = useState("true");
  const Toggleclass = () => {
    setActive(!isActive);



    
  };

  return (
<>   

    <div data-ison={ison}  className={isActive ? "container" : "container active"} >
    <NavBar Toggle={Toggleclass} switch={toggleSwitch} ison={ison} />

      <div className="main-container">
       

        <div data-ison={ison} onClick={() => { isActive ? setActive(isActive) : setActive(!isActive) }} className="main">
      
          <div data-ison={ison} className='page'>
     
            <AnimatePresence  mode="wait" >

              <Routes  location={location} key={location.pathname} >
                <Route  path='/' element={<Home ison={ison} />} />
                <Route  path='/about' element={<About ison={ison} />} />
                <Route  path='/contact' element={<Contact ison={ison} />} />

              </Routes>
            </AnimatePresence >
          </div>
        </div>
        <div className="shadow one"></div>
        <div className="shadow two"></div>
      </div>
      <NavMenu ison={ison} Toggle={Toggleclass} />
    </div>
</>
  )
}

export default Main