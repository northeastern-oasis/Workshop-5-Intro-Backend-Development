// Welcome to Node.js! This is the first app we will implement--a very basic program to write to the file system

// The point of this is to highlight what Node.js is--a program that lets us run JavaScript code on our machine (instead of just the browser, which we've seen before)

// Import the 'fs' module for access to file system
const fs = require("fs");

// This just prints out the given value to the console!
console.log("Running app!")

// Set and assign a new variable
let message = "Hello from Node.js!"

// Use writeFileSync function given to us by fs to write to a new file
// 1st argument: file name
// 2nd argument: value to write
fs.writeFileSync("output.txt", message);


// YOUR TURN:
// 1. Change the output message to say anything else you want
// 2. Rerun this Node app (yes, this is an app!)--do you see the change?
// 3. Add a new fs.writeFileSync command to make another file with any name and message you want

// CHALLENGE:
// Can you write a for loop to create 100 new files, each being named numbers 1-100 (so 1.txt, 2.txt, 3.txt, etc) 

// (solution in first-app-solution.js)