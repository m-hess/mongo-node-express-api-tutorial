// // Basic (node js?)
// var http = require('http');
// http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/plain'});
//   res.end('Hello World\n');
// }).listen(3000, '127.0.0.1');
// console.log('Server running at http://127.0.0.1:3000/');

// //Express.js hardcoded routes
// var express = require('express');
//
// var app = express();
//
// app.get('/wines', function(req, res) {
//     res.send([{name:'wine1'}, {name:'wine2'}]);
// });
// app.get('/wines/:id', function(req, res) {
//     res.send({id:req.params.id, name: "The Name", description: "description"});
// });
//
// app.listen(3000);
// console.log('Listening on port 3000...');

// //Express.js delegated routing
// var express = require('express'),
//     wines = require('./routes/wines');
//
// var app = express();
//
// app.get('/wines', wines.findAll);
// app.get('/wines/:id', wines.findById);
//
// app.listen(3000);
// console.log('Listening on port 3000...');

// Modify to include all routes w mongodb
var express = require('express'),
    wine = require('./routes/wines');

var app = express();

app.configure(function () {
    app.use(express.logger('dev'));     /* 'default', 'short', 'tiny', 'dev' */
    app.use(express.bodyParser());
});

app.get('/wines', wine.findAll);
app.get('/wines/:id', wine.findById);
app.post('/wines', wine.addWine);
app.put('/wines/:id', wine.updateWine);
app.delete('/wines/:id', wine.deleteWine);

app.listen(3000);
console.log('Listening on port 3000...');
