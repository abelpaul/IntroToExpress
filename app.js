var express = require("express");
var app = express();

app.get("/",function(req,res){
    res.send("Hi There")
});

app.get("/bye",function(req,res){
    res.send("Adios")
});

app.get("/dog",function(req,res){
    res.send("MEOW")
});

app.get("*",function(req,res){
    res.send("not here homie")
})

app.listen(3000, function(){
    console.log("Hi from Port 3000");
})