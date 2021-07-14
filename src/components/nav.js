import React from 'react';
import MenuIcon from '../assets/icon-hamburger.svg'

function NavBar() {

    

    return(
        <nav>
            <h1 id="page-title">THE PLANETS</h1>  
            <button id="menu-toggle"> 
                <img src={MenuIcon} />
            </button>
        </nav>
        
    )
}

export default NavBar;