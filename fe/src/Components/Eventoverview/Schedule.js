import React, {Component} from 'react';
import './EventOverview.css'
import nodata from './no_data.png'

class Schedule extends React.Component {
    render() {
        let x = 0;
        if (x === 0){
            return <div id="schedule-container">
                <h3>Schedule</h3>
                <img className="nodata" src={nodata} alt='none'/>
            </div>
        }
        return <div id="schedule-container">
            <h3>Schedule</h3>
            <ul className="list">
                <li className="list-item container-example">
                    <p><span className="blue-container time">10:30 - 11:00</span> <span>TeamOne</span> <span>vs</span>
                        <span>TeamTwo</span> <span>Live *</span></p>
                </li>
            </ul>
        </div>
    }
}

export default Schedule;