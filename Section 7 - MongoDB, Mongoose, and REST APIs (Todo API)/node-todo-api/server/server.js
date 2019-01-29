let express = require('express');
let bodyParser = require('body-parser');

let {mongoose} = require('./db/mongoose');
let {Todo} = require('./models/todo');
let {User} = require('./models/user');

var app = express();

app.use(bodyParser.json())

app.post('/todos', (req, res) => {
    // console.log(req.body);
    let todo = new Todo({
        text: req.body.text
    })

    todo.save().then((doc) => {
        res.send(doc)
    }, (err) => {
        res.status(400).send(err);
    })
});

app.listen(3001, () => {
    console.log('Started on port 3001')
})

module.exports = {app};