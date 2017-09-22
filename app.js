var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser());
var publicPath = path.resolve(__dirname, '');
app.use(express.static(publicPath));
var server = require('http').createServer(app);
var io = require('socket.io')(server);
var protobuf = require("protobufjs");
server.listen(8080);


io.on('connection', function (socket) {
    var small = generateData(10000);
    var medium = generateData(500000);
    //var large = generateData(1000000);
    //send(small,"json");
    send(medium,"json");
});

function send(data,type) {
    var encoded;
    if (type === "json") {
        encoded = JSON.stringify(data);
    }
    else if (type == "protobuff") {
        encoded = 
    }
    var date = new Date();
    var time = date.getTime();
    var obj = {};
    obj.data = encoded;
    obj.time = time;
    io.emit("message",obj);
}

function generateData(size) {
    var array = [];
    for (var i=0; i<size; i++) {
        var obj = {};
        obj.location = randomString(25);
        obj.motionStart = randomNumber();
        obj.motionEnd = randomNumber();
        obj.payload = randomString(20);
        obj.description = randomString(30);
        /*console.log(obj.location);
        console.log(obj.motionStart);
        console.log(obj.motionEnd);
        console.log(obj.payload);
        console.log(obj.description);*/
        array.push(obj);
    }
    return array;
}

function randomString(number) {
    var string = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    for (var i=0; i<number; i++) {
        string += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return string;
}

function randomNumber() {
    return Math.floor(1000000000 + Math.random() * 9000000000);
}

app.get('/', function(req, res){       
    res.sendFile('index.html',{root: publicPath});
});

/*app.get('/', function(req,res) {
    var small = generateData(10000);
    //var medium = generateData(500000);
    //var large = generateData(1000000);
    
    var smallJSONTime = new Date();
    var smallJSON = JSON.stringify(small);

    res.send(smallMessagePack);

    //var mediumJSONTime = new Date();
    //var mediumJSON = JSON.stringify(medium);

    //var largeJSONTime = new Date();
    //var largeJSON = JSON.stringify(large);
});*/