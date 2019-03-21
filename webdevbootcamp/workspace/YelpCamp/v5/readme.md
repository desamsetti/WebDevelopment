#YelpCamp

* Add Landing Page
* Add Campgrounds Page that lists all campgrounds


Each Campground has:
* Name
* Image
* 
[
{"name":"Salmon Creek", image:"http://www.image.com"}
{"name":"Salmon Creek", image:"http://www.image.com"}
{"name":"Salmon Creek", image:"http://www.image.com"}
{"name":"Salmon Creek", image:"http://www.image.com"}
]

#Layout and Basic Styling
* Createour header and footer partials
* Add in Bootstrap


#Style the campgrounds page
* Add a better header/title
* Make campgrounds display in a grid

#Style the Navbar and Form
* Add a navbar to all templates
* Style the new campground form


#Databases

##Intro to Databases
* What is a Database?
    * A collection of information/data
    * Has a interface
* SQL(relational) vs. NoSQL(non-relational)


#Intro to MongoDB
* What is MongoDB?
* Why are we using it?
* Let's Install It!

#Add Mongoose
* Install and configure Mongoose
* Setup camoground model
* Use campground model inside of our routes!

#Show Page
* Review the RESTful routes we've seen so far
* Add a description to our campground model
* Show db.collection.drop()
* Add a show route/template


RESTFUL ROUTES
----------------------------------------------------
THERE ARE 7

name      url        verb   desc.
----------------------------------------------------
INDEX    /dogs        GET    Display a list of all dog
NEW      /dogs/new    GET    Displays form to make a new dog
CREATE   /dogs        POST   Add new dog to DB
SHOW     /dogs/:id    GET    Shows info about one dog


INDEX   /campgrounds
NEW     /campgrounds/new
CREATE  /campgrounds
SHOW    /campgrounds/:id



NEW     /campgrounds/:id/comments/new  GET
CREATE  /campgrounds/:id/comments      POST

#Refactor Mongoose Code
* Create a models directory
* Use module.exports
* Require everything correctly!


#Add Seeds File
* Add a seeds.js file
* Run the seeds file every time the server starts

#Add the Comment model!
* Make our errors go away!
* Display comments on campground show page



#Comment New/Create
* Discuss nested routes
* Add the comment new and create routes
* Add the new comment form


#Style Show Page
* Add sidebar to show page
* Display comments nicely

