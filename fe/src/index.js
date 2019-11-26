import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import './index.css';
// import Inventory from './Components/Inventory/Inventory';
// import Login from './Components/Login/Login';
// import Register from './Components/Register/Register';
// import CreateTournament from './Components/CreateTournament/CreateTournament';
import CreateTeam from './Components/CreateTeam/CreateTeam';

export default function Body() {
    return (
        <main>
            <CreateTeam />
        </main>
    );
}

serviceWorker.unregister();

// ========================================

ReactDOM.render(
    <Body />,
    document.getElementById('root')
);