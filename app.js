const express = require('express');
const app = express();

const vash = require('vash');
const sass = require('node-sass');

app.set('view engine', 'vash');
app.set('port', process.env.PORT || 3000);

app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
  res.render('index.vash');
})

app.get('/:path', function(req, res) {
  res.render(`${req.params.path}.vash`);
})

app.listen(3000, function () {
  console.log('Listening on port 3000 (3001 if running with run-all)');
  console.log('Open http://localhost:3000/ or http://localhost:3001/ to start! :-)');
})