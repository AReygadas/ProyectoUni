
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');

// Intializations
const app = express();

// Settings
app.set('port', process.env.PORT || 7000);

// Middlewares
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// Global variables


// Routes


// Starting
app.listen(app.get('port'), () => {
  console.log('Server is in port', app.get('port'));
});
