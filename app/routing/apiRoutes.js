var friendsData = require("../data/friends");

//===========ROUTING=================
module.exports = function(app) {
	//to displays a JSON of all possible friends when uers open the page
	app.get("/api/friends", function(req, res){
		res.json(friendsData);
	});

	//handle incoming survery results and the logic
	app.post("/api/friends", function(req, res){

		friendsData.push(req.body);

		//giving a varible to compare
		var matchingDiff = 10000;

		var user_result = 0;
		var fd_result = 0;
		//set the varible to hold a difference score between the user and the friends  
		var diff = 0;
		//have a varible to hold the new friend's data
		var newFriend = {};

		//uer total input scores
		for (var i = 0; i < req.body.scores.length; i++ ) {
			user_result += parseInt(req.body.scores[i]);
		}

		//generte the closest scores to the user
		for (var n = 0; n < friendsData.length - 1; n++) {
			//add up the scores of each friend in the friends.js 
			for (var f = 0; f < friendsData[n].scores.length; f++) {
				fd_result += parseInt(friendsData[n].scores[f]);
			}
			//calculate the difference reslut between user and the friend 
			diff = Math.abs(user_result - fd_result);

			//if the difference is less than matching difference, get the specific friend
			if (diff < matchingDiff) {
				//sign the specific friend to the new friend
				newFriend = friendsData[n];
				//sign the different score to the matching different varible
				matchingDiff = diff;
				fd_result = 0;
			} //if it is larger than the matchingDiff, set the friend's reslut score back to 0.
			else {
				fd_result = 0;
			}
		}
		//send the new friend as an object to show the user's best match
		res.json(newFriend);

	});
};
