import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import './index.css';
import History from './history';

import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import Landingpage from './Components/Landingpage/LandingPage';
import CreateTournament from './Components/CreateTournament/CreateTournament';
import EditTournament from './Components/EditTournament/EditTournament';
import EventOverview from "./Components/Eventoverview/EventOverview";
import CreateTeam from './Components/CreateTeam/CreateTeam';

export default function Body() {
    return (
        <main>
            <BrowserRouter history={History}>
                <div>
                    <Switch>
                        <Route path='/register' component={Register} name="Register" />
                        <Route path='/landingpage' component={Landingpage} name="Landingpage" />  
                        <Route path='/createTournament' component={CreateTournament} name="CreateTournament" />
                        <Route path='/editTournament' component={EditTournament} name="EditTournament" />
                        <Route path='/createTeam' component={CreateTeam} name="CreateTeam" />
                        <Route path='/eventOverview' component={EventOverview} name="EventOverview" />
                        {/* must be on the last position */}
                        <Route path='/' component={Login} name="Login" />
                    </Switch>
                </div>
            </BrowserRouter>
        </main>
    );
}

serviceWorker.unregister();

// ========================================

ReactDOM.render(
    <Body/>,
    document.getElementById('root')
);