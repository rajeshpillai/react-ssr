// ROOT file of server

const express = require('express');
const React = require('react');
const app = express();
const renderToString = require('react-dom/server').renderToString;
const Home = require('./client/components/home').default;

app.get('/', (req, res) => {
    const content = renderToString(<Home />);
    res.send(content);
});

app.listen(3000, () => {
    console.log('Listening on port 3000...');
});