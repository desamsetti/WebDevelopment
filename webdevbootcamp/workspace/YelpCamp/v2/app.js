var express    = require("express");
var app        = express();
var bodyParser = require("body-parser");
var mongoose   = require("mongoose");


//mongoose.connect("mongodb://localhost/yelp_camp",{ useNewUrlParser: true });
mongoose.connect("mongodb://localhost:27017/yelp_camp", {useNewUrlParser: true});
app.use(bodyParser.urlencoded({extended:true}));


app.set("view engine","ejs");

// SCHEMA SETUP
var campgroundSchema = new mongoose.Schema({
    name:String,
    image:String,
    description:String
});

var Campground = mongoose.model("Campground",campgroundSchema);


/*Campground.create(
    {
        name:"Granite Hill",
        image:"https://farm5.staticflickr.com/4655/39719949852_92487ba190.jpg",
        description: "This is a huge granite hill, no bathroom. No water. Beautiful granite!"
    }
    ,function(err,campground){
        if(err){
            console.log(err);
        }
        else{
            console.log("NEWLY CREATED CAMPGROUND!");
            console.log(campground);
        }
    });
*/

/*var campgrounds = [
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
        ]*/

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
    Campground.findById(req.params.id,function(err,foundCampground){
        if(err){
            console.log(err);
        }else{
            //render show template with that campground
            console.log(foundCampground.name);
            res.render("show",{campground:foundCampground});
        }
    });
    //render show template with that campground
})
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("YelpCamp Server Has Started!");
})