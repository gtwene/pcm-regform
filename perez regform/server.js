// const { require } = require("yargs");

var express = require('express');
var app = express();

//app.use(express.static(__dirname + '/public'));

app.get('/', function(request , responds){
 responds.send();
});

app.post('/', function(request, responds){

});

app.listen(3000, function(){
    console.log("This site is running on port 3000");
});