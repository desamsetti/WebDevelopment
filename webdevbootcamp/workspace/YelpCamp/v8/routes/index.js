var express = require("express");
var router = express.Router();
var passport = require("passport");
var User = require("../models/user");


router.get("/",function(req,res){
    //res.send("This will be the Landing Page soon!");
    res.render("landing");
});



// =======================
// AUTH ROUTES
// =======================

// show register form
router.get("/register",function(req,res){
    res.render("register");
});


//handle sign up logic
//Here, first we are registering the user and then
//if the user is registered, then we are using
//passport.authenticate to redirect to /campgrounds
router.post("/register",function(req,res){
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
router.get("/login",function(req,res){
    res.render("login");
})

// handling login logic
//app.post("/login",middleware,callback)
//This is the same passport.authenticate we are using in 
// Register as well. There, we are registering the user first
// and if the user is registered then we are redirecting to
// /campgrounds. Here, we are directly using
// passport.authenticate to authenticate the user and redirect accordingly
router.post("/login",passport.authenticate("local",
{
    successRedirect:"/campgrounds",
    failureRedirect:"/login"
}), function(req,res){
})

// logout route
router.get("/logout", function(req,res){
   req.logout();
   res.redirect("/campgrounds");
});

//Middleware
function isLoggedIn(req,res,next){
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect("/login");
}


module.exports = router;