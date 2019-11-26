import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

export default function Login() {
    //https://stackoverflow.com/questions/51115640/how-to-send-form-data-from-react-to-express

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = () => {
        if (username === "" || password === "") {
            alert("Not valid!");
        }
        else {
            alert(`${username} logged in!`);
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="input-fields">
                    <input type="text" placeholder="Username" className="input-field" on  onChange={(e) => setUsername(e.target.value)} />
                    <br />
                    <input type="password" placeholder="Password" className="input-field" onChange={(e) => setPassword(e.target.value)} />
                </div>

                <div>
                    <button className="blue-container btn" type="submit">
                        <span className="btn-text">Login </span><i className="fas fa-chevron-right"></i>
                    </button>

                    {/* <div>
                        <NavLink to={`/inventory`}>Go</NavLink>
                    </div> */}
                    <a href="#">Register</a>
                </div>
            </form>
        </div>
    );
}