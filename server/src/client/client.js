// Client side startup file
import React from 'react';
import ReactDOM from 'react-dom';
import Home from './components/home';

ReactDOM.hydrate(<Home />, document.querySelector("#root"));
