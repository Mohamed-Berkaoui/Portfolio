import './NavBar.css'
import logo2 from "../../assets/logo2.png"

function NavBar(props) {

  const switsh =()=>{ setTimeout(() => {
    props.Toggle()
  }, 100);}

  return (

    <div className="navbar">
      <div  className="menu">
        <div className="logo" >
        <img alt='mylogo' className='logoimg' src={ logo2} />

        </div>
        <div className="logo">
          <h3 >Berkaoui<span>Mohamed</span></h3></div>
        <div onClick={switsh
        } className="hamburger-menu">
          <div className="bar"></div>
        </div>
      </div>
    </div>



  )


}

export default NavBar


