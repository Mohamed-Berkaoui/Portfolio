import './NavBar.css'
import logo1 from "../../assets/logo.png"
import logo2 from "../../assets/logo2.png"

function NavBar(props) {

  console.log(props.ison)
  return (

    <div data-ison={props.ison} className="navbar">
      <div  className="menu">
        <div className="logo" >
        <img alt='mylogo' className='logoimg' src={props.ison ? logo1 : logo2} />

        </div>
        <div className="logo">
          <h3 >Berkaoui<span>Mohamed</span></h3></div>
        <div onClick={props.Toggle} className="hamburger-menu">
          <div className="bar"></div>
        </div>
      </div>
    </div>



  )


}

export default NavBar


