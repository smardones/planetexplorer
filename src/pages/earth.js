import React, { useState } from 'react';
import isCurrentTab from '../utils/tabDisplay';

// Components
import NavBar from '../components/nav';
import MobileTabs from '../components/mobiletabs';
import Statistics from '../components/statistics';
// Images
import PlanetImage from '../assets/planet-earth.svg';
import PlanetStructureImage from '../assets/planet-earth-internal.svg'
import SurfaceImg from '../assets/geology-earth.png';


function Earth(props) {

    let [currentTab, setCurrentTab] = useState('overview');
    // define the relevant planet's info to pass down to page and components
    let planetInfo = props.props[2];
    return(
        <body>
            <NavBar />
            {/* Here is the mobile sized JSX */}
            <section id="mobile">
                <MobileTabs setCurrentTab={setCurrentTab} />

                {/* Visible when Overview is the active tab */}

                <div id="overview" className={isCurrentTab(currentTab, "overview") ? 'tab-content-active' : 'tab-content-hidden'}>
                    <div className="image-container">
                        <img id="earth-image" src={PlanetImage} alt='Earth Graphic'/>
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
                        <img id="earth-image" src={PlanetStructureImage} alt='Earth Graphic'/>
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
                        <img id="earth-image" src={PlanetImage} />
                        <img className="geology-img" src={SurfaceImg} />
                    </div>
                    <h2>{planetInfo.name.toUpperCase()}</h2>
                    <p className="information">{planetInfo.geology.content}</p>
                    <p className="source">
                        Source: <a className="source-link" href={planetInfo.geology.source}>Wikipedia</a>
                    </p>
                </div>
                
            </section>
            {/* Here is the tablet sized JSX */}
            <section id="tablet">
                
                    {/* Visible when Overview is the active tab */}

                <div id="overview" className={isCurrentTab(currentTab, "overview") ? 'tab-content-active' : 'tab-content-hidden'}>
                    <div className="image-container">
                        <img id="earth-image" src={PlanetImage} alt='earth Graphic'/>
                    </div>
                    <div className="tablet-content">
                        <div className="text-block" >
                            <h2>{planetInfo.name.toUpperCase()}</h2>
                            <p className="information">{planetInfo.overview.content}</p>
                            <p className="source">
                                Source: <a className="source-link" href={planetInfo.overview.source}>Wikipedia</a>
                            </p>
                        </div>
                        <MobileTabs setCurrentTab={setCurrentTab} />
                    </div>
                </div>

                {/* Visible when Structure is the active tab */}

                <div id="structure" className={isCurrentTab(currentTab, "structure") ? 'tab-content-active' : 'tab-content-hidden'}>
                    <div className="image-container">
                        <img id="earth-image" src={PlanetStructureImage} alt='earth Graphic'/>
                    </div>
                    <div className="tablet-content">
                        <div className="text-block">
                            <h2>{planetInfo.name.toUpperCase()}</h2>
                            <p className="information">{planetInfo.structure.content}</p>
                            <p className="source">
                                Source: <a className="source-link" href={planetInfo.structure.source}>Wikipedia</a>
                            </p>
                        </div>
                        <MobileTabs setCurrentTab={setCurrentTab} />
                    </div>
                </div>

                {/* Visible when Surface is the active tab */}
                
                <div id="surface" className={isCurrentTab(currentTab, "surface") ? 'tab-content-active' : 'tab-content-hidden'}>
                    <div className="image-container">
                        <img id="earth-image" src={PlanetImage} alt='earth Graphic'/>
                        <img className="geology-img" src={SurfaceImg} alt='earth Geological Graphic'/>
                    </div>
                    <div className="tablet-content">
                        <div className="text-block">
                            <h2>{planetInfo.name.toUpperCase()}</h2>
                            <p className="information">{planetInfo.geology.content}</p>
                            <p className="source">
                                Source: <a className="source-link" href={planetInfo.geology.source}>Wikipedia</a>
                            </p>
                        </div>
                        <MobileTabs setCurrentTab={setCurrentTab} />
                    </div>
                </div>
            </section>
            {/* Here is the desktop sized JSX */}
            <section id="desktop">

                {/* Visible when Overview is the active tab */}

                <div id="overview" className={[isCurrentTab(currentTab, "overview") ? 'tab-content-active' : 'tab-content-hidden', 'main-content'].join(' ')}>
                    <div className="image-container">
                        <img id="earth-image" src={PlanetImage} alt='earth Graphic'/>
                    </div>
                    <div className="desktop-content">
                        <div className="text-block" >
                            <h2>{planetInfo.name.toUpperCase()}</h2>
                            <p className="information">{planetInfo.overview.content}</p>
                            <p className="source">
                                Source: <a className="source-link" href={planetInfo.overview.source}>Wikipedia</a>
                            </p>
                        </div>
                        <MobileTabs setCurrentTab={setCurrentTab} />
                    </div>
                </div>

                {/* Visible when Structure is the active tab */}

                <div id="structure" className={[isCurrentTab(currentTab, "structure") ? 'tab-content-active' : 'tab-content-hidden', 'main-content'].join(' ')}>
                    <div className="image-container">
                        <img id="earth-image" src={PlanetStructureImage} alt='earth Graphic'/>
                    </div>
                    <div className="desktop-content">
                        <div className="text-block">
                            <h2>{planetInfo.name.toUpperCase()}</h2>
                            <p className="information">{planetInfo.structure.content}</p>
                            <p className="source">
                                Source: <a className="source-link" href={planetInfo.structure.source}>Wikipedia</a>
                            </p>
                        </div>
                        <MobileTabs setCurrentTab={setCurrentTab} />
                    </div>
                </div>

                {/* Visible when Surface is the active tab */}
                
                <div id="surface" className={[isCurrentTab(currentTab, "surface") ? 'tab-content-active' : 'tab-content-hidden', 'main-content'].join(' ')}>
                    <div className="image-container">
                        <img id="earth-image" src={PlanetImage} alt='earth Graphic'/>
                        <img className="geology-img" src={SurfaceImg} alt='earth Geological Graphic'/>
                    </div>
                    <div className="desktop-content">
                        <div className="text-block">
                            <h2>{planetInfo.name.toUpperCase()}</h2>
                            <p className="information">{planetInfo.geology.content}</p>
                            <p className="source">
                                Source: <a className="source-link" href={planetInfo.geology.source}>Wikipedia</a>
                            </p>
                        </div>
                        <MobileTabs setCurrentTab={setCurrentTab} />
                    </div>
                </div>

            </section>
            <Statistics props={planetInfo} />
        </body>
    )
}

export default Earth;