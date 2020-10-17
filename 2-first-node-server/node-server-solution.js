// This is another built-in Node module--it lets us use HTTP functions, like making a server
const http = require('http');

function serverCallback(req, res) {
    // First we'll output the request result. What do you see in the console
    // When you visit your server?
    console.log(req);

    // TODO:
    // Next we'll write to some data to send back!
    // Call res.write, and pass in something to write back to your client
    // You can call it as many times as you want to send back multiple messages!
    // Ex: res.write("What's up!")

    res.write("Hello world!");
    res.write("Goodbye world!");


    // TODO:
    // Finally, you can end your response by calling res.end()
    res.end();
};


// This creates a server for us!
const server = http.createServer(serverCallback);

// This tells the server to start listening at port 3000
// We can access this through going to 'localhost:3000' in our browser
// Go try that out!
server.listen(3000);
