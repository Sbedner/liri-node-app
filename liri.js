require("dotenv").config();


// Gets the object from the keys.js file.
var keys = require("./keys.js");
var Twitter = require('twitter');
var request = require('request');
var fs = require('fs');
var a=process.argv;

var twitter = new Twitter(keys.twitter)




function getTwitter(){
    twitter.get('statuses/user_timeline', {screen_name: 'Tom Jones 2324', count: 3}).then(function(tweets){
        tweets.forEach(function(tweet){
            console.log("Time of Tweet: " + tweet.created_at);
            console.log("Message: " + tweet.text + "\n");
        })
    })
}




if (process.argv[2]==="my-tweets"){
getTwitter();
};


