const sass = require('sass')
const postcss = require('postcss')

const postprocessor = new postcss.Processor([
	require('autoprefixer')
])

module.exports = async (input, path) => await sass.compileAsync(path).then(_ => postprocessor.process(_.css).css)