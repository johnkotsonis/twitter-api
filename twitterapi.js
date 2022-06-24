var Twitter = require('twitter');
require('dotenv/config');


const apikey = process.env.apikey
const apiskey = process.env.apiskey
const atoken = process.env.atoken
const atokens = process.env.atokens



 
var client = new Twitter({
  consumer_key: apikey,
  consumer_secret: apiskey,
  access_token_key: atoken,
  access_token_secret: atokens
});
 

var count =0,
    util = require(util);
Twitter.stream('filter',(track:'love')=> function(stream){

    stream.on('data', function(data){
        stream.destroy();
        process.exit(0);
    })



})


// var params = {screen_name: 'https://api.twitter.com/1.1/statuses/user_timeline.json'};
// client.get('statuses/user_timeline', params, function(error, tweets, response) {
//   if (!error) {
//     console.log(tweets);
//   }else{
//       console.log(error)
//   }
// });