import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser';

import './contact.css'
import ContactBar from '../contactbar/ContactBar';

function Contact() {
  const [focus1, Setfocus1] = useState(false)
  const [focus2, Setfocus2] = useState(false)
  const [focus3, Setfocus3] = useState(false)
  const [focus4, Setfocus4] = useState(false)

  const toggle1 = () => { Setfocus1(!focus1); };
  const toggle2 = () => { Setfocus2(!focus2); };
  const toggle3 = () => { Setfocus3(!focus3); };
  const toggle4 = () => { Setfocus4(!focus4); };

  const [fname, SetFname] = useState("")

  const Firstname = (e) => {    
    SetFname(e.target.value) }

  const [lname, SetLname] = useState("")

  const Lastname = (e) => {    
    SetLname(e.target.value) }

  const [email, SetEmail] = useState("")

  const Email = (e) => {     
    SetEmail(e.target.value) }

  const [message, SetMessage] = useState("")

  const Message = (e) => {     
    SetMessage(e.target.value) }

    const [status, setStatus] = useState('');




  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_b7jf4d7ds', 'template_71ic2sb', form.current, 'olHe_8OiBJgBFKaMN')
      .then((result) => {
     console.log(result)
    setStatus('SUCCESS');
    SetFname('') ;
    SetLname('')
    SetEmail('')
    SetMessage('')
    }, (error) => {
alert('oops there is a problem , try again',error)      });
  };
  useEffect(() => {
    if(status === 'SUCCESS') {
      setTimeout(() => {
        setStatus('');

      }, 3000);
    }
  }, [status]);


  return (
    
    <motion.div  initial={{ opacity:0,y:80 }} 
    animate={{opacity:1,y:0}} 
    exit={{ opacity:0,y:-80}}
    transition={{ duration: 0.5,ease:"linear" }} 
      className="contact">
           {status&&renderAlert()}
      <div className="contactcontainer">
        <div className="left">
          <div className="form-wrapper">
            <div className="contact-heading">
              <h1>Let's work together<span>.</span></h1>
              <p className="text">0r reach me via : <a
                href="mailto:">berkaouimedev@gmail.com</a></p>
            </div>
            <motion.form initial={{ opacity:0,y:50 }} animate={{opacity:1,y:0}}  transition={{delay:0.4, duration: 0.5 }} ref={form} onSubmit={sendEmail} className="contact-form">
              <div className={!focus1 ? "input-wrap" : "input-wrap focus"}>
                <input value={fname} onChange={Firstname} className='contact-input' onFocus={toggle1} onBlur={toggle1} autoComplete="off" name="user_name" type="text" required />
                <label className={fname !== '' ? "not-empty" : null} >First Name</label>
              </div>
              <div className={!focus2 ? "input-wrap" : "input-wrap focus"}>
                <input value={lname} className='contact-input' onChange={Lastname} onFocus={toggle2} onBlur={toggle2} autoComplete="off" name="user_last_name" type="text" required />
                <label className={lname !== '' ? "not-empty" : null}>last Name</label>
              </div>
              <div className={!focus3 ? "input-wrap w-100" : "input-wrap w-100 focus"}>
                <input  className='contact-input' onChange={Email} onFocus={toggle3} onBlur={toggle3} autoComplete="off" name="user_email"
                  type="email" value={email} required />
                <label className={email !== '' ? "not-empty" : null}>Email</label>
              </div>
              <div className={!focus4 ? "input-wrap textarea w-100" : "input-wrap textarea w-100 focus"}>
                <textarea value={message} onFocus={toggle4} onChange={Message} onBlur={toggle4} className='contact-input' name="message" auto-complete="off"
                  required></textarea>
                <label className={message !== '' ? "not-empty" : null}>Message</label>
              </div>
              <div className='contact-buttons'>
              
                <motion.div     whileTap={{ scale: 0.9 }}
 className='btn'>
                  <input type="submit" value="Send" />
                  <span></span>
                </motion.div>
              </div>
            </motion.form>
            <svg className='dashed-wave' viewBox="0 0 345 877" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path id="dashed-wave" d="M297.64,0,223.23,210.47,148.82,420.94,74.41,631.42,0,841.89H595.28l8.38-204.6L612,432.68q.24-5.87.24-11.74T612,409.21L603.66,204.6,595.28,0H297.64Z" />
          </svg>
          </div>
        </div>





        <div className="right">
          <div className='image-wrapper'>
            <iframe title='map' className='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d64393.90416583071!2d10.13868373038761!3d36.810314227677154!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12fd347621688e13%3A0x4377d30c058ed4d3!2sRue%20Des%20Djerbiens%2C%20Tunis!5e0!3m2!1sfr!2stn!4v1677325752990!5m2!1sfr!2stn" style={{ border: "0" }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
          <div className="wave-wrap">

            <svg className='wave' viewBox="0 0 783 1536" xmlns="http://www.w3.org/2000/svg">
              <path id="wave" d="M17.9,0H595.28L297.64,841.89H0V17.9A17.89,17.89,0,0,1,17.9,0Z" />
            </svg>
         

          </div>
         

        </div>
      </div>

<ContactBar/>
    </motion.div>
   

  )
}
const renderAlert = () => (
  <div className="succses">
    <p>your message submitted successfully</p>
  </div>
)

export default Contact
