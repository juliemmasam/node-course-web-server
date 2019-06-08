const express = require('express');
const hbs = require('hbs');

var app = express();


// Some partials
hbs.registerPartials(__dirname + '/views/partials');

// Setting up the value related configurations
app.set('view engine', 'hbs');

// the templating engine
app.use(express.static(__dirname + '/public'));

// register some function helpers
hbs.registerHelper('getCurrentYear', () => {
  return new Date().getFullYear();
});

hbs.registerHelper('screamIt', (text) => {
  return text.toUpperCase();
});

// Setting up the app route handlers
// the parameters are the url and the function to run... Arrow functions
// employed here
app.get('/', (req, res) => {
  console.log(req);
  // res.send('hello express');
  res.send({
    name: "Emmanuel Julius Samson",
    age: "22 yrs",
    course: "Telecoms Eng"
  });
});

app.get('/about', (req, res) => {
  res.render('about.hbs', {
    pageTitle: "About Page",
  });
});

app.get('/home', (req, res) => {
  res.render('home.hbs', {
    pageTitle: "Home Page",
    message: "Hey we here on the home page... some things here"
  });
});

app.get('/bad', (req, res) => {
  // var errorMessage = "Error! Bad Request";
  // res.send(errorMessage);
  res.send({
    errorMessage: "Error handling the request"
  });
});


// start the server here
app.listen(2345);
