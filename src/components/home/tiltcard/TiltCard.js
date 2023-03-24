import   './TiltCard.css'
import React, { useEffect, useRef } from 'react';
import VanillaTilt from 'vanilla-tilt';
import logo2 from '../../../assets/yogi.png'
import { Link } from 'react-router-dom';



function TiltCard(props) {
    
    const { options, ...rest } = props;
const tilt = useRef(null);

useEffect(() => {
  VanillaTilt.init(tilt.current, options);
}, [options]);
  return (
    <Link style={{textDecoration:'none'}} to={'/about'}  >
    <div ref={tilt} {...rest}  class="aboutme">

<div className="ribbon"><span>About me</span></div>
        <div className='mylogo'>
          <img alt='' src={ logo2}/></div>
          <div className='discreptionbox'>
           
            <p>I’m probably the most passionate Web Developer you will ever get to work with. 
              If you have a great project that needs some amazing skills, I’m your guy
            </p>
      
            <h4>LET'S GOSSIP <span>{">>"}</span> </h4>
          </div>
    </div> </Link> )
}

export default TiltCard
