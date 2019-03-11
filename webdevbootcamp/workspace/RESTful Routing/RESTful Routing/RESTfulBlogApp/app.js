var bodyParser = require("body-parser"),
methodOverride = require("method-override"),
expressSanitizer = require("express-sanitizer"),
express = require("express"),
mongoose = require("mongoose"),
app = express();

//APP CONFIG
mongoose.connect("mongodb://localhost:27017/restful_blog_app",{useNewUrlParser:true});


app.set("view engine","ejs");

app.use(express.static("public"));


app.use(bodyParser.urlencoded({extended:true}));
app.use(expressSanitizer());
app.use(methodOverride("_method"));

//MONGOOSE/MODEL_CONFIG
var blogSchema = new mongoose.Schema({
    title:String,
    image:String,
    image:String,
    body:String,
    created: {
        type:Date, default:Date.now
    }
});

var Blog = mongoose.model("Blog",blogSchema);

/*Blog.create({
    title:"Test Blog",
    image:"https://images.unsplash.com/photo-1544188137-e51fa594e725?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80",
    body:"HELLO THIS IS A BLOG POST"
});*/

// RESTFUL ROUTES


/*app.get("/",function(req,res){
    res.render("new");
})*/


// INDEX ROUTE
app.get("/blogs",function(req,res){
    Blog.find({},function(err,blogs){
        if(err){
            console.log(err);
        }else{
            res.render("index",{blogs:blogs});
        }
    })
})




// NEW ROUTE
// CREATE ROUTE
app.get("/blogs/new",function(req,res){
    res.render("new");
})


// CREATE ROUTE
app.post("/blogs",function(req,res){
    //create blog
    req.body.blog.body = req.sanitize(req.body.blog.body);
    Blog.create(req.body.blog, function(err,newBlog){
        if(err){
            res.render("new");
        }else{
            //then, redirect to the index
            res.redirect("/blogs");
        }
    });
});


// SHOW ROUTE
app.get("/blogs/:id",function(req,res){
    Blog.findById(req.params.id,function(err, foundBlog){
        if(err){
            res.redirect("/blogs");
        }else{
            res.render("show", {blog:foundBlog});
        }
    });
});

// EDIT ROUTE
app.get("/blogs/:id/edit", function(req, res){
    Blog.findById(req.params.id, function(err, foundBlog){
        if(err){
            res.redirect("/blogs");
        } else {
            res.render("edit", {blog: foundBlog});
        }
    });
})


// UPDATE ROUTE
app.put("/blogs/:id",function(req,res){
    req.body.blog.body = req.sanitize(req.body.blog.body);
    Blog.findByIdAndUpdate(req.params.id, req.body.blog, function(err,updatedBlog){
        if(err){
            res.redirect("/blogs");
        }else{
            res.redirect("/blogs/"+req.params.id);
        }
    });
});


// DELETE ROUTE
app.delete("/blogs/:id",function(req,res){
    //destroy blog
    Blog.findByIdAndRemove(req.params.id,function(err){
        if(err){
            res.redirect("/blogs");
        }else{
            res.redirect("/blogs");
        }
    })
    //redirect somewhere
})
app.listen(process.env.PORT,process.env.IP,function(){
    console.log("SERVER IS RUNNING");
})
