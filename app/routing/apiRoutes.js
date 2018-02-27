var friendsData = require("../data/friends");

//===========ROUTING=================
module.exports = function(app) {
	//to displays a JSON of all possible friends when uers open the page
	app.get("/api/friends", function(req, res){
		res.json(friendsData);
	});

	//handle incoming survery results and the logic
	app.post("/api/friends", function(req, res){
		//console.log(req.body.scores[i]);
		friendsData.push(req.body);
		res.json(true);

		console.log(friendsData);
		var user_result = 0;
		var fd_result = 0;
		var total_fd_result = [];

		//uer total input scores
		for (var i = 0; i < req.body.scores.length; i++ ) {
			Math.abs(user_result += parseInt(req.body.scores[i]));
		}
		console.log(user_result);

		for (var n = 0; n < friendsData.length; n++) {

			for (var f = 0; f < friendsData[n].scores.length; f++) {
				Math.abs(fd_result += parseInt(friendsData[n].scores[f]));
			}
		}
		console.log("this is friends:" + fd_result);
		

	});
};
