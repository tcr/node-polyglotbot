var rem = require('rem');

var api = rem.create({
	base: 'http://translate.google.com',
	configParams: {
		client: 'key'
	}
}, {
	key: 'x'
});

exports.text = function (from, to, text, next) {
	api('translate_a/t').get({
		text: text,
		hl: 'en',
		sl: from,
		tl: to
	}, function (err, json) {
		next(err, json && json.sentences.map(function (sentence) {
			return sentence.trans;
		}))
	});
};

exports.pronounce = function (lang, text, next) {
	api.stream('translate_tts').get({
		ie: 'UTF-8',
		q: text,
		tl: lang,
		total: text.split(/\s+/).length,
		idx: 0,
		textlen: text.length
	}, next);
};