//Express.js
var express = require('express');
var app = express();

//HTTP
var http = require('http').createServer(app);

var server = app.listen(8080);

//our server
var Twit = require('twit');

var io = require('socket.io').listen(server);

var TwitterAPI = new Twit({ //be careful of uploading tokens to github
	consumer_key: 'BCXRiLTmLyZpAIHSC934fKoDU',
	consumer_secret: 'JO5vWTLoyysnnOiUnyFU07e2JHF9xcfZJ2bRaFQAgO0yUZvcnl',
	access_token: '913817114787614720-vLs6Ekb0yP1LGXepqE78WLzmsvZZARW',
	access_token_secret: 'HHwGRd5oNMQ9SWXtzGXJvglfQMljd5OidEL4YMRysVnbQ',
	timeout_ms: 60 * 1000 //optional timeout so you don't get banned
});

console.log('Yay our server is running !!!')

//EJS Templating library to use html as main engine
var ejs = require('ejs');

//Setup views folder
app.set('views', __dirname + '/views');

//setup public libarary- only place where client can look for files
app.use(express.static(__dirname + '/public'));

//EJS setup
app.engine('.html', ejs.__express);
app.set('view-engine', 'html');


var tweetStream = TwitterAPI.stream('statuses/filter', {track: 'water'}); //can also do location based
tweetStream.on('tweet', function(tweet){
	//sending a message named 'note' with text
	io.sockets.emit('note', tweet.text, tweet.user.screen_name, tweet.user.followers_count);
	console.log(tweet.text + '\n'); //creates a new line
})

//req has client data: IP address, time stamp, browser type
//res or response
app.get('/', function(req, res){
	console.log('somebody ask for index.html');
	res.render('index.html'); //to return the html file

});

//NPM START