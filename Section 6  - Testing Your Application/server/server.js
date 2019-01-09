const express = require('express');

var app = express();

app.get('/', (req,res) => {
    res.status(404).send({
        error: 'Page not found.',
        name: 'Todo App v1.0'
    });
});

app.get('/users', (req,res) => {
    res.send([
        {name: 'Nathan', age: 10},
        {name: 'B', age: 11},
        {name: 'C', age: 12},
    ]);
})


app.listen(3001);
module.exports.app = app;