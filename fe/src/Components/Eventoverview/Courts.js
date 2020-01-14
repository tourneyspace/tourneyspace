import React from 'react';
import './EventOverview.css'

class Courts extends React.Component {
    render() {
        let amount;
        return   <div id="court-container">
                <h3>Courts</h3>
                <p>Amount: {amount}</p>
            </div>
    }
}

export default Courts;