var express = require('express');
var port = process.env.PORT || 3000;
var app = express(),
path = require('path'),
publicDir = path.join(__dirname,'public');

var todos = [
    {
        id: 1,
        title: "Buy eggs",
        completed: false
    },
    {
        id: 2,
        title: "Eat eggs",
        completed: false
    }
];

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use(express.json());
app.use(express.static(publicDir)); // Serve the frontend from the root url


app.get('/api/todos', function (request, response) {
    return response.status(200).json(todos);
});

app.put('/api/todos', function (request, response) {
    console.log(request.body);
    var todo = {
        id: request.body.id,
        title: request.body.title,
        completed: request.body.completed
    };
    todos[todo.id - 1] = todo;
    
    return response.status(201).json(todos);
});



app.listen(port);
module.exports = app;
