import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import MenuIcon from '../assets/icon-hamburger.svg';

import SideBar from './sidebarmenu';

function NavBar() {

    const [ isMenuOpen, toggleMenu ] = useState(false);


    return(
        <nav>
            <h1 id="page-title">THE PLANETS</h1>  
            <ul id="menu-choices">
                <li>
                    <Link to='/'>MERCURY</Link>
                </li>
                <li>
                    <Link to='/venus'>VENUS</Link>
                </li>
                <li>
                    <Link to='/earth'>EARTH</Link>
                </li>
                <li>
                    <Link to='/mars'>MARS</Link>
                </li>
                <li>
                    <Link to='/jupiter'>JUPITER</Link>
                </li>
                <li>
                    <Link to='/saturn'>SATURN</Link>
                </li>
                <li>
                    <Link to='/uranus'>URANUS</Link>
                </li>
                <li>
                    <Link to='/neptune'>NEPTUNE</Link>
                </li>
            </ul>
            <button id="menu-toggle" onClick={() => toggleMenu(!isMenuOpen)}> 
                <img src={MenuIcon} />
            </button>
            <SideBar isMenuOpen={isMenuOpen} toggleMenu={toggleMenu}/>
        </nav>
        
    )
}

export default NavBar;