import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import History from '../../history';

export default function EditTournament(props) {
    //https://stackoverflow.com/questions/51115640/how-to-send-form-data-from-react-to-express

    const [eventName, setEventName] = useState(props.eventName);
    const [startTime, setStartTime] = useState(props.startTime);
    const [breakTime, setBreakTime] = useState(props.breakTime);
    const [gameLength, setGameLength] = useState(props.gameLength);
    const [courts, setCourts] = useState(props.courts);

    const handleSubmit = () => {
        if (eventName === "" || startTime === "" || breakTime === "" || gameLength === "" || courts === "") {
            alert("Not valid!");
        }
        else {
            History.push('/landingpage');
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="input-fields">
                    <input type="text" placeholder="Event Name" className="input-field" onChange={(e) => setEventName(e.target.value)} />
                    <br />
                    <input type="date" className="input-field" onChange={(e) => setStartTime(e.target.value)} />
                    <p>Start time</p>
                    <br />
                    <input type="time" className="input-field" onChange={(e) => setBreakTime(e.target.value)} />
                    <p>Break time</p>
                    <br />
                    <input type="time" className="input-field" onChange={(e) => setGameLength(e.target.value)} />
                    <p>Game length</p>
                    <br />
                    <input type="number" placeholder="Number of courts" className="input-field" onChange={(e) => setCourts(e.target.value)} />
                </div>

                <div>
                    <button className="green-container btn" type="submit">
                        <span className="btn-text">Continue </span><i className="fas fa-chevron-right"></i>
                    </button>

                    <Link to={`/landingpage`}><i className="fas fa-chevron-left"></i> Back</Link>
                </div>
            </form>
        </div>
    );
}