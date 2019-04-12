var express               = require("express"),
    mongoose              = require("mongoose"),
    passport              = require("passport"),
    bodyParser            = require("body-parser"),
    User                  = require("./models/user"),
    LocalStrategy         = require("passport-local"),
    passportLocalMongoose = require("passport-local-mongoose");

    
mongoose.connect("mongodb://localhost/auth_demo_app",{useNewUrlParser:true});


var app = express();
app.set('view engine','ejs');
app.use(bodyParser.urlencoded({extended:true}))
app.use(require("express-session")({
    secret: "Superman is the best",
    resave: false,
    saveUninitialized:false
}));

app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser())

//========================
// ROUTES
//========================

// Auth Routes


//show sign up form
app.get("/register",function(req,res){
    res.render("register");
})

//handling user sign up
app.post("/register",function(req,res){
    req.body.username
    req.body.password
    //Created the new user and only passing the username, we don't save the password to the database
    //We pass the password as a second argument to the User.register
    User.register(new User({username: req.body.username}),req.body.password, function(err,user){
        if(err){
            console.log(err);
            return res.render('register');
        }
        //We let the user login, where it will run the serialize method
        passport.authenticate("local")(req,res,function(){
            res.redirect("/secret");
        })
    });
})









app.get("/",function(req,res){
    res.render("home");
});

app.get("/secret",function(req,res){
    res.render("secret");
});




// LOGIN ROUTES
//render login form
app.get("/login",function(req,res){
    res.render("login");
});

//login logic
//middleware : code that runs before final route callback
app.post("/login",passport.authenticate("local",{
    successRedirect:"/secret",
    failureRedirect:"/login"
}),function(req,res){
    
});



app.get("/logout", function(req,res){
    //The user data in the session is getting destroyed
    //No transactions in the Database are required here
    req.logout();
    res.redirect("/")
});



app.listen(process.env.PORT,process.env.IP,function(){
    console.log("Server started");
});