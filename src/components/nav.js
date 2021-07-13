import React from 'react';

function NavBar() {

    function isMobile() {}
    
    return(
        <div>
            <nav>
                <h1>THE PLANETS</h1>
                <div className="nav-list">
                    <a>MERCURY</a>
                    <a>VENUS</a>
                    <a>EARTH</a>
                    <a>MARS</a>
                    <a>JUPITER</a>
                    <a>SATURN</a>
                    <a>URANUS</a>
                    <a>NEPTUNE</a>
                </div>
            </nav>
        </div>
    )
}

export default NavBar;