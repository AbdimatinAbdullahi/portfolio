import React, {useState} from 'react'
import style from '../Nvabar/Navbar.module.css'
import {getImageUrl} from '../../utils'
import logo from '../../../logo.png'
const Navbar = () => {
const [menuOpen, setMenuOpen] = useState(false)
  return (
    <nav className={style.navbar} >
        <a className={style.logo} href="/"> <img className={style.imgLogo} src={logo} alt="Logo"/> Portfolio</a>

        <div className={style.nav} >
            <img className={style.bgrIcon} src={ menuOpen ? getImageUrl('closeIcon.png') :getImageUrl("menuIcon.png")} alt="burgerIcon" onClick={()=> setMenuOpen(!menuOpen)} />

            <ul className={`${style.navItems} ${menuOpen && style.menuOpen}`} onClick={()=> setMenuOpen(false)} > 
                <li><a href="#About">About</a></li>           
                <li> <a href="#skills">Skills</a></li>            
                <li><a href="#projects">Projects</a></li>            
                <li><a href="#contact">Contact</a></li>
            </ul>

        </div>
    </nav>
  )
}

export default Navbar