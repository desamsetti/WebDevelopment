var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var request = require("request");
var jsdom = require("jsdom");
const {JSDOM} = jsdom;
const {window} = new JSDOM();
const {document} = (new JSDOM('')).window;
global.document = document;
var $ = require("jquery")(window);


var long;
var lat;

var icon;


let coordsVal =[];
app.use(bodyParser.urlencoded({extended:true}));


app.get('/',function(req,res){
    res.render("index");
});


app.post('/',function(req,res){
    let city = req.body.city;
    
    //const proxy = `https://cors-anywhere.herokuapp.com/`;
            
    //const api = `${proxy}https://api.darksky.net/forecast/2dbd391cf660f5b857a1d633fefd48f2/17.385044,78.486671`;
    
    
    
    const googleMapsApi = `https://maps.googleapis.com/maps/api/geocode/json?address=${city},&key=AIzaSyA21cDgezBnWGLtgcbB5w_fGrs7_hI43CA`;
    
    
    request(googleMapsApi,function(err,response){
        if(err){
            res.send("Error");
        }else{
            let coordinatesValue = JSON.parse(response.body);
            coordsVal = JSON.parse(response.body);
            //console.log(coordsVal);
            lat = coordsVal.results[0].geometry.location.lat;
            long = coordsVal.results[0].geometry.location.lng;
            //res.send(coordinatesValue);
            
            const api = `https://api.darksky.net/forecast/dcd85fbe79723154a9511f08ea694367/${lat},${long}`;
    
            request(api, function(err,response){
            if(err){
                res.render("index",{weather:null, error:"Error"});
            }else{
                let weather = JSON.parse(response.body);
                let weatherTemp = weather.currently.temperature;
                let timezone = weather.timezone;
                let summary = weather.currently.summary;
                icon = weather.currently.icon;
                console.log(summary);
                
                
                res.render("show",{weather:weatherTemp,icon:icon,timezone:timezone,city:city,summary:summary});
            }
        });
        }
    });
    
    
    
    });

    


app.set("view engine","ejs");

app.use(express.static("public"));

app.use(bodyParser.urlencoded({extended:true}));

app.get("/",function(req,res){
    res.render("index");
});


function setIcons(icon,iconID){
        const skycons = new Skycons({color:"white"});
        const currentIcon = icon.replace(/-/g, "_").toUpperCase();
        skycons.play();
        return skycons.set(iconID,Skycons[currentIcon]);
    }



app.listen(process.env.PORT,process.env.IP,function(err){
    if(err){
        console.log(err);
    }else{
        console.log("Started the Server");
    }
    
});