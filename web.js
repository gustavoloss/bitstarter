var fs = require("fs");
var thefile = "index.html";
var myBuffer = new Buffer(16);

myBuffer = fs.readFileSync(thefile, "utf-8");

//console.log(data);

var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
//  response.send('Hello World2!');
	response.send(myBuffer.toString("utf-8"));
});

var port = process.env.PORT || 80
app.listen(port, function() {
  console.log("Listening on " + port);
});
