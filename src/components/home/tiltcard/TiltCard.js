import   './TiltCard.css'
import React, { useEffect, useRef } from 'react';
import VanillaTilt from 'vanilla-tilt';
import logo1 from '../../../assets/yogi.png'
import logo2 from '../../../assets/yogi2.png'

import yogi1 from '../../../assets/yogilogo.png'
import yogi2 from '../../../assets/yogistar.png'


function TiltCard(props) {
    
    const { options, ...rest } = props;
const tilt = useRef(null);

useEffect(() => {
  VanillaTilt.init(tilt.current, options);
}, [options]);
  return (
    <div ref={tilt} {...rest}  class="aboutme">

        <div className='topname topname1'>
        <p>B.Mohamed</p>
          
        </div>
        <div className='topname topname2'><p>About ME</p></div>
    
        <div className='mylogo'>
          <img alt='' src={props.ison ?logo2:logo1}/></div>
          <div className='discreptionbox'>
            <h4>[effect ]</h4>
            <p>discreptionbox here
            </p>
          </div>
    </div>  )
}

export default TiltCard