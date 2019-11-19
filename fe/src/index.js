import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import './index.css';
// import Inventory from './Components/Inventory/Inventory';
// import Login from './Components/Login/Login';
import Register from './Components/Register/Register';

export default function Body() {
    return (
        <main>
            <Register />
        </main>
    );
}

serviceWorker.unregister();

// ========================================

ReactDOM.render(
    <Body />,
    document.getElementById('root')
);