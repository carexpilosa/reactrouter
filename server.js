
var express = require('express');
var app = express();
var serveStatic = require('serve-static');

//var serve = serveStatic('./public_html', {'index': ['index.html', 'index.htm']});


app.get('/natur', function (req, res) {
  res.redirect('http://naturexkursionen.net');
});

app.get('/world', function (req, res) {
  res.send('Hello World!');
});

// viewed at http://localhost:8080
app.get('/js/build/index.js', function(req, res) {
  res.sendFile(__dirname + "/public_html/js/build/index.js");
});

app.get('/*', function(req, res) {
  res.sendFile(__dirname + "/public_html/index.html");
});

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});




