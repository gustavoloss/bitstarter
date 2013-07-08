var fs = require('fs');
var thefile = "index.html";
var myBuffer = new Buffer(16);

fs.readFileSync(thefile, function(err,data){
	if (err) throw err;
	data.write(myBuffer,"utf-8");
	//app.get('/',function(request, response){
	//	response.send(data);
	//});
});

var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
//  response.send('Hello World2!');
	response.send(myBuffer.toString("utf-8");
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
