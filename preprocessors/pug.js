const nonbreaking_words = require('./nonbreaking_words')
const hyphenopoly = require('hyphenopoly')

let hyphenate_text = _ => _

const hyphenator = hyphenopoly.config({
	require: ['en-us']
}).then(_ => hyphenate_text = _)

module.exports = line => {
	if (line.startsWith('block')) return line
	if (line.startsWith('includes')) return line
	if (line.startsWith('extends')) return line

	line = line.replace(/\s--\s/g, '&nbsp;—&nbsp;')
	nonbreaking_words
		.forEach(
			regex => line = line.replace(regex, _ => _.replace(/\s/g, '&nbsp;'))
		)

	return line
}