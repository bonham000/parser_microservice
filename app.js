
var express   = require('express');
var accepts   = require('accepts');
var http      = require('http');
var useragent = require('express-useragent');
var port      = process.env.PORT;
var app       = express();

// Initialize return object:
var reqObj = {};

app.get('/', function(req, res) {

    var ip  = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
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

app.listen(port);
console.log("App is listening...");