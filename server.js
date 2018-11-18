//================================================
// Dependencies
//================================================

var express = require("express");

//================================================
//Express Configuration
//================================================

var app = express();

//================================================
// Initial port
//================================================

var PORT = process.env.PORT || 8080;

//Sets up the Express
app.use(express.urlencoded({ enxtended: true}));
app.use(express.json());

//=================================================
//ROUTER 
//=================================================

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);


//=================================================
//LISTENER
//=================================================

app.listen(PORT, function(){
    console.log("App listening on PORT: " + PORT);
});

