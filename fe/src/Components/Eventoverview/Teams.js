import React from 'react';
import {Link} from 'react-router-dom';
import './EventOverview.css'
import people from "./people-group.svg";
import TeamDataService from "../../service/DataService";

class Teams extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            teams: [],
            message: null
        };
        this.refreshTeams = this.refreshTeams.bind(this);
    };
    componentDidMount() {
        this.refreshTeams();
    }

    deleteTeamClicked(id) {
        TeamDataService.deleteTeam(id)
            .then(
                response => {
                    this.refreshTeams()
                }
            )
    }

    refreshTeams() {
        TeamDataService.retrieveAllTeams()
            .then(
                response => {
                    this.setState({teams: response.data});
                }
            )
    }

    render() {
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
                                <img className="people-icon" src={people} alt="people"/>
                                <p style={{display: "inline-block"}}>{team.name}</p>
                                    <button className="red-container btn" onClick={() => this.deleteTeamClicked(team.teamId)}>
                                        <span className="btn-text">-</span>
                                    </button>
                            </li>
                    )
                }

            </ul>
        </div>
    }
}

export default Teams;