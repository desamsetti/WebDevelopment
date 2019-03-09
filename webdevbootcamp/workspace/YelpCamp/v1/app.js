var express = require("express");
var app = express();
var bodyParser = require("body-parser");


app.use(bodyParser.urlencoded({extended:true}));

app.set("view engine","ejs");

var campgrounds = [
        {name:"Salmon Creek",image:"https://pixabay.com/get/ef3cb00b2af01c22d2524518b7444795ea76e5d004b0144497f0c879a3ecb1_340.jpg"},
        {name:"Granite Hill",image:"https://pixabay.com/get/e83cb2092ef7033ed1584d05fb1d4e97e07ee3d21cac104490f2c171a0efb1b1_340.jpg"},
        {name:"Mountain Goat's Rest",image:"https://pixabay.com/get/e837b1072af4003ed1584d05fb1d4e97e07ee3d21cac104490f2c170a7e9b4bc_340.jpg"},
        {name:"Salmon Creek",image:"https://pixabay.com/get/ef3cb00b2af01c22d2524518b7444795ea76e5d004b0144497f0c879a3ecb1_340.jpg"},
        {name:"Granite Hill",image:"https://pixabay.com/get/e83cb2092ef7033ed1584d05fb1d4e97e07ee3d21cac104490f2c171a0efb1b1_340.jpg"},
        {name:"Salmon Creek",image:"https://pixabay.com/get/ef3cb00b2af01c22d2524518b7444795ea76e5d004b0144497f0c879a3ecb1_340.jpg"},
        {name:"Granite Hill",image:"https://pixabay.com/get/e83cb2092ef7033ed1584d05fb1d4e97e07ee3d21cac104490f2c171a0efb1b1_340.jpg"},
        {name:"Salmon Creek",image:"https://pixabay.com/get/ef3cb00b2af01c22d2524518b7444795ea76e5d004b0144497f0c879a3ecb1_340.jpg"},
        {name:"Granite Hill",image:"https://pixabay.com/get/e83cb2092ef7033ed1584d05fb1d4e97e07ee3d21cac104490f2c171a0efb1b1_340.jpg"},
        {name:"Salmon Creek",image:"https://pixabay.com/get/ef3cb00b2af01c22d2524518b7444795ea76e5d004b0144497f0c879a3ecb1_340.jpg"},
        {name:"Granite Hill",image:"https://pixabay.com/get/e83cb2092ef7033ed1584d05fb1d4e97e07ee3d21cac104490f2c171a0efb1b1_340.jpg"},
        ]

app.get("/",function(req,res){
    //res.send("This will be the Landing Page soon!");
    res.render("landing");
});

app.get("/campgrounds",function(req,res){
    
        
        res.render("campgrounds",{campgrounds:campgrounds});
});

app.post("/campgrounds", function(req,res){
    
    var name = req.body.name;
    var image = req.body.image;
    var newCampground = {name: name, image: image};
    campgrounds.push(newCampground);
    
    res.redirect("/campgrounds");
    //res.send("YOU HIT THE POST ROUTE");
    // get data from form and add to campgrounds array
    //redirect back to campgrounds pages
})

app.get("/campgrounds/new", function(req,res){
   res.render("new.ejs");
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("YelpCamp Server Has Started!");
})