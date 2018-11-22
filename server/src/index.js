// ROOT file of server

// const express = require('express');
// const React = require('react');
// const renderToString = require('react-dom/server').renderToString;
// const Home = require('./client/components/home').default;

import express from 'express';
import home from './views/home';

const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send(home());
});

app.listen(3000, () => {
    console.log('Listening on port 3000....');
});