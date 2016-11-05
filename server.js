var express = require('express');
var app = express();
var five = require("johnny-five");
var board = new five.Board();

// reply to request with "Hello World!"
app.get('/', function (req, res) {
  res.send('Hello IoT World!');
});

//start a server on port 80 and log its start to our console

board.on("ready", function () {

    var server = app.listen(4000, function () {

        var port = server.address().port;
        //console.log('MyPIoT is listening on port: ', port);

    });

});


