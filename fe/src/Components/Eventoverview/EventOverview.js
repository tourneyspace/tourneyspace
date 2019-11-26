import React from 'react';
import { Link } from 'react-router-dom';
import './EventOverview.css'
import Schedule from "./Schedule";
import Teams from "./Teams"
import Courts from "./Courts";

class EventOverview extends React.Component {
    render() {
        return <section>
            <h1>Streetball tournament</h1>
            <button className="red-container btn">
                <span className="btn-text">Delete</span>
                <i className="fas fa-trash-alt"></i>
            </button>

            <Link to={`/editTournament`}>
                <button className="yellow-container btn">
                    <span className="btn-text">Edit</span>
                    <i className="fas fa-edit"></i>
                </button>
            </Link>

            <div className="flex-container">
                <Schedule />
                <div id="conwrap">
                    <Teams />
                    <Courts />
                </div>
            </div>
            <br />
            <br />
            <br />
            <Link to={`/landingpage`}>
                <i className="fas fa-chevron-left"></i> Back
            </Link>
        </section>
    }
}

export default EventOverview;