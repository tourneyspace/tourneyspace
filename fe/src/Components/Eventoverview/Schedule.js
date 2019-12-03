import React from 'react';
import './EventOverview.css'
import nodata from './no_data.png'
import {map} from "mongoose";

class Schedule extends React.Component {
    render() {
        let hours = new Date().getHours();
        let minutes = new Date().getHours();
        let currentTime = hours + ":" + minutes;
        let gameTime = String;
        let x = 1;
        if (x === 0) {
            return <div id="schedule-container">
                <h3>Schedule</h3>
                <img className="nodata" src={nodata} alt='none'/>
            </div>
        }
        return <div id="schedule-container">
            <h3>Schedule</h3>
            <ul className="list">
                <li className="list-item container-example">
                    <p className="game-container">
                        <span className="blue-container time">10:30 - 11:00</span>
                        <span>TeamOne</span>
                        <span className="vs">vs</span>
                        <span>TeamTwo </span>
                        <span>Court: 3 </span>
                        <span className="isLiveCont"><div className="live"></div> Live</span>
                    </p>
                </li>
            </ul>
        </div>
    }
}

export default Schedule;