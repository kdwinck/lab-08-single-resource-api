'use strict';

const httpServer = require('./lib/httpserver');
const resourceManager = require('./lib/resourcemanager');

const PORT = process.env.PORT || 3000;



httpServer.createServer(PORT, function() {
  console.log('Server listening on port: ' + PORT);
});

httpServer.on('/', function(req, res) {
  res.out({ text: 'Testing out method' });
  res.end();
});
