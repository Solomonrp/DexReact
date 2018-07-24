var express = require('express');
var ParseServer = require('parse-server').ParseServer;
var ParseDashboard = require('parse-dashboard');

const http = require('https');
// const http = require('https');
// const https = require('http');
const fs = require('fs');

// const PROD_URL="";
const LOCAL_URL="http://localhost:1337/parse"

var api = new ParseServer({
  databaseURI: "mongodb://status-super:r38ZzudNJekXrV5r@ds143451.mlab.com:43451/status-board",
  cloud: __dirname + '/cloud/main.js',
  appId: 'OSGiFZBrXxNLjN3gYDPsgi7P4a0j6fzcc2iaCKac',
  masterKey: 'k8xm42UVuIP51wR2DswLY8NL3zgWfev8AuKUUjp3',
  serverURL: LOCAL_URL
});

var dashboard = new ParseDashboard({
	"apps": [{
		"serverURL": LOCAL_URL,
		"appId": 'OSGiFZBrXxNLjN3gYDPsgi7P4a0j6fzcc2iaCKac',
		"masterKey": 'k8xm42UVuIP51wR2DswLY8NL3zgWfev8AuKUUjp3',
		"appName": "Status Board" 
	}],
	"users": [{
		"user":"admin",
		"pass":"newPassword"
	}]
});

var app = express();

app.use('/dashboard', dashboard);

app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT');
  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  next();
});

// Serve the Parse API on the /parse URL prefix
app.use('/parse', api);
var port = 1337;

app.use(require('helmet')());
var options={};
options = {
    cert: fs.readFileSync('/etc/letsencrypt/live/dexboardapi.dex.company/fullchain.pem'),
    key: fs.readFileSync('/etc/letsencrypt/live/dexboardapi.dex.company/privkey.pem')
};


const server = http.createServer(options, app).listen(port, function() {
	console.log('Prospct.in API running on port ' + port + '.');
});

// app.listen(port, function() {
//     console.log('Quiz.dex API running on port ' + port + '.');
// });
