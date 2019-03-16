var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/blog_demo_2",{useNewUrlParser:true});

// POST - title, content
var postSchema = new mongoose.Schema({
    title:String,
    content:String
});

var Post = mongoose.model("Post",postSchema);

// USER - email, name, posts
var userSchema = new mongoose.Schema({
    name:String,
    email:String,
    posts:[
        {
            type : mongoose.Schema.Types.ObjectId,
            ref : "Post"
        }]
})

var User = mongoose.model("User",userSchema);



/*User.create({
    name:"Hrithik Roshan",
    email:"hrithik@gmail.com"
})*/


Post.create({
    title:"How to act in movies pt.2",
    content:"Kaho Naa Pyaar Hai"
},function(err,post){
    User.findOne({email:"hrithik@gmail.com",function(err,foundUser){
        if(err){
            
        }else{
            foundUser.save(function(err,data){
                if(err){
                    console.log(err);
                }else{
                    console.log(data);
                }
            })
        }
    }})
})

/*
User.findOne({email:"hrithik@gmail.com"}).populate("posts").exec(function(err,user){
    if(err){
        console.log(err);
    }else{
        console.log(user);
    }
})*/