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
    
    	res.write("<h1>Welcome to my site!</h1>");
    	res.write("<h2>Enjoy your time here!</h2>");

    	res.write("</body>");
    	res.write("</html>");


    	return res.end();
    }


    if (url === '/blog') {

    	res.write("<html>");
    	res.write("<body>");
    
    	res.write("<h1>Welcome to my blog!</h1>");
    	res.write("<h2>See all my cool posts!</h2>");

    	res.write("</body>");
    	res.write("</html>");


    	return res.end();
    }

    if (url === '/about') {

    	res.write("<html>");
    	res.write("<body>");
    
    	res.write("<h1>Learn more about me!</h1>");
    	res.write("<h2>On this page!!</h2>");

    	res.write("</body>");
    	res.write("</html>");


    	return res.end();
    }






};


const server = http.createServer(serverCallback);

server.listen(3000);
