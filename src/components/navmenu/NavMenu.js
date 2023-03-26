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
              <p>Works<br/>[under construction]</p>
            </Link>
          </li>
        </ul>
      </div>
   
  )
}

export default NavMenu
