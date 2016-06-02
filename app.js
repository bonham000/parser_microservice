
var express   = require('express');
var accepts   = require('accepts');
var fs        = require('fs');
var http      = require('http');
var useragent = require('express-useragent');
var port      = process.env.PORT;
var app       = express();

// Initialize return object:
var reqObj = {};

app.get('/client/js/index.js', function(req, res) {
    res.sendFile(__dirname + '/client/js/index.js');
})

app.get('/client/css/style.css', function(req, res) {
    res.sendFile(__dirname + '/client/css/style.css');
});

app.get('/whoami', function(req, res) {

    var ip   = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    var lang = accepts(req).languages();
    var ops  = useragent.parse(req.headers['user-agent']);
    
    reqObj["ip address"]        = ip;
    reqObj["default langauge"]  = lang[0];
    reqObj["brower"]            = ops.browser;
    reqObj["version"]           = ops.version;
    reqObj["os"]                = ops.os;
    reqObj["platform"]          = ops.platform;
    
    res.json(reqObj);
    
});

app.get('*', function(res, res) {
    
    res.sendFile(__dirname + '/client/index.html');
    
})

app.listen(port);
console.log("App is listening...");