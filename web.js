var express = require('express');
var js = require('js');
var app = express.createServer(express.logger());
var buff = new Buffer(16);
app.get('/', function(request, response) {
  //response.send('Hello World2!');
    buff = fs.readFileSync("index.html");
    response.send(buff.toString());
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
