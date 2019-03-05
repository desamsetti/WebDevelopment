var express = require("express");
var app = express();

app.get("/",function(req,res){
    console.log("Called the '/' route");
    res.send("Hi there, welcome to my assignment!");
})

app.get("/speak/:var1",function(req,res){
    var val = req.params.var1;
    if(val=="pig")
    {
        res.send("The "+val+" says 'Oink'");
    }
    else if(val=="cow")
    {
        res.send("The "+val+" says 'Moo'");
    }
    else if(val=="dog")
    {
        res.send("The "+val+" says 'Woof Woof!");
    }
})




app.get("/repeat/:word/:number",function(req,res){
    var wordVal = req.params.word;
    var numberVal =  req.params.number;
    var newVal = "";
    for(var i=0;i<numberVal;i++)
    {
        newVal += wordVal+" ";
    }
    res.send(newVal);
})


app.get("*",function(req,res){
    res.send("This is a different route");
})








app.listen(process.env.PORT, process.env.IP,function(){
    console.log("Server has started!!!!")
});
