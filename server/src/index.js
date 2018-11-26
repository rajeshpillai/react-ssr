// ROOT file of server

import express from 'express';
import render from './views/render';

import Home from '../src/client/components/home';
import Task from '../src/client/components/task';
import taskDB from '../src/data/tasks.json';

const app = express();


app.use(express.static('public'));

// Make our db accessible everywhere
app.use(function (req, res, next) {
    req.db = taskDB;
    next();
});

app.get('/', (req, res) => {
    res.send(render(Home, { taskDB }));
});

app.get('/todos/:id', (req, res) => {
    let task = taskDB.find((t) => t.id == req.params.id);
    console.log(task);
    res.send(render(Home, { currentTask: task }));
});


app.listen(3000, () => {
    console.log('Listening on port 3000....');
});