import React, {Component} from 'react';
import empty from "./empty.svg";
import './LandingPage.css'

class LandingPage extends React.Component {
    render() {
        let tourneys = Map;
        if (tourneys == null){
            return <section>
                <h1>Upcoming events</h1>
                <p>No upcoming events</p>
                <div>
                    <img src={empty} alt={empty}/>
                </div>
            </section>
        }else{
            return <section>
                <h1>Upcoming events</h1>
                <ul className="cards">
                    <li className="cards_item">
                        <div className="card">
                            <div className="card_content">
                                <h2 className="card_title">Card Grid Layout</h2>
                                <p className="card_text">Demo of pixel perfect pure CSS simple responsive card grid
                                    layout</p>
                                <button className="btn card_btn">Read More</button>
                            </div>
                        </div>
                    </li>
                </ul>
            </section>
        }
    }
}

export default LandingPage;