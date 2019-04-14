var bodyParser = require("body-parser");
var Campground = require("./models/campground");
var mongoose   = require("mongoose");
var passport   = require("passport");
var LocalStrategy = require("passport-local");
var Comment    = require("./models/comment");
var User        = require("./models/user");
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



// PASSPORT CONFIGURATION
app.use(require("express-session")({
    secret: "Steve Jobs rocks",
    resave:false,
    saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


app.use(function(req,res,next){
    res.locals.currentUser = req.user;
    next();
})







app.get("/",function(req,res){
    //res.send("This will be the Landing Page soon!");
    res.render("landing");
});

//INDEX - show all campgrounds
app.get("/campgrounds",function(req,res){
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
app.get("/campgrounds/:id/comments/new",isLoggedIn,function(req,res){
    //Find campground by id
    Campground.findById(req.params.id,function(err,campgground){
        if(err){
            console.log(err);
        }else{
            res.render("comments/new",{campground:campgground});
        }
    })
    
})
// ==================
// COMMENTS ROUTES
// ==================

app.post("/campgrounds/:id/comments",isLoggedIn,function(req,res){
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


// =======================
// AUTH ROUTES
// =======================

// show register form
app.get("/register",function(req,res){
    res.render("register");
});


//handle sign up logic
//Here, first we are registering the user and then
//if the user is registered, then we are using
//passport.authenticate to redirect to /campgrounds
app.post("/register",function(req,res){
    var newUser = new User({username:req.body.username});
    User.register(newUser,req.body.password,function(err,user){
        if(err){
            console.log(err);
            return res.render("register");
        }
        passport.authenticate("local")(req,res,function(){
            res.redirect("/campgrounds");
        });
    })
});

// show login form
app.get("/login",function(req,res){
    res.render("login");
})

// handling login logic
//app.post("/login",middleware,callback)
//This is the same passport.authenticate we are using in 
// Register as well. There, we are registering the user first
// and if the user is registered then we are redirecting to
// /campgrounds. Here, we are directly using
// passport.authenticate to authenticate the user and redirect accordingly
app.post("/login",passport.authenticate("local",
{
    successRedirect:"/campgrounds",
    failureRedirect:"/login"
}), function(req,res){
})

// logic route
app.get("/logout", function(req,res){
   req.logout();
   res.redirect("/campgrounds");
});


function isLoggedIn(req,res,next){
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect("/login");
}



app.listen(process.env.PORT, process.env.IP, function(){
    console.log("YelpCamp Server Has Started!");
});