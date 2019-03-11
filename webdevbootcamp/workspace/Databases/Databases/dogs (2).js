var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/dog_app",{ useNewUrlParser: true });


//Adding a new Dog to the DB
var dogSchema = new mongoose.Schema({
   name: String,
   age: Number,
   temperament: String
});

var Dog = mongoose.model("Dog",dogSchema);

/*
var tom = new Dog({
    name: "Hrithik",
    age:7,
    temperament:"Good"
})

tom.save(function(err,dog){
    if(err){
        console.log("Error");
    }
    else{
        console.log("WE JUST SAVED A DOG TO THE DB.");
        console.log(dog);
    }
});
*/


Dog.create({
   name: "Tom White",
   age:15,
   temperament:"Nice"
},function(err,dog){
    if(err){
        console.log(err);
    }
    else{
        console.log(dog);
    }
});


//Retrieve all Dogs from mthe DB and console log each one

Dog.find({},function(err, dogs){
    if(err){
        console.log("ERROR");
        console.log(err);
    }else{
        console.log("ALL THE DOGS........");
        console.log(dogs);
    }
});