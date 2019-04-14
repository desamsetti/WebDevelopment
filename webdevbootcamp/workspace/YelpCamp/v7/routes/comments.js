var express = require("express");
var router = express.Router({mergeParams:true});
var Campground = require("../models/campground");
var Comment = require("../models/comment");



//======================
// COMMENTS ROUTES
//======================

//Comments New
//router.get("/campgrounds/:id/comments/new",isLoggedIn,function(req,res){
router.get("/new",isLoggedIn,function(req,res){
    //Find campground by id
    console.log(req.params.id);
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
//Comments Create
//router.post("/campgrounds/:id/comments",isLoggedIn,function(req,res){
router.post("/",isLoggedIn,function(req,res){
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

//Middleware
function isLoggedIn(req,res,next){
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect("/login");
}


module.exports = router;