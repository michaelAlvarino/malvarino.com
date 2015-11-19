var express = require('express');
var path = require('path');

var app = express();

app.use(express.static('./dist'));

app.get('*', function (request, response){
  response.sendFile(path.resolve(__dirname, 'dist', 'index.html'))
})

var server = app.listen(3000, function() {
  var host = "localhost";
  var port = 3000;

  console.log('App listening at http://%s:%s', host, port);
});