import React from 'react';
import { Link } from 'react-router-dom';
import MenuIcon from '../assets/icon-hamburger.svg';

function SideBar(props) {

   let isMenuOpen = props.isMenuOpen;
   let toggleMenu = props.toggleMenu;

    return(
        <div  id="sidebar" className={(isMenuOpen ? 'sidebar-open' : 'sidebar-closed')}>
            <div id="sidebar-header">
                <h1 id="page-title">THE PLANETS</h1>
                    <button id="menu-toggle" onClick={() => toggleMenu(!isMenuOpen)}> 
                <img src={MenuIcon} />
            </button>
            </div>
            <ul>
                <li className="sb-menu-item">
                    <span id="mercury-dot" className="dot"></span>
                    <Link to='/'>MERCURY</Link>
                </li>
                <li className="sb-menu-item">
                    <span id="venus-dot" className="dot"></span>
                    <Link to='/venus'>VENUS</Link>
                </li>
                <li className="sb-menu-item">
                    <span id="earth-dot" className="dot"></span>
                    <Link to='/earth'>EARTH</Link>
                </li>
                <li className="sb-menu-item">
                    <span id="mars-dot" className="dot"></span>
                    <Link to='/mars'>MARS</Link>
                </li>
                <li className="sb-menu-item">
                    <span id="jupiter-dot" className="dot"></span>
                    <Link to='/jupiter'>JUPITER</Link>
                </li>
                <li className="sb-menu-item">
                    <span id="saturn-dot" className="dot"></span>
                    <Link to='/saturn'>SATURN</Link>
                </li>
                <li className="sb-menu-item">
                    <span id="uranus-dot" className="dot"></span>
                    <Link to='/uranus'>URANUS</Link>
                </li>
                <li className="sb-menu-item">
                    <span id="neptune-dot" className="dot"></span>
                    <Link to='/neptune'>NEPTUNE</Link>
                </li>
            </ul>
        </div>
    )
}

export default SideBar;