import axios from 'axios'

const TEAM = '';
const REST_API_URL = 'http://localhost:8080';
const TEAMS_API_URL = `${REST_API_URL}/teams`;

class DataService {
    retrieveAllTeams() {
        return axios.get(`${TEAMS_API_URL}${TEAM}`);
    }

    createTeam(name) {
        console.log(`Team with id: ${name} was created`);
        return axios.post(`${REST_API_URL}/addTeam/${name}`)
    }

    deleteTeam(teamId) {
        console.log(`Team with id: ${teamId} was deleted`);
        return axios.delete(`${REST_API_URL}/deleteTeam/${teamId}`)
    }

    createTournament(name, location, image, date, teams, courts, startTime, pause, gameLength) {
        console.log(`Tournament: ${name} was created`);
        return axios.post(`${REST_API_URL}/addTourney/${name}/${location}/${image}/${date}/${teams}/${courts}/${startTime}/${pause}/${gameLength}`)

    }
}

export default new DataService()