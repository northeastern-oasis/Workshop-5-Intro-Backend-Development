# Step 2: Our Second, Slightly More Advanced Node App

**Note: completed code in `node-server-2-solution.js`--you should start in `node-server-2.js`**

### Objectives:
- Send back HTML to our client
- Parse the URL to give a different response

We will once again be creating a simple server--this time, however, we will be sending back HTML! We will also be parsing the user's URL 

### Task:

Our goal is to run the file node-server-2.js. This file will start a server when we run it, which we can access through our browser. First we will finish writing it. 

First open the file, read through the comments, and do the challenges:

1. You will be creating a server. This is done for you
2. When the server recieves a message, it calls a *callback function*. This is defined for you: `serverCallback(req, res)`
3. Node passes in data as arguments to this function when calling it. 
4. In the callback, you will grab and parse the URL of whoever is visiting your server, and show a different response depending on the **path** they're visiting
5. The response this time will be HTML--you can send back anything you want, really!
6. You will Run your Node app (see below)
7. Visit localhost:3000, localhost:3000/about, and localhost:3000/blog in your browser to test this out!


### To Run the Node App:

**Note: you will need to kill the app (Ctrl/Cmd+C) and rerun it every time you make a change to your code. It doesn't automatically update! (Though it's easy to set that up, see [nodemon](https://nodemon.io/))**

When starting out, you will use the command line to run your node app. Simply open a terminal/command promprt at this window location:

1. On Windows, go to File -> Open Windows Powershell/Command Prompt
2. On Mac, go to Finder -> Services -> Open Terminal at this Location

To run the app, use the command `node FILE_NAME`, where FILE_NAME is, well, you know. Then hit enter.

So for this folder, you'd type `node node-server-2.js`

You can also just double-click the RUN APP(YOUR_OS) file for ease, but really try to use command line