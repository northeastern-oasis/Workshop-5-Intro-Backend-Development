# Step 4: Intro to Express!

### Objectives:
- Get our Express app up and running
- Parse different paths and the data they send
- Send back data when we recieve GET requests
- Store data when we recieve POST requests

Finally, it's time to use Express! While we can accomplish a lot with just Node.js, Express gives us many more powers, including greater ease when parsing routes and figuring out what kind of request we're dealing with (GET, POST, etc).

We are now inside a **Node project**, not just a single file that is run as an app. This is because we need to use Express, a third-party package. Basically, Express is a bunch of code somebody else wrote that we want to use in our own project.

### Getting Started

To get started, we must download Express and its **dependencies** (other code packages that Express uses to make itself work). To do that, open a terminal in this folder and run 

`npm install`

(or just double click the RUN APP file)

Our starting point for this app is `app.js`. This is where we tell Node to start executing in our `package.json` (more on that in a moment).

`package.json` tells Node information about this project--what packages it uses (like Express), what the starting point is (`app.js`), who the author is, etc

The `node_modules` folder is added after we run `npm install`. This holds the third-party code to make our app run, like the source code for Express. Take a look inside if you're curious!

Finally, the `routes` folder holds the routes for our app--the URLs we can access off the main url `localhost:3000`. We should make a new file in here for each main route, like `localhost:3000/profile` and `localhost:3000/blog`

### Task:

Our goal is to modify our routes--what happens when we access certain URLs in our app. These can be found in the `routes` folder.

First open `profile-routes.js`, read through the comments, and do the challenges:

1. You will be adding a new GET endpoint--follow instructions in the file
2. You will be adding a new POST endpoint. In this, you will write the recieved message to a file (using 'fs' from the earlier sections). To test the POST endpoint, you will want to use **Postman**. We will demonstrate if there is time
3. CHALLENGE: Create a new routes file for your new blog with new endpoints. Make sure you import it into this file!


### To Run the Node Project:

**Note: you will need to kill the app (Ctrl/Cmd+C) and rerun it every time you make a change to your code. It doesn't automatically update! (Though it's easy to set that up, see [nodemon](https://nodemon.io/))**

When starting out, you will use the command line to run your node app. Simply open a terminal/command promprt at this window location:

1. On Windows, go to File -> Open Windows Powershell/Command Prompt
2. On Mac, go to Finder -> Services -> Open Terminal at this Location

To run the app, use the command `node FILE_NAME`, where FILE_NAME is, well, you know. Then hit enter.

So for this folder, you'd type `node app.js`

You can also type `npm start` because this is defined as a script in `package.json`

You can also just double-click the RUN APP(YOUR_OS) file for ease, but really try to use command line