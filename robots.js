const express= require('express');
const path= require('path');
const mustacheExpress = require('mustache-express');
const app=express();

// const data = require('data.js');

app.engine('mustache', mustacheExpress());
// app.set('views', './views')
app.set('view engine', 'mustache')
app.set('views', path.join(__dirname, 'views'));

app.get('/', function(req,res){
  res.send("Hello, World!");
});

let data = "hello";

app.get('/todo', function (req, res) {
  res.render("index", data);
})

app.get('/users/:id', function(req, res){
  let id = req.params.id;
  let user = data.users[id];
  res.render('user', user);
});

app.listen(3000, function () {
  console.log('Successfully started express application!');
})
