import { useEffect,useRef } from 'react';
import Typed from 'typed.js'

import   './HomeText.css'


function HomeText() {
    
    const el = useRef(null)
    useEffect(() => {
       new Typed(el.current, {
        strings: ["WEB DEVELOPER.^800", "WEB DESIGNER.^800", "GRAPHIC DESIGNER.^800", "FULLSTACK DEVELOPER.^1000"],
        backDelay: 10,
        startDelay: 200,
  
        typeSpeed: 30,
        backSpeed: 30,
        smartBackspace: true,
        loop: true,
        showCursor: true
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