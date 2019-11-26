import React, {Component} from 'react';
import './EventOverview.css'

class Courts extends React.Component {
    render() {
        let amount = 2;
        return   <div id="court-container">
                <h3>Courts</h3>
                <p>Amount: {amount}</p>
            </div>
    }
}

export default Courts;