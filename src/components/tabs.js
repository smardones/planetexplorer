import React from 'react';


function Tabs({setCurrentTab}) {

    return(
    <section className="tab-section">
        <button className="tab-button" onClick={() => setCurrentTab('overview')}>OVERVIEW</button>
        <button className="tab-button" onClick={() => setCurrentTab('structure')}>STRUCTURE</button>
        <button className="tab-button" onClick={() => setCurrentTab('surface')}>SURFACE</button>
    </section>    
    
    )}

export default Tabs;