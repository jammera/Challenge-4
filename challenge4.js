
const fs = require('fs');

fs.readFile('input.txt', (err, data) => {
	if(err) {
		console.log('error');
	}
	callback(data.toString('utf8'));
})

const callback = (data) => {
	// 1st part
	console.time('endfloor');
	console.log(data.length - data.split(')').length*2);
	console.timeEnd('endfloor');
	
	// 2nd part
	console.time('basement');
	var floor = 0;
	for(var i in data) {
		if(floor === -1) {
			console.log(i);
			break;
		}else if(data[i] === '(')
			floor+=1;
		else
			floor-=1;
	}
	console.timeEnd('basement');
}
