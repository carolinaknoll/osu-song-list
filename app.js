const express = require('express');
const vash = require('vash');
const app = express();

var sass = require('node-sass');

app.set('view engine', 'vash');
app.set('port', process.env.PORT || 3000);

app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
  res.render('index.vash');
  res.render(`${req.params.path}.scss`)
})

app.get('/:path', function(req, res) {
  res.render(`${req.params.path}.vash`);
})

app.listen(3000, function () {
  console.log('Listening on port 3000.');
  console.log('Open http://localhost:3000/ to start! :-)');
})