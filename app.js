var express = require('express');
var ParseServer = require('parse-server').ParseServer;
var ParseDashboard = require('parse-dashboard');

const LOCAL_URL="http://localhost:1337/parse";

var api = new ParseServer({
  databaseURI: "mongodb://dex.company:DEX.Company70@ds135252.mlab.com:35252/teste-dexter",
  cloud: __dirname + '/cloud/main.js',
  appId: 'OSGiFZBrXxNLjN3gYDPsgi7P4a0j6fzcc2iaCKga',
  masterKey: 'k8xm42UVuIP51wR2DswLY8NL3zgWfev8AuKUUjga',
  serverURL: LOCAL_URL
});

var dashboard = new ParseDashboard({
	apps: [{
		serverURL: LOCAL_URL,
		appId: 'OSGiFZBrXxNLjN3gYDPsgi7P4a0j6fzcc2iaCKga',
		masterKey: 'k8xm42UVuIP51wR2DswLY8NL3zgWfev8AuKUUjga',
		appName: "Teste Dexter" 
	}],
	users: [{
		user:"admin",
		pass:"newPassword"
	}]
});

var app = express();

app.use('/dashboard', dashboard);
app.use(express.static('imgs')); //

app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT');
  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  next();
});

// Serve the Parse API on the /parse URL prefix
app.use('/parse', api);
var port = 1337;

app.listen(port, function() {
    console.log('Teste Dexter API running on port ' + port + '.');
});
