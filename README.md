# Depth First Academy - Pre Technical Interview Project



## VIP Chatroom App
This is the `VIP Chatroom App` that Depth First Academy uses as part of it's pre interview process.


###### Know/Learn These
You'll be expected to be familiar with the resources listed on this page:
[Pre Interview Project Prep Resources](http://www.depthfirstacademy.com/admissionsprep/)

###### Install these
What you'll need to have installed on your machine in order to do this project whether you're on OS X, Windows, or Linux
  - [NodeJS](https://nodejs.org/en/download/)
  - [Atom (text editor)](https://github.com/facebookincubator/create-react-app/blob/master/CHANGELOG.md) Or you can use a different one if you already have a preference
  - [Google Chrome Browser](https://www.google.com/chrome/browser/desktop/index.html)


**TIP**: To most easily read this file, we suggest you open this ChatNorris project with the Atom text editor first. Then, after RIGHT clicking on the README.md file in the Project Tree View, you will see an option pop up "Markdown Preview". You may need to right click a couple times)

![demo0](https://user-images.githubusercontent.com/8462738/28624880-c97b5e02-71d7-11e7-9c18-655308086ab4.png)



#### General Instructions
You're gonna be creating a chat app in the browser using ReactJS that lets the user who is using your program add messages to a "chat room" as well as pull down data from a locally run API of various celebrities for things they've been known to say.

This is NOT meant to be a _real_ chat app that lets multiple, actual users connect, but rather it'll be more just for your own use, and to have fake people in the chat room. (Hey, if I can't have friends, I'll just pretend I have them!).

Also, feel free to install any NPM libraries that will be useful to you (HTTP libraries, UI library, or whatever)

The chat app should have the following features:
- A section on the screen where the messages of the users in the chatroom are added in a "most recent message added goes to the bottom" type of way
- To the left of each message should have his/her name (bonus points for miniature image of them instead) of the chatter (whether you or the celebrity)
- a form where you, yourself can add messages and contribute to the "chat"
- Celebrity messages are pulled from the locally served API (documentation below)
- To add a message I don't want to have a Submit text button, I want to be able to just press enter
- Keep the scroll of the chat window at the bottom. It's unreasonable to ask a user to scroll to the bottom every time somebody adds a message.


#### Getting Started

In the terminal, first run `node -v` to make sure you have NodeJS installed, which is required before you can get started

If you don't see a version number output in the terminal (which is what this command is saying to do, output the version number) then it means you either don't have NodeJS installed, or `node` hasn't been added to your command line PATH yet

Assuming you see a version number pop out you're ready to get started

In the terminal, make sure your working directory is at the root of this project. Then run `npm install` in the terminal and if you have NodeJS installed properly you'll see some dependent libraries for this project download.

(in this screen recording I dont actually let the downloads finish after I `npm install` because it takes a while)

![demo](https://user-images.githubusercontent.com/8462738/28371065-2a066462-6c59-11e7-95d2-947110418639.gif)

After the `npm install` command finishes downloading the necessary javascript libraries into the `node_modules` directory, you're ready to start your React app and local API server by running
 `npm run start`.

Running `npm run start` will start two locally run servers. One to host the HTML and Javascript files that will be served up at the address `http://localhost:3000` (your default browser should open up to this address for you by the time the command looks like it's done running) and the API server will be running and listening for requests at `http://localhost:8887` (documentation for the API server below)

**Note:** You should see something like this in your terminal for a successful execution of `npm run start` (it will probably not have the green arrow at the very beginning, or the `git:(master)` parse as that's just a custom feature in my terminal and isn't required for you to run any of of the commands listed).

![Demo2](https://user-images.githubusercontent.com/8462738/28372019-dba6c64c-6c5b-11e7-8b9e-95c33926cb60.png)

You should see this in your browser (or the terminal ends up directing to this address for you)

![Demo3](https://user-images.githubusercontent.com/8462738/28372232-63819722-6c5c-11e7-9267-42a254499caa.png)

All the ReactJS code that is currently in the project is just the boilerplate code for the general structure of a ReactJS app and it's not what you should be showing by the end of the project (You gotta add your own code, baby!)


### Celebrity Chat Messages API
This API Server won't be available unless you follow the commands above in the "Getting Started" section.

##### GET - http://localhost:8887/messagesArchived
Making HTTP GET requests to this address will return a JSON array of the initial messages that you should add to your chat. Be sure to inspect the data structure of it to see how you should parse and use it in your ReactJS code. You will want to use this only at the beginning as it won't have any new data. The data at this endpoint simulates the initial chat messages you see when you first enter into a chatroom, and you see what people have been discussing. This is not a "test" endpoint.

##### GET - http://localhost:8887/newMessages
Making HTTP GET requests to this address will return any new messages generated by the "celebrities". Periodically, after every few seconds you will notice that it has entirely new data in it. (People create new messages in a chatroom right?) You'll want to hit this API endpoint periodically to get new messages that you should be adding to your chat.


### When finished
Test it thoroughly to make sure stuff works. You need to get in the habit of not just rushing to submit your work, and to make sure you re-test any features you just made before ever "submitting" them anywhere.

Delete the `node_modules` directory
Compress the project and email the resulting folder to `brian@depthfirstacademy.com` with the subject header "VIP Chatroom Pre Interview App".

**Note:** Gmail may require you to save your compressed project to a google drive or dropbox account. If it gives you guff about sending the project as an attachment, just send the "shared link" to the project from your google drive or dropbox in the email with the same header.







