import axios from 'axios'
const TEAM = '';
const COURSE_API_URL = 'http://localhost:8080';
const TEAMS_API_URL = `${COURSE_API_URL}/teams`;
class TeamDataService {
    retrieveAllTeams(name) {
        return axios.get(`${TEAMS_API_URL}${TEAM}`);
    }
}
export default new TeamDataService()