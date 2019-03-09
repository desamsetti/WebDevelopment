var express = require("express");
var app = express();
var bodyParser = require("body-parser");


app.use(bodyParser.urlencoded({extended:true}));

app.set("view engine","ejs");

var campgrounds = [
        {name:"Salmon Creek",image:"https://www.photosforclass.com/download/pixabay-839807?webUrl=https%3A%2F%2Fpixabay.com%2Fget%2Fe136b80728f31c22d2524518b7444795ea76e5d004b0144497f0c97aafedbd_960.jpg&user=Free-Photos"},
        {name:"Granite Hill",image:"https://www.photosforclass.com/download/pixabay-1845719?webUrl=https%3A%2F%2Fpixabay.com%2Fget%2Fe83db50a2ff5083ed1584d05fb1d4e97e07ee3d21cac104490f2c171a4e5b5b0_960.jpg&user=Pexels"},
        {name:"Mountain Goat's Rest",image:"https://www.photosforclass.com/download/pixabay-158463?webUrl=https%3A%2F%2Fpixabay.com%2Fget%2Fe830b90b2ef71c22d2524518b7444795ea76e5d004b0144497f0c97aafedbd_960.png&user=OpenClipart-Vectors"}
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