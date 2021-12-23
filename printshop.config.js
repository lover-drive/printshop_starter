module.exports = {
	name: 'Prinshop starter kit',
	description: 'Boilerplate project for printshop, designed to scaffold everything you need to use it.',
	author: 'Alice Loverdrive',
	dev_port: 8080,

	content: {
		preprocess: require('./preprocessors/pug')
	},

	templates: [
		{
			url: '/print',
			template: 'templates/print',
			defaults: {
				is_preview: true
			}
		}
	],

	static: [
		{
			dir: 'images',
			url: '/images'
		},
		{
			dir: 'fonts',
			url: '/fonts'
		},
		{
			dir: 'scripts',
			url: '/scripts'
		},
		{
			dir: 'node_modules',
			url: '/node_modules'
		},
		{
			dir: 'styles',
			url: '/styles',
			preprocess: require('./preprocessors/styles')
		}
	],

	puppeteer: {
		browser: 'firefox',
		revision: '97.0a1',

		pdf_export: {
			format: 'A5'
		}
	},

	export: {
		pdf: {
			default_url: '/print?is_preview=false'
		},
		epub: {
			css: 'styles/epub.sass',
			default_url: '/web'
		},
		html: {
			include: [
				'index.pug'
			]
		}
	}
}