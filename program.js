var mod = require('./module');
// console.log(process.argv);

mod(process.argv[2], process.argv[3], function(err, data){
	if (err) console.error(err);
		data.forEach(function(file) {
			console.log(file);
		});
});

