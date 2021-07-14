import React from 'react';

// Components
import NavBar from '../components/nav';
import Tabs from '../components/tabs';
import Statistics from '../components/statistics';
// Image
import PlanetImage from '../assets/planet-mars.svg';


function Mars(props) {
    // define the relevant planet's info to pass down to page and components
    let planetInfo = props.props[3];
    return(
        <body>
            {/* Here is the mobile sized JSX */}
            <section id="mobile">
                <NavBar />
                <Tabs />
                <div className="image-container">
                    <img id="mars-image" src={PlanetImage} />
                </div>
                <h2>{planetInfo.name.toUpperCase()}</h2>
                <p className="information">{planetInfo.overview.content}</p>
                <p className="source">
                    Source: <a className="source-link" href={planetInfo.overview.source}>Wikipedia</a>
                </p>
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

export default Mars;