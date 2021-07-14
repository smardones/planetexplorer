import React from 'react';

function Statistics(props) {
    
    return(
        <section className="stat-section">
            <div className="stat-box">
               <h3 className="stat-title">ROTATION TIME</h3>
               <h2 className="stat-metric">{props.props.rotation.toUpperCase()}</h2>
            </div>
            <div className="stat-box">
                <h3 className="stat-title">REVOLUTION TIME</h3>
                <h2 className="stat-metric">{props.props.revolution.toUpperCase()}</h2>
            </div>
            <div className="stat-box">
                <h3 className="stat-title">RADIUS</h3>
                <h2 className="stat-metric">{props.props.radius.toUpperCase()}</h2>
            </div>
            <div className="stat-box">
                <h3 className="stat-title">AVERAGE TEMP.</h3>
                <h2 className="stat-metric">{props.props.temperature.toUpperCase()}</h2>
            </div> 
        </section>
    )}

export default Statistics;