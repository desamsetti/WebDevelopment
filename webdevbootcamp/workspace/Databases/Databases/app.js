var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");

//mongoose.connect("mongodb://localhost:27017/superheroes_app",{useNewUrlParser:true});
mongoose.connect(
  "mongodb+srv://m001-student:ABCabc012@cluster0-05rxc.mongodb.net/test?retryWrites=true",
  { useNewUrlParser: true }
);

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));

/*var superheroesArray = [{
    name:"Bruce Wayne",
    title:"Batman",
    country:"USA",
    mainpower:"Intelligence",
    image:"https://www.slashfilm.com/wp/wp-content/images/batman-animated-series-e1540567079198.jpg"
}]*/

//Connected to the heroes_app DB

//Creating a Schema
//A Superhero has a name, title, country, mainpower, image
var superHeroSchema = mongoose.Schema({
  name: String,
  title: String,
  country: String,
  mainpower: String,
  image: String
});

//Compiling a Model from the Schema
var SuperHero = mongoose.model("SuperHero", superHeroSchema);

/*SuperHero.create({
    name:"Clark Kent",
    title:"Superman",
    country:"USA",
    mainpower:"Strength",
    image:"https://fandomfactory.files.wordpress.com/2017/08/wb1153-classic-superman-dc-800x439.jpg?w=800"
},function(err,newSuperHero){
    if(err){
        console.log(err);
    }else{
        console.log("Added new superhero to the DB");
        console.log(newSuperHero);
        
    }
});*/

app.get("/", function(req, res) {
  res.render("landing");

  //res.send("Welcome to the Landing Page!");
});

//INDEX - Show all superheroes
app.get("/superheroes", function(req, res) {
  SuperHero.find({}, function(err, allSuperHeroesFound) {
    if (err) {
      console.log(err);
    } else {
      res.render("index", { allSuperheroes: allSuperHeroesFound });
    }
  });
});

//CREATE - add new Superhero to DB
app.post("/superheroes", function(req, res) {
  var name = req.body.name;
  var title = req.body.title;
  var country = req.body.country;
  var mainpower = req.body.mainpower;
  var image = req.body.image;

  var newSuperHeroObject = {
    name: name,
    title: title,
    country: country,
    mainpower: mainpower,
    image: image
  };

  SuperHero.create(newSuperHeroObject, function(err, newlyCreated) {
    if (err) {
      console.log(err);
    } else {
      console.log("A New SuperHero has been inserted into the DB");
      console.log(newlyCreated);
      res.redirect("/superheroes");
    }
  });
});

//NEW - Show form to creaate new Superhero
app.get("/superheroes/new", function(req, res) {
  res.render("new.ejs");
});

//SHOW - Shows more info about one Superhero
app.get("/superheroes/:id", function(req, res) {
  //find the campground with provided ID
  SuperHero.findById(req.params.id, function(err, foundSuperHero) {
    if (err) {
      console.log(err);
    } else {
      //render show template with that campground
      console.log(foundSuperHero.name);
      res.render("show", { superhero: foundSuperHero });
    }
  });
  //render show template with that campground
});
//console.log(process.env.PORT);
//app.listen(process.env.PORT,process.env.IP,function(req,res){
app.listen(3500, process.env.IP, function(req, res) {
  console.log("SuperHeroes server has started!");
});
