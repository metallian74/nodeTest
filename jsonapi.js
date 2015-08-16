console.log(process.argv);

var http = require('http')
var port = process.argv[2]
var url = require('url')
var fs = require('fs')


var server = http.createServer(function(req, res) {

	if (req.method != 'GET') {
		res.writeHead(200)
		res.end('Sry, we handle only GET requests')
		return;
	};
	var json = url.parse(req.url, true)


	var result;
	var date = new Date(json.query.iso)

	if (json.pathname == '/api/parsetime')
		result = JSON.stringify({
			hour: date.getHours(),
			minute: date.getMinutes(),
			second: date.getSeconds()
		}, null, 4)

	else if (json.pathname == '/api/unixtime')
		result = JSON.stringify({
			unixtime: date.getTime()
		}, null, 4)


	if (result) {
		res.writeHead(200, {
			'Content-Type': 'application/json'
		})
		res.end(result)
	} else {
		res.writeHead(404)
		res.end()
	}

})

server.listen(port)