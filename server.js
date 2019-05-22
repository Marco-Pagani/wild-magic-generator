// var http = require('http'),
//   fs = require('fs'),
//   url = require('url'),
//   port = 8080;

// /* Global variables */
// var effectData, server;

// var requestHandler = function (request, response) {
//   var parsedUrl = url.parse(request.url);
//   if (parsedUrl.pathname == '/magic') { //GET request is correct
//     response.writeHead(200, {
//       'Content-Type': 'text/html'
//     });
//     response.write(effectData);
//   } else { //bad request
//     response.writeHead(404);
//     response.write('Bad gateway error');
//   }
//   response.end()
// };

// fs.readFile('magic.json', 'utf8', function (err, data) {

//   effectData = data;
//   server = http.createServer(requestHandler);
//   server.listen(port);
//   console.log('server listening on: http://localhost:8080');
// });

var app = require('./server/config/app');
var server = app.start();