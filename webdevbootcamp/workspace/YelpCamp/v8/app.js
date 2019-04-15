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


//requiring routes
var commentRoutes       = require("./routes/comments");
var campgroundRoutes    = require("./routes/campgrounds");
var indexRoutes         = require("./routes/index");


//mongoose.connect("mongodb://localhost/yelp_camp",{ useNewUrlParser: true });
mongoose.connect("mongodb://localhost:27017/yelp_camp", {useNewUrlParser: true});
app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine","ejs");
app.use(express.static(__dirname + "/public"));

// SCHEMA SETUP


//seedDB();//seed the database



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



app.use("/",indexRoutes);
app.use("/campgrounds",campgroundRoutes);
app.use("/campgrounds/:id/comments",commentRoutes);




app.listen(process.env.PORT, process.env.IP, function(){
    console.log("YelpCamp Server Has Started!");
});