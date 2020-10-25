# Step 1: Our First Node App

**Note: completed code in `node-server-solution.js`--you should start in `node-server.js`**

### Objectives:
- Create a basic server using Node
- Access our server's endpoint

So far, what we've done hasn't been exceptional. It's now time to start leveraging one of the really cool features of Node--the ease at which you can create an entire server

### Task:

Our goal is to run the file `node-server.js`. This file will start a server when we run it, which we can access through our browser. First we will finish writing it. 

First open the file, read through the comments, and do the challenges:

1. You will be creating a server. This is done for you
2. When the server recieves a message, it calls a *callback function*. This is defined for you: `serverCallback(req, res)`
3. Node passes in data as arguments to this function when calling it. 
4. You will first log the request made--it looks pretty huge! You don't need to worry about what it says, just know a lot of data gets passed about you and your machine for Node to use
5. You will use `res.write` to write a response to your client
6. You will after call `res.end()` to end the response
7. Run your Node app (see below), and visit localhost:3000 in your browser to try this out!


### To Run the Node App:

**Note: you will need to kill the app (Ctrl/Cmd+C) and rerun it every time you make a change to your code. It doesn't automatically update! (Though it's easy to set that up, see [nodemon](https://nodemon.io/))**

When starting out, you will use the command line to run your node app. Simply open a terminal/command promprt at this window location:

1. On Windows, go to File -> Open Windows Powershell/Command Prompt
2. On Mac, go to Finder -> Services -> Open Terminal at this Location

To run the app, use the command `node FILE_NAME`, where FILE_NAME is, well, you know. Then hit enter.

So for this folder, you'd type `node node-server.js`

You can also just double-click the RUN APP(YOUR_OS) file for ease, but really try to use command line