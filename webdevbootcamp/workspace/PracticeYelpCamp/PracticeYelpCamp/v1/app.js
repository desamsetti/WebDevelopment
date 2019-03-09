var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended:true}));

app.set("view engine","ejs");

var campgrounds = [
    {name : "Hrithik Roshan", image: "http://staticpopopics.popopics.com/uploads/display/Hrithik-Roshan-HD-images-12354.jpg"},
    {name : "Harshith Desamsetti", image:"https://harshithdesamsetti.com/img/HarshithNewImage.jpg"},
    {name : "Shah Rukh Khan", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcvD7zo96lftz_GBpczcRVWj-r45ZmEdSLtTLBfzJbcxRyxt8bvw"}
    ]

app.get("/",function(req,res){
    res.render("landing");
})


app.get("/campgrounds",function(req,res){
    res.render("campgrounds",{campgrounds: campgrounds});
})


app.post("/campgrounds",function(req,res){
    var name = req.body.name;
    var image = req.body.image;
    var newCampground = {name: name, image: image};
    campgrounds.push(newCampground);
    
    res.redirect("/campgrounds");
    //res.send("YOU HIT THE POST ROUTE");
})


app.get("/campgrounds/new",function(req,res){
    res.render("new");
})





app.listen(process.env.PORT,process.env.IP,function(req,res){
    console.log("Practice YelpCamp Server Has Started");
});