import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import '../componentsCSS/Navbar.css';

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

        const showButton =() =>{if(window.innerWidth<=960){
            setButton(false);
        }else{
            setButton(true);
        }
    };

    window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
            <Link to="/" className='navbar-logo'>
            <img src="/images/Logo.png" className='logo' alt="image" height={45} width={100} onClick={closeMobileMenu} />
            </Link>
            <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fa-solid fa-times' : 'fa-solid fa-bars'}/>
            </div>
            <ul className= {click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
                <Link to= '/' className='nav-links' onClick={closeMobileMenu}>
                    Home
                </Link>
            </li>
            <li className='nav-item'>
                <Link to= '/Services' className='nav-links' onClick={closeMobileMenu}>
                    Services
                </Link>
            </li>
            <li className='nav-item'>
                <Link to= '/Sign up' className='nav-links' onClick={closeMobileMenu}>
                    Sign Up
                </Link>
            </li>
            <li className='nav-item'>
                <Link to= '/Contact' className='nav-links' onClick={closeMobileMenu}>
                    Contact
                </Link>
            </li>
            <li className='nav-item'>
                <Link to= '/AboutUs' className='nav-links' onClick={closeMobileMenu}>
                    About Us
                </Link>
            </li>
            </ul>
           {/* {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}*/}
        </div>
      </nav>
    </>
  )
}

export default Navbar;
