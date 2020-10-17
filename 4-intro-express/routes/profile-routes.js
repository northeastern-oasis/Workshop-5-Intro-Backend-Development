const express = require('express');
const fs = require("fs");

const router = express.Router();

router.get('/', function(req, res) {
	return res.send(
		{
		   message:"This is the profile endpoint!"
		}
	);
});

// TODO:
// 1. Add a new GET endpoint just like the one above, but make its path '/profile-info'. This can be accessed via 'localhost:3000/profile/profile-info'
// 2. Have it return JSON like the one above, with two properties:
// 	name: YOUR_NAME (as a "string")
//	age: YOUR_AGE (as a number)
//	isMember: WHETHER YOURE A MEMBER (as a boolean)
// 3. Feel free to copy the code above--this will be similar!
// 4. Test using browser or Postman


router.post('/', function(req, res) {
	console.log(req.body);
});


// TODO:
// 1. Add a new POST endpoint just like the one above, but make its path '/new'. So this can be accessed via 'localhost:3000/profile/new'
// 2. Have it write the request body to a new file called "output.txt"
//	To get request body, use "JSON.stringify(req.body)"
	// JSON.stringify is a built in JavaScript function to turn requests into strings
// 3. Check earlier sections for refresher of how to use 'fs'!
// Test using POSTMAN

// This tells JavaScript we want to use this in another file
module.exports = router;
