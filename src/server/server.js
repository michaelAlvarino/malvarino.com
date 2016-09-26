var express = require('express');
var path = require('path');

var app = express();

app.use(express.static('../public'));

app.get('/download/resume', (request, response) =>{
	response.download('../public/assets' + '/resume.pdf');
})

app.get('*', function (request, response){
	response.sendFile(path.resolve('../public/index.html'));
})

// serve to web
var server = app.listen(80);
