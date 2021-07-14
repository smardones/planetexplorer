import React from 'react';

function isCurrentTab(currentTab, elementId) {
    if (currentTab === elementId) return true;
}

export default isCurrentTab;