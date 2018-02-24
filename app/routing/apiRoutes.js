var friendsData = require("../data/friends.js");


//===========ROUTING=================
module.exports = function(app) {
	//to displays a JSON of all possible friends
	app.get("/api/friends", function(req, res){
		res.json(friends.js);
	});

	//handle incoming survery results and the logic
	app.post("/api/friends", function(req, res){
	
	});
};