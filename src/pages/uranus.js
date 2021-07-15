import React, { useState } from 'react';
import isCurrentTab from '../utils/tabDisplay';

// Components
import NavBar from '../components/nav';
import MobileTabs from '../components/mobiletabs';
import Statistics from '../components/statistics';
// Image
import PlanetImage from '../assets/planet-uranus.svg';
import PlanetStructureImage from '../assets/planet-uranus-internal.svg'
import SurfaceImg from '../assets/geology-uranus.png';


function Uranus(props) {

    let [currentTab, setCurrentTab] = useState('overview');
    // define the relevant planet's info to pass down to page and components
    let planetInfo = props.props[6];
    return(
        <body>
            {/* Here is the mobile sized JSX */}
            <section id="mobile">
                <NavBar />
                <MobileTabs setCurrentTab={setCurrentTab} />

                {/* Visible when Overview is the active tab */}

                <div id="overview" className={isCurrentTab(currentTab, "overview") ? 'tab-content-active' : 'tab-content-hidden'}>
                    <div className="image-container">
                        <img id="uranus-image" src={PlanetImage} alt='Uranus Graphic'/>
                    </div>
                    <h2>{planetInfo.name.toUpperCase()}</h2>
                    <p className="information">{planetInfo.overview.content}</p>
                    <p className="source">
                        Source: <a className="source-link" href={planetInfo.overview.source}>Wikipedia</a>
                    </p>
                </div>

                {/* Visible when Structure is the active tab */}

                <div id="structure" className={isCurrentTab(currentTab, "structure") ? 'tab-content-active' : 'tab-content-hidden'}>
                    <div className="image-container">
                        <img id="uranus-image" src={PlanetStructureImage} alt='Uranus Graphic'/>
                    </div>
                    <h2>{planetInfo.name.toUpperCase()}</h2>
                    <p className="information">{planetInfo.structure.content}</p>
                    <p className="source">
                        Source: <a className="source-link" href={planetInfo.structure.source}>Wikipedia</a>
                    </p>
                </div>

                {/* Visible when Surface is the active tab */}
                
                <div id="surface" className={isCurrentTab(currentTab, "surface") ? 'tab-content-active' : 'tab-content-hidden'}>
                    <div className="image-container">
                        <img id="uranus-image" src={PlanetImage} alt='Uranus Graphic'/>
                        <img className="geology-img" src={SurfaceImg} alt='Uranus Geological Graphic'/>
                    </div>
                    <h2>{planetInfo.name.toUpperCase()}</h2>
                    <p className="information">{planetInfo.geology.content}</p>
                    <p className="source">
                        Source: <a className="source-link" href={planetInfo.geology.source}>Wikipedia</a>
                    </p>
                </div>
                <Statistics props={planetInfo} />
            </section>
            {/* Here is the tablet sized JSX */}
            <section id="tablet">

            </section>
            {/* Here is the desktop sized JSX */}
            <section id="desktop">

            </section>
        </body>
    )
}

export default Uranus;