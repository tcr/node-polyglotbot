var rem = require('rem');

var api = rem.create({
	base: 'http://api.microsofttranslator.com/v2',
	configParams: {
		appId: 'key'
	}
}, {
	key: "T9zub_9uszOuS8dZiC8mpVBGTWtgp4Nb72eQazRmAmU4*"
});

exports.translate = function (from, to, text, next) {
	api('ajax.svc/TranslateArray').get({
		texts: JSON.stringify([text]),
		from: JSON.stringify(from),
		to: JSON.stringify(to),
		loc: 'en',
		ctr: 'UnitedStates',
		rgp: 'c436032'
	}, function (err, json) {
		next(err, json && json.map(function (translation) {
			return translation.TranslatedText;
		}));
	});
};

exports.pronounce = function (lang, text, next) {
	api.stream('http.svc/Speak').get({
		language: lang,
		format: 'audio/mp3',
		options: 'MaxQuality',
		text: text
	}, next);
};