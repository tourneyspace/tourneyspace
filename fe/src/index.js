import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import './index.css';
import Inventory from './Components/Inventory/Inventory';
import LandingPage from "./Components/Landingpage/LandingPage";

export default function Body() {
    return (
        <main>
            <LandingPage/>
        </main>
    );
}

serviceWorker.unregister();

// ========================================

ReactDOM.render(
    <Body/>,
    document.getElementById('root')
);