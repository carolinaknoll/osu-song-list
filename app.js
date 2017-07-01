const express = require('express');
const app = express();

const vash = require('vash');
const sass = require('node-sass');

const search = require('./routes/search');

app.set('view engine', 'vash');
app.set('port', process.env.PORT || 3000);

app.use(express.static(__dirname + '/public'));

app.get('/', search.index);

app.listen(3000, function () {
  console.log('Listening on port 3000 (3001 if running with run-all)');
  console.log('Open http://localhost:3000/ or http://localhost:3001/ to start! :-)');
})