// var http = require('http')

// http.get(process.argv[2], function(res) {
// 	res.setEncoding('utf8')

// 	res.on('data', console.log)
// 	res.on('error', console.error)
// })


// var http = require('http')
// var url = process.argv[2]
// var bl = require('bl')

// http.get(url, function(res) {
// 	res.setEncoding('utf8')

// 	res.pipe(bl(function(err, data) {
// 		if (err) console.error(err)

// 		console.log(data.length)
// 		console.log(data.toString())
// 	}))
// })

//lyn Juggling async :
/*
var http = require('http')
var urls = [process.argv[2], process.argv[3], process.argv[4]]
var result = ['', '', '']
var count = 0;
var bl = require('bl')

// console.log(urls);

urls.forEach(function(el, index, array) {
	get(el, index)

});

function get(url, i) {
	// console.log('get' + url);
	http.get(url, function(res) {
		res.setEncoding('utf8')
		res.pipe(bl(function(err, data) {
			if (err)
				console.log(err);
			result[i] = data;
			count++;
			if (count == 3)
				result.forEach(function(item) {
					console.log(item.toString());
				})
		}))
	})
}
*/

var http = require('http')
var bl = require('bl')
var results = []
var count = 0

function printResults() {
	for (var i = 0; i < 3; i++)
		console.log(results[i])
}

function httpGet(index) {
	http.get(process.argv[2 + index], function(response) {
		response.pipe(bl(function(err, data) {
			if (err)
				return console.error(err)

			results[index] = data.toString()
			count++

			if (count == 3)
				printResults()
		}))
	})
}

for (var i = 0; i < 3; i++)
	httpGet(i)


