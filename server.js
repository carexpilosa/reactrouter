
var express = require('express');
var app = express();

app.get('/schnurpel', function (req, res) {
  res.redirect('http://naturexkursionen.net');
});

app.get('/world', function (req, res) {
  res.send('Hello World!');
});

app.use(express.static('./public_html'));

app.get('*', function (req, res) {
  res.redirect('/');
})

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});




