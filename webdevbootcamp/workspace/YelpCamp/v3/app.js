var express    = require("express");
var app        = express();
var bodyParser = require("body-parser");
var mongoose   = require("mongoose");
var Campground = require("./models/campground");
var seedDB = require("./seeds");


//mongoose.connect("mongodb://localhost/yelp_camp",{ useNewUrlParser: true });
mongoose.connect("mongodb://localhost:27017/yelp_camp", {useNewUrlParser: true});
app.use(bodyParser.urlencoded({extended:true}));


app.set("view engine","ejs");

// SCHEMA SETUP

seedDB();


app.get("/",function(req,res){
    //res.send("This will be the Landing Page soon!");
    res.render("landing");
});

//INDEX - show all campgrounds
app.get("/campgrounds",function(req,res){
    
    //Get all campgrounds from DB
    Campground.find({},function(err,allCampgrounds){
        if(err){
            console.log(err);
        }
        else{
          res.render("index",{campgrounds:allCampgrounds});
        }
    });
    
        
        //res.render("campgrounds",{campgrounds:campgrounds});
});




//CREATE - add new campground to DB
app.post("/campgrounds", function(req,res){
    var name = req.body.name;
    var image = req.body.image;
    var desc = req.body.description;
    var newCampground = {name: name, image: image, description: desc};
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
})






//NEW - show form to create new campground
app.get("/campgrounds/new", function(req,res){
   res.render("new.ejs");
});

// SHOW - shows more info about one campground
app.get("/campgrounds/:id",function(req, res){
    //find the campground with provided ID
    Campground.findById(req.params.id).populate("comments").exec(function(err,foundCampground){
        if(err){
            console.log(err);
        }else{
            //render show template with that campground
            console.log(foundCampground);
            res.render("show",{campground:foundCampground});
        }
    });
    //render show template with that campground
})
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("YelpCamp Server Has Started!");
})