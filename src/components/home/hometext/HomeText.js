import { useEffect,useRef } from 'react';
import Typed from 'typed.js'

import   './HomeText.css'


function HomeText() {
    
    const el = useRef(null)
    useEffect(() => {
      var typed = new Typed(el.current, {
        strings: ["WEB DEVELOPER.^800", "WEB DESIGNER.^800", "GRAPHIC DESIGNER.^800", "FULLSTACK DEVELOPER.^1700"],
        backDelay: 10,
        startDelay: 800,
  
        typeSpeed: 20,
        backSpeed: 10,
        smartBackspace: true,
        loop: true,
        showCursor: false
      });
    }, [el])
  return (
    <div  className='animatedtext'>
        <div className="glitchedname">
            <h3 > Hello There ! I'm
              <div className="glitch">
                <span aria-hidden="true">Berkaoui Mohamed</span>
                Berkaoui Mohamed
                <span aria-hidden="true">Berkaoui Mohamed</span>
              </div></h3></div>


              <div>
            <p >I'm a <span ref={el}></span></p></div>


          </div>
  )
}

export default HomeText