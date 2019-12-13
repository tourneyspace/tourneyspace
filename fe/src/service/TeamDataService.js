import axios from 'axios'
const TEAM = '';
const REST_API_URL = 'http://localhost:8080';
const TEAMS_API_URL = `${REST_API_URL}/teams`;
class TeamDataService {
    retrieveAllTeams() {
        return axios.get(`${TEAMS_API_URL}${TEAM}`);
    }

    createTeam(name){
        console.log(`Team with id: ${name} was created`);
        return axios.post(`${REST_API_URL}/addTeam/${name}`)
    }

    deleteTeam(teamId){
        console.log(`Team with id: ${teamId} was deleted`);
        return axios.post(`${REST_API_URL}/deleteTeam/${teamId}`)
    }
    createTournament(eventName, startTime, breakTime, gameLength, courts){
        console.log(`Tournament: ${eventName} was created`);
        return axios.post(`${REST_API_URL}/createTournament/`)

    }
}
export default new TeamDataService()