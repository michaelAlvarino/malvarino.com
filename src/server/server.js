var express = require('express');
var path = require('path');

var app = express();

app.use(express.static('./dist/public'));

app.get('/download/resume', (request, response) =>{
	response.download('./dist/public/assets' + '/resume.pdf');
})

app.get('*', function (request, response){
	response.sendFile(path.resolve('./dist/public/index.html'));
})

var server = app.listen(3000);