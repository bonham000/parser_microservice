
var express = require('express');
var app = express();

var port = process.env.PORT;




app.get('/', function(req, res) {
    res.send("Server is working....");
});






app.listen(port);
console.log("App is listening");