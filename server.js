// Series of npm packages will use to give the server useful functionality
var express = require("express");
var bodyParser = require("body-parser");
var app = express();

// Sets an initial port for our listener
var PORT = process.env.PORT || 8000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


require("./routing/apiRoutes")(app);
// var apiRoutes = require("./routes/apiRoutes")
// console.log(apiRoutes); => [Function]
// apiRoutes(app);
require("./routing/htmlRoutes")(app);


// The below code effectively "starts" the server
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});