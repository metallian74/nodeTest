/*var http = require('http');
http.createServer(function(req,res) {
	res.writeHead(200, {'Content-YType' : 'text/plain'});
	res.end('Hello World \n');
}).listen(1337, '127.0.0.1');
console.log('Server running at http://127.0.0.1:1337/');
*/
/*
var net = require('net');

var server = net.createServer(function (socket) {
  socket.write('Echo server\r\n');
  socket.pipe(socket);
});

server.listen(1337, '127.0.0.1');*/
/*
var res = 0;
for (var i = process.argv.length - 1; i >= 0; i--) {
	var val = process.argv[i];
	if (!!parseInt(val)) {
		res += parseInt(val);
	};
//	console.argv[i]

};
console.log(res);
*/
/*
console.log(process.argv);*/
/*var fs = require('fs');
/*
for (var i = process.argv.length - 1; i >= 0; i--) {*/
/*	var buffer  = fs.readFileSync(process.argv[2])
	var str = buffer.toString();
	console.log(str.split('\n').length - 1);*/
/*};
 */

/*
var fs = require('fs');

fs.readFile(process.argv[2], function (err, data) {
  if (err) 
  	throw err;
  
  console.log(data.toString().split('\n').length - 1);

});*/

/*console.log(process.argv);*/



var fs = require('fs');
var path = require('path');

fs.readdir(process.argv[2], function(err, list) {
	if (err)
		throw err;

	list.forEach(function(file) {
		if (path.extname(file) === process.argv[3]) {
			console.log(file);
		};
	});	

});
