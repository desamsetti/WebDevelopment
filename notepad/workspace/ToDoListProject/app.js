var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var mongoose = require("mongoose");
var expressSanitizer = require("express-sanitizer");

mongoose.connect("mongodb://localhost:27017/todoList_app",{useNewUrlParser:true});

app.set("view engine","ejs");

app.use(bodyParser.urlencoded({extended:true}));
app.use(expressSanitizer());
app.use(methodOverride("_method"));


//Creating a New Schema
var toDoSchema = mongoose.Schema({
  toDoContent:String  
});

//Compiling a Model from the Schema
var ToDo = mongoose.model("toDo",toDoSchema);


/*ToDo.create({
    toDoContent:"Learn Web Development"
},function(err,newToDoCreated){
    if(err){
        console.log(err);
    }else{
        console.log("Added new Todo to the Database");
        console.log(newToDoCreated);
    }
});*/


app.get("/",function(req,res){
    //res.send("Welcome to TODOLIST APP");
    res.render("landing");
});

//To Show all the TODOS
app.get("/showAllToDos",function(req,res){
    ToDo.find({},function(err,allToDosFound){
        if(err){
            console.log(err);
        }
        else{
            res.render("index",{allToDosFound:allToDosFound});
        }
    })
});

app.post("/added",function(req,res){
    var toDoContentFound = req.body.toDoInput;
    
    var newToDoObject = {toDoContent: toDoContentFound};
    
    ToDo.create(newToDoObject, function(err,newlyCreated){
        if(err){
            console.log(err);
        }else{
            console.log("A New ToDo has been added");
            console.log(newlyCreated);
            res.redirect("/showAllToDos");
        }
    })
});



//EDIT ROUTE
app.get("/showAllToDos/:id/edit",function(req,res){
    ToDo.findById(req.params.id,function(err,foundToDo){
        if(err){
            res.redirect("/showAllToDos");
        }else{
            res.render("edit",{foundToDoToEdit:foundToDo});
        }
    });
});

//UPDATE ROUTE
app.put("/showAllToDos/:id",function(req,res){
    ToDo.findByIdAndUpdate(req.params.id,req.body.foundToDoToEdit,function(err,foundToDo){
        if(err){
            console.log("UPDATE ERRORS HERE");
            res.redirect("/showAllToDos");
        }
        else{
            console.log(foundToDo.toDoContent);
            console.log("Updated@!@$!@#!@#!@")
            res.redirect("/showAllToDos");
        }
    })
})


//DELETE ROUTE
app.delete("/showAllToDos/:id",function(req,res){
    ToDo.findByIdAndDelete(req.params.id,function(err){
        if(err){
            res.redirect("/showAllToDos");
        }
        else{
            res.redirect("/showAllToDos");
        }
    })
})


app.listen(process.env.PORT,process.env.IP,function(req,res){
    console.log("TodoList Server has started");
});