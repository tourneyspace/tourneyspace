import React, {Component} from 'react';
import './EventOverview.css'
import Schedule from "./Schedule";
import Teams from "./Teams"
import Courts from "./Courts";

class EventOverview extends React.Component {
    render() {
        return <section>
            <h1>The tourney</h1>
            <button className="red-container btn">
                <span className="btn-text">Delete</span>
                <i className="fas fa-trash-alt"></i>
            </button>
            <button className="yellow-container btn">
                <span className="btn-text">Edit</span>
                <i className="fas fa-edit"></i>
            </button>
            <div className="flex-container">
                <Schedule/>
                <div id="conwrap">
                    <Teams/>
                    <Courts/>
                </div>
            </div>
            <br/>
            <br/>
            <br/>
            <a href="#">
                <i className="fas fa-chevron-left"></i> Back
            </a>
        </section>
    }
}

export default EventOverview;