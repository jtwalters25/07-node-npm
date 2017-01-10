'use strict';

// DONE: Initialize your project using NPM to create and populate a package.json file

//DONE: Require the Express package that you installed via NPM, and instantiate the app
const express = require('express')
// Remember to install express, and be sure that it's been added to your package.json as a dependency

const app = express();

const PORT = process.env.PORT || 3000;

// DONE: Include all of the static resources as an argument to app.use()
app.use(express.static('./public'));


app.get('/index.html', function(request, response){
  response.sendFile('index.html', {root: './public'});
})

// DONE: (STRETCH) Write a new route that will handle a request and send the new.html file back to the user
app.get('/new.html', function(request, response){
  response.sendFile('new.html', {root: './public'});
});

app.listen(PORT, function() {
  console.log('server is up and running on port 3000 and can be accessed at localhost:3000 in your browser');
})

  // DONE: Log to the console a message that lets you know which port your server has started on
