import React from 'react';
import { Link } from 'react-router-dom';
import './EventOverview.css'
import people from "./people-group.svg";
import TeamDataService from "../../service/TeamDataService";
import TEAM from "../../service/TeamDataService"

class Teams extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            teams: [],
            message: null
        };
        this.refresh = this.refresh.bind(this)
    }
    componentDidMount() {
        this.refresh();
    }
    refresh() {
        TeamDataService.retrieveAllTeams(TEAM)//HARDCODED
            .then(
                response => {
                    console.log(response);
                    this.setState({ teams: response.data })
                }
            )
    }
    render() {
        let x = 0;
        if (x === 1) {
            return <div id="team-container">
                <Link to={`/CreateTeam`}>
                    <button className="green-container btn">
                        <i className="fas fa-plus-circle"></i>
                    </button>
                </Link>
                <h3>Teams</h3>
            </div>
        }
        return <div id="team-container">
            <Link to={`/CreateTeam`}>
                <button className="green-container btn">
                    <i className="fas fa-plus-circle"></i>
                </button>
            </Link>
            <h3>Teams</h3>
            <ul className="list">
                {
                    this.state.teams.map(
                        team =>
                            <li className="list-item container-example">
                                <img className="people-icon" src={people} alt="people" />
                                <p>{team.name}</p>
                            </li>
                    )
                }

            </ul>
        </div>
    }
}

export default Teams;