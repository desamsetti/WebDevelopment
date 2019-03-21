var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment");
var data = [
    {
        name : "Yosemite",
        image:"https://images.unsplash.com/photo-1498429089284-41f8cf3ffd39?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        description:"Beautiful Yosemite"
    },
    {
        name : "New York",
        image:"https://images.unsplash.com/photo-1534430480872-3498386e7856?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        description:"Beautiful New York"
    },
    {
        name : "Yosemite",
        image:"https://images.unsplash.com/photo-1493679756707-21f12da1a0c2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        description:"Beautiful Hollywood"
    },
]

function seedDB(){
    //Remove all campgrounds
    Campground.remove({},function(err){
    if(err){
        console.log(err);
    }
    console.log("remove campgrounds!");
    data.forEach(function(seed){
    Campground.create(seed,function(err,campground){
    if(err){
        console.log(err);
    }else{
        console.log("Added a Campground");
        Comment.create(
            {
                text:"This place is great, but I wish there was Internet",
                author:"Hrithik"
            },function(err,comment){
                if(err){
                    console.log(err);
                }else{
                    campground.comments.push(comment);
                    campground.save();
                    console.log("Created new comment");
                }
                
            });
    }
    })
})
});
//Add a few comments
}



module.exports = seedDB;

