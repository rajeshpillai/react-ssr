// Client side startup file
import React from 'react';
import ReactDOM from 'react-dom';
import Home from './components/home';

ReactDOM.hydrate(<Home
    currentTask={window.__PRELOADED_STATE__
        ? window.__PRELOADED_STATE__.currentTask : null} />,
    document.querySelector("#root"));
