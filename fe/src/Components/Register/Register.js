import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import History from '../../history';

export default function Register() {
    //https://stackoverflow.com/questions/51115640/how-to-send-form-data-from-react-to-express

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleSubmit = () => {
        if (username === "" || password === "" || confirmPassword === "") {
            alert("Not valid!");
        }
        else if (password !== confirmPassword) {
            alert("Password should be the same!");
        }
        else {
            History.push('/login');
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="input-fields">
                    <input type="text" placeholder="Username" className="input-field" on  onChange={(e) => setUsername(e.target.value)} />
                    <br />
                    <input type="password" placeholder="Password" className="input-field" onChange={(e) => setPassword(e.target.value)} />
                    <br />
                    <input type="password" placeholder="Confirm Password" className="input-field" onChange={(e) => setConfirmPassword(e.target.value)} />
                </div>

                <div>
                    <button className="green-container btn" type="submit">
                        <span className="btn-text">Continue </span><i className="fas fa-chevron-right"></i>
                    </button>

                    <Link to={`/login`}><i className="fas fa-chevron-left"></i> Back</Link>
                </div>
            </form>
        </div>
    );
}