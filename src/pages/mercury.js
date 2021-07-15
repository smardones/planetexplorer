import React, { useState } from 'react';
import isCurrentTab from '../utils/tabDisplay';

// Components
import NavBar from '../components/nav';
import Tabs from '../components/tabs';
import Statistics from '../components/statistics';
// Image
import PlanetImage from '../assets/planet-mercury.svg';
import PlanetStructureImage from '../assets/planet-mercury-internal.svg'
import SurfaceImg from '../assets/geology-mercury.png';

function Mercury(props) {

    let [currentTab, setCurrentTab] = useState('overview');
    // define the relevant planet's info to pass down to page and components
    let planetInfo = props.props[0];
    return(
        <body>
            {/* Here is the mobile sized JSX */}
            <section id="mobile">
                <NavBar />
                <Tabs setCurrentTab={setCurrentTab} />

                {/* Visible when Overview is the active tab */}

                <div id="overview" className={isCurrentTab(currentTab, "overview") ? 'tab-content-active' : 'tab-content-hidden'}>
                    <div className="image-container">
                        <img id="mercury-image" src={PlanetImage} alt='Mercury Graphic'/>
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
                        <img id="mercury-image" src={PlanetStructureImage} alt='Mercury Graphic'/>
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
                        <img id="mercury-image" src={PlanetImage} alt='Mercury Graphic'/>
                        <img className="geology-img" src={SurfaceImg} alt='Mercury Geological Graphic'/>
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

export default Mercury;