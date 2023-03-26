import { Link } from 'react-router-dom'
import './NavMenu.css'

function NavMenu(props) {
  return (
   
        <div  className="links" >
        <ul>
          <li onClick={props.Toggle} >
            <Link to={'/'}>
              <p>Home</p>
            </Link>
          </li>

          <li onClick={props.Toggle}>
           <Link to={'/about'}>
              <p>About</p>
            </Link>
          </li>
        
          <li onClick={props.Toggle}>
           <Link to={'/contact'}>
              <p>Contact</p>
            </Link>
          </li>
        

  <li onClick={props.Toggle}>
           <Link to={'/works'}>
              <p>Works<br/><span style={{fontSize:0.5em}}>[under construction]</span></p>
            </Link>
          </li>
        </ul>
      </div>
   
  )
}

export default NavMenu
