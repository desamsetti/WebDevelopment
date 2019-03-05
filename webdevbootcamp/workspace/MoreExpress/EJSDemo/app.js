var express = require("express");
var app = express();

app.use(express.static("public"));

app.set("view engine","ejs");


//var app = require("express")();

app.get("/",function(req,res){
    res.render("home");
})


app.get("/fallinlovewith/:thing",function(req,res){
    var thing = req.params.thing;
    //res.send("You fell in love with "+thing);
    res.render("love",{thingVar: thing})
})


app.get("/posts",function(req,res){
    var posts = [
        {title:"Post 1",author:"Susy"},
        {title:"My adorable pet",author:"Charlie"},
        {title:"Can you believe hrithik",author:"Colt"}
        ];
        
        res.render("posts",{posts:posts})
})


app.listen(process.env.PORT, process.env.IP,function(){
    console.log("Server is listening!!!!");
});