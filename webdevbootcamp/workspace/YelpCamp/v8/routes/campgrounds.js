var express = require("express");
var router = express.Router();
var Campground = require("../models/campground");


//INDEX - show all campgrounds
//app.get("/campgrounds",function(req,res){
//router.get("/campgrounds",function(req,res){
router.get("/",function(req,res){
    console.log(req.user);
    //Get all campgrounds from DB
    Campground.find({},function(err,allCampgrounds){
        if(err){
            console.log(err);
        }
        else{
          res.render("campgrounds/index",{campgrounds:allCampgrounds});
        }
    });
    
        
        //res.render("campgrounds",{campgrounds:campgrounds});
});




//CREATE - add new campground to DB
//app.post("/campgrounds", function(req,res){
//router.post("/campgrounds", function(req,res){
router.post("/",isLoggedIn, function(req,res){
    var name = req.body.name;
    var image = req.body.image;
    var desc = req.body.description;
    
    var author = {
        id:req.user._id,
        username:req.user.username
    }
    
    
    var newCampground = {name: name, image: image, description: desc, author:author}
    
    
    //campgrounds.push(newCampground);
    //Create a new campground and save to DB
    Campground.create(newCampground,function(err,newlyCreated){
        if(err){
            console.log(err);
        }else{
            res.redirect("/campgrounds");
        }
    });
    
    //res.redirect("/campgrounds");
    //res.send("YOU HIT THE POST ROUTE");
    // get data from form and add to campgrounds array
    //redirect back to campgrounds pages
});



//NEW - show form to create new campground
//app.get("/campgrounds/new", function(req,res){
//router.get("/campgrounds/new", function(req,res){
router.get("/new",isLoggedIn, function(req,res){
   res.render("campgrounds/new");
});

// SHOW - shows more info about one campground
//app.get("/campgrounds/:id",function(req, res){
//router.get("/campgrounds/:id",function(req, res){
router.get("/:id",function(req, res){
    //find the campground with provided ID
    Campground.findById(req.params.id).populate("comments").exec(function(err,foundCampground){
        if(err){
            console.log(err);
        }else{
            //render show template with that campground
            console.log(foundCampground);
            res.render("campgrounds/show",{campground:foundCampground});
        }
    });
    //render show template with that campground
});


function isLoggedIn(req,res,next){
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect("/login");
}





module.exports = router;