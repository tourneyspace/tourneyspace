import React, { useState } from 'react';

export default function CreateTournament() {
    //https://stackoverflow.com/questions/51115640/how-to-send-form-data-from-react-to-express

    const [teamName, setTeamName] = useState("");

    const handleSubmit = () => {
        if (teamName === "") {
            alert("Not valid!");
        }
        else {
            alert(`${teamName} created!`);
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="input-fields">
                    <input type="text" placeholder="Team Name" className="input-field" on  onChange={(e) => setTeamName(e.target.value)} />
                </div>

                <div>
                    <button className="green-container btn" type="submit">
                        <span className="btn-text">Continue </span><i className="fas fa-chevron-right"></i>
                    </button>

                    <a href="#"><i className="fas fa-chevron-left"></i> Back</a>
                </div>
            </form>
        </div>
    );
}