require('dotenv').config()
let express = require('express');
let app = express();
var bodyParser = require("body-parser");

//start a working express server
/*app.get("/", function(req, res) {
    res.send('Hello Express');
  })
*/

// Serve an HTML File
 /* absolutePath = __dirname + "/views/index.html";
    app.get('/', function(req, res){
    res.sendFile(absolutePath)
  });*/

// Serve static assets
/*absolutePath = __dirname + "/public";
app.use("/public", express.static(absolutePath));*/

//Serve Json on a specific route
/*app.get("/json", function(req, res){
    res.json({"message": "Hello json"})
  })*/

// Use the .env file
/*app.get("/json", function(req, res){
    if(process.env['MESSAGE_STYLE'] === 'uppercase'){
        res.json({"message": "HELLO JSON"})
      }else
        res.json({"message": "Hello json"})
    })*/

// Implement a Root-Level Request Logger Middleware
/*app.use(function(req, res, next) {
    console.log(req.method + " "+req.path+" - "+req.ip);
    next();
  })*/

// Chain Middleware to Create a Time Server
/*app.get('/now', function(req, res, next) {
    req.time = new Date().toString()
    next();
  }, function(req, res){
    res.json({time: req.time})
  })*/

//Get Route Parameter Input from the Client
/*app.get("/:word/echo", function(req, res){
    res.json({echo: req.params.word})
  })*/

// Get Query Parameter Input from the Client
/*app.get("/name", function(req, res){
    res.json({name: `${req.query.first} ${req.query.last}`})
  })*/

// Use body-parser to Parse POST Requests
app.use(bodyParser.urlencoded({extended: false}))

// Get Data from POST Requests
app.post("/name", function(req, res){
    res.json({name: req.body.first + " " + req.body.last})
    })

  module.exports = app;