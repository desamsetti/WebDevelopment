//console.log("OUR EXPRESS APP WILL GO HERE");

var express = require("express");
var app = express();

// "/" => "Hi there!"



app.get("/bye",function(req,res)
{
    res.send("Goodbye!!");
})

app.get("/",function(req,res){
   res.send("Hi there!");
});
// "/bye" => "Goodbye!"


//"/dog" => "Woof!"

app.get("/dog",function(req,res){
    console.log("Someone made a request to /dog");
    res.send("Woof!");
})

app.get("/r/:subreddit",function(req,res){
    //console.log("WELCOME TO A SUBREDDIT");
    var subreddit = req.params.subreddit;
    
    res.send("WELCOME TO THE "+ subreddit.toUpperCase()+ " SUBREDDIT");
    
})

app.get("/r/:subredditName/comments/:id/:title",function(req,res){
    console.log(req.params);
    res.send("WELCOME TO THE COMMENTS PAGE!");
})


app.get("*",function(req,res){
    console.log("The route is different");
    res.send("The route is different");
})

// Tell Express to listen for request(start server)
app.listen(process.env.PORT, process.env.IP,function(){
    console.log("Server has started!!!!")
});


