// using path package to get the correct file path for our html
var path = require("path");

//===========ROUTING=================
module.exports = function(app) {
	//A default, catch-all route that leads to home.html which displays the home page.
	app.get("*", function(req, res){
		res.sendFile(path.join(__dirname, "../public/home.html"));
	});

	//It leads to the survey.html page
	app.get("/survey", function(req, res){
		res.sendFile(path.join(__dirname, "../public/survery.html"));
	});
};