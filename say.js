var polyglotbot = require('./google');

polyglotbot.pronounce('en', process.argv.slice(2).join(' ') || 'Please specify an argument to pronounce.', function (err, stream) {
	var mpg123 = require('child_process').spawn('mpg123', ['-'], {
		stdio: ['pipe', process.stdout, process.stderr]
	});
	stream.pipe(mpg123.stdin).on('error', function () {
		console.error('Error in writing. Ensure mpg123 is installed.');
		process.exit(1);
	});
});