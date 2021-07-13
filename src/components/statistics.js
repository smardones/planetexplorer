import React from 'react';

function Statistics(props) {
    console.log(props.props.name);
    return(
        <div>
            <div>
               <h3>ROTATION TIME</h3>
               <h2>{props.props.rotation.toUpperCase()}</h2>
            </div>
            <div>
                <h3>REVOLUTION TIME</h3>
                <h2>{props.props.revolution.toUpperCase()}</h2>
            </div>
            <div>
                <h3>RADIUS</h3>
                <h2>{props.props.radius.toUpperCase()}</h2>
            </div>
            <div>
                <h3>AVERAGE TEMP.</h3>
                <h2>{props.props.temperature.toUpperCase()}</h2>
            </div> 
        </div>
    )}

export default Statistics;