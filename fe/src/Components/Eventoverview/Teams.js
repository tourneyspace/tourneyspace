import React, {Component} from 'react';
import './EventOverview.css'
import people from "./people-group.svg";

class Teams extends React.Component {
    render() {
        let x = 0;
        if (x === 0){
            return  <div id="team-container">
                <button className="green-container btn">
                    <i className="fas fa-plus-circle"></i>
                </button>
                <h3>Teams</h3>
            </div>
        }
        return  <div id="team-container">
            <button className="green-container btn">
                <i className="fas fa-plus-circle"></i>
            </button>
            <h3>Teams</h3>
            <ul className="list">
                <li className="list-item container-example">
                    <img className="people-icon" src={people} alt="people"/>
                </li>
            </ul>
        </div>
    }
}

export default Teams;