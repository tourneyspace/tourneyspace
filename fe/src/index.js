import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, NavLink } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import './index.css';

import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import Landingpage from './Components/Landingpage/LandingPage';
import CreateTournament from './Components/CreateTournament/CreateTournament';
import CreateTeam from './Components/CreateTeam/CreateTeam';

export default function Body() {
    return (
        <main>
            <BrowserRouter>
                <div>
                    <Switch>
                        <Route path='/' component={Login} name="Login" />
                        <Route path='/register' component={Register} name="Register" />
                        <Route path='/landingpage' component={Landingpage} name="Landingpage" />  
                        <Route path='/createTournament' component={CreateTournament} name="CreateTournament" />
                        <Route path='/createTeam' component={CreateTeam} name="CreateTeam" />
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