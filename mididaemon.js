var express = require('express');
var app = express();

var midi = require('midi');
var output = new midi.output();
output.openPort(0);

app.get('/noteon/:noteNum', function(req, res){
	output.sendMessage([0x80,req.param("noteNum"),1]);
	output.sendMessage([0x90,req.param("noteNum"),1]);
	res.send("Ok");
});

var server = app.listen(8081, function() {
console.log('Listening on port %d', server.address().port);
});


