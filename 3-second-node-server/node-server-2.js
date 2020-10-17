const http = require('http');

function serverCallback(req, res) {

    // We don't want just one response to our users--we want to show different things!
    // We're going to grab their URL to get the path
    const url = req.url;

    // Now we'll add some `if` statements to check what their URL is
    // We'll do the first one:

    // If they visit localhost:3000/home
    if (url === '/home') {

    	// Remember res.write()? We're going to use that again, only this time send back HTML!
    	// We can just send back HTML line-by-line! (It's a bit tediious, and there's better ways, but just for learning)

    	res.write("<html>");
    	res.write("<body>");
    
    	// TODO:
    	// Add some visible HTML tags using res.write
    	// Find some more basic tags here: https://www.w3schools.com/html/html_basic.asp
    	// Ex: res.write('<h1>Welcome to my site!</h1>')

    	res.write("</body>");
    	res.write("</html>");


    	return res.end();
    }


    // TODO: 
    // Add more if statements for different paths--blog, about, contact, etc!
    // See here for more on JavaScript if statements: https://www.w3schools.com/js/js_if_else.asp
    // Feel free to copy from the function above--and don't forget to end with res.end()!






};



const server = http.createServer(serverCallback);


// We can access this through going to 'localhost:3000' in our browser
// Go try that out!
server.listen(3000);
