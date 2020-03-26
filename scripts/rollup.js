const rollup = require('rollup');
const stringifyObject = require('stringify-object');

const fs = require('fs');

const data = require('../src/_data/data.js');

(async () => {
	const bundle = await rollup.rollup({
		input: 'src/_includes/js/script.js'
	});

	const {output} = await bundle.generate({
		format: 'iife',
		globals: {
			harmonograph: 'hrmngrph'
		},
		compact: true
	});

	// Get the current data and update the jsBundle
	data.jsBundle = output[0].code;

	const formattedData = stringifyObject(data, {
		indent: '	',
		singleQuotes: false
	});

	// Save the updated JS Bundle to a file
	const newData = `module.exports = ${formattedData}`;
	fs.writeFileSync('src/_data/data.js', newData);
})();
