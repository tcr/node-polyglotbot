# polyglotbot

A quick and dirty Node.js module to pronounce and translate strings into other languages. If you're translating text in production, I suggest something that violates fewer terms of service ;)

## Usage

`npm install polyglotbot`

Then choose `require('polyglotbot/google')` or `require('polyglotbot/bing')` by whichever company's lawyers you're less afraid of.

* **polyglotbot.translate(from, to, text, callback(err, translations))** &mdash; Translates text from one language into another. Returns translations in preferential order.
* **polyglotbot.pronounce(lang, text, callback(err, mp3stream))** &mdash; Pronounce text in a given language.

## Example

```
var polyglotbot = require('polyglotbot/google');

polyglotbot.translate('en', 'nl', 'Want to learn some Dutch?', function (err, translations) {
	console.log(translations[0]);
});

polyglotbot.pronounce('en', 'Do you understand the words that are coming out of my mouth?', function (err, stream) {
	stream.pipe(require('fs').createWriteStream('jackson.mp3')); // Save the mp3 file
});
```