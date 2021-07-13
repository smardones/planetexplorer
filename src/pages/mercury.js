import React from 'react';

// Components
import NavBar from '../components/nav';
import Tabs from '../components/tabs';
import Statistics from '../components/statistics';
// Image
import PlanetImage from '../assets/planet-mercury.svg';


function Mercury(props) {
    // define the relevant planet's info to pass down to page and components
    let planetInfo = props.props[0];
    return(
        <div>
            {/* Here is the mobile sized JSX */}
            <section id="mobile">
                <NavBar />
                <Tabs />
                <img id="mercury-image" src={PlanetImage} />
                <h1>{planetInfo.name.toUpperCase()}</h1>
                <p>{planetInfo.overview.content}</p>
                <p>
                    <a href={planetInfo.overview.source}>Wikipedia</a>
                </p>
                <Statistics props={planetInfo} />


            </section>
            {/* Here is the tablet sized JSX */}
            <section id="tablet">

            </section>
            {/* Here is the desktop sized JSX */}
            <section id="desktop">

            </section>
        </div>
    )
}

export default Mercury;