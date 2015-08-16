module.exports = function(dir, ext, callback) {

	var fs = require('fs');
	var path = require('path');

	fs.readdir(dir, function(err, list) {
		if (err) return callback(err);

		var res = [];
		list = list.filter(function(file) {
			return path.extname(file) === '.' + ext
		})
		callback(null, list);
	});
};