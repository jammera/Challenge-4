
const fs = require('fs');

fs.readFile('input.txt', (err, data) => {
	if(err) {
		console.log('error');
	}
	callback(data.toString('utf8'));
})

const callback = (data) => {
	// ver 1 - dummy 
	console.time('up-down');
	console.log(data.match(/\(/gi).length - data.match(/\)/gi).length);
	console.timeEnd('up-down');

	// ver 2
	console.time('total-down*2');
	console.log(data.length-data.match(/\)/gi).length*2);
	console.timeEnd('total-down*2');

	// ver 3
	console.time('total-down*2 using .split');
	console.log(data.length - data.split(')').length*2);
	console.timeEnd('total-down*2 using .split');

	// ver 4 - not working
	/*console.time('using reduce');
	console.log(data.length - 
	data.reduce((acc, point) => {
		if(point === ')')
			return acc++;
	},0)
	);
	console.timeEnd('using reduce');
	*/
}
