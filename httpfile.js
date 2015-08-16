//HTTP UPPERCASERER

var port = process.argv[2]
	// var file = process.argv[3]
var http = require('http')
var fs = require('fs')
var map = require('through2-map')

// var server = http.createServer(function(req, res) {

// fs.createReadStream(file).pipe(res)

// })

// server.listen(port)

var server = http.createServer(function(req, res) {

	if (req.method != 'POST') {
		res.writeHead(200)
		res.end('Sry, we handle only post requests')
		return;
	};
	// console.log(req.method);
	res.writeHead(200)
	req.pipe(map(function(data) {
		return data.toString().toUpperCase()
	})).pipe(res)


})

server.listen(port)