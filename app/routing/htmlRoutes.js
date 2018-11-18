//==================================================
//DEPENDENCIES
//==================================================

var path = require("path");

//==================================================
//ROUTING
//==================================================

module.exports = function(app) {
    //HTML GET REQUESTS

    app.get("/", function(req, res){
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });

    app.get("/survey", function(req,res){
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });

    //Default to home if there is no match
    app.get("*",function(req,res){
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });
}