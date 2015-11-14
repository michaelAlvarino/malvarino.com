var express = require('express');

var app = express();

app.use(express.static('./dist'));

var server = app.listen(3000, function() {
  var host = "localhost";
  var port = 8080;

  console.log('App listening at http://%s:%s', host, port);
});
//