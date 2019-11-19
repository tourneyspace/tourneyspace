import React, {Component} from 'react';
import empty from "./empty.svg";
import './LandingPage.css'

class LandingPage extends React.Component {
    render() {
        let tourneys = Map;
        //To try out the page just change the operator to != or ==
        if (tourneys == null){
            return <section>
                <h1>Upcoming events</h1>
                <button className="green-container btn">
                    <span className="btn-text">Create</span>
                    <i className="fas fa-plus-circle"></i>
                </button>
                <p>No upcoming events</p>
                <div className="empty">
                    <img src={empty} alt={empty}/>
                </div>
            </section>
        }else{
            return <section>
                <h1>Upcoming events</h1>
                <button className="green-container btn">
                    <span className="btn-text">Create</span>
                    <i className="fas fa-plus-circle"></i>
                </button>
                <div className="container-example sports-container">
                    <button className="blue-container btn">
                        <i className="fas fa-chevron-right"></i>
                    </button>
                    <p>Date</p>
                    <h2>The sport</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
            </section>
        }
    }
}

export default LandingPage;