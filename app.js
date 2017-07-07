const fs = require('fs');
const path = require('path');
const express = require('express');
const app = express();
const bodyParser = require("body-parser");

app.use('/static', express.static('static'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


app.get('/', function (req, res) {
    res.sendFile(__dirname + "/static/index.html");
})

// put routes here
app.get('/api/todos/', function (req, res) {

    console.log(req.body);
});

app.post('/api/todos/', function (req, res) {

    console.log(req.body);
});

app.get('/api/todos/:id', function(req, res) {

  // get a specific todo item.
});

app.put('/api/todos/:id', function(req, res) {
  //update a todo item. Returns the modified todo item.
});

app.patch('/api/todos/:id', function(req, res) {
  //partially update a todo item. Returns the modified todo item.
});

app.delete('/api/todos/:id', function(req, res) {
  //deletes a todo item. Returns the todo item that was deleted
})

app.listen(3000, function () {
    console.log('Express running on http://localhost:3000/.')
});
