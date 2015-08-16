var net = require('net')
var port = process.argv[2]

//server logic
// console.log(port);
var server = net.createServer(function(socket) {
	// socket.write(data)
	var d = new Date()
	var m = (d.getMonth() < 10 ? '0' + (d.getMonth() + 1) : (d.getMonth() + 1))

	var ret =
		d.getFullYear() + '-' +
		m + '-' +
		d.getDate() + ' ' +
		d.getHours() + ':' + d.getMinutes() + '\n'
		// console.log(ret);
	socket.write(ret)
	socket.end()

})

server.listen(port)