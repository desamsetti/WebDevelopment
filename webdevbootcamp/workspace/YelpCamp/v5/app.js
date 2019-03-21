var bodyParser = require("body-parser");
var Campground = require("./models/campground");
var mongoose   = require("mongoose");
var Comment    = require("./models/comment");
var express    = require("express");
var seedDB     = require("./seeds");
var app        = express();



//mongoose.connect("mongodb://localhost/yelp_camp",{ useNewUrlParser: true });
mongoose.connect("mongodb://localhost:27017/yelp_camp", {useNewUrlParser: true});
app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine","ejs");
app.use(express.static(__dirname + "/public"));

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
          res.render("campgrounds/index",{campgrounds:allCampgrounds});
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
   res.render("campgrounds/new");
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
            res.render("campgrounds/show",{campground:foundCampground});
        }
    });
    //render show template with that campground
})







//======================
// COMMENTS ROUTES
//======================
app.get("/campgrounds/:id/comments/new",function(req,res){
    //Find campground by id
    Campground.findById(req.params.id,function(err,campgground){
        if(err){
            console.log(err);
        }else{
            res.render("comments/new",{campground:campgground});
        }
    })
    
})


app.post("/campgrounds/:id/comments",function(req,res){
    //Lookup campground using ID
    Campground.findById(req.params.id, function(err,campground){
       if(err){
           console.log(err);
           res.redirect("/campgrounds");
       }else{
           //Create new comment
           Comment.create(req.body.comment,function(err,comment){
               if(err){
                   console.log(err);
               }else{
                   campground.comments.push(comment);
                   campground.save();
                   res.redirect('/campgrounds/'+campground._id);
               }
           })
       }
    });
    
    //Connect new comment to campground
    //Redirect campground show page
});


app.listen(process.env.PORT, process.env.IP, function(){
    console.log("YelpCamp Server Has Started!");
})