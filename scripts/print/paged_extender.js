class PagedExtenderHandler extends Paged.Handler {

	static handlers = {
		beforeParsed: [],
		afterPageLayout: [],
		afterPreview: []
	}

	constructor(chunker, polisher, caller) {
		super(chunker, polisher, caller)
	}

	execute (...args) {
		return f => f.call(this, args)
	}

	beforeParsed(content) {
		PagedExtenderHandler.handlers.beforeParsed.forEach(_ => _(content))
	}
	
	afterPageLayout (pageElement, page, breakToken) {
		const pageNumber = pageElement.getAttribute('data-page-number')
		pageElement.style.setProperty('--page-number', `'${pageNumber}'`)
		PagedExtenderHandler.handlers.afterPageLayout.forEach(_ => _({
			page_number: Number.parseInt(pageNumber),
			content: page.area,
			root: pageElement,
			side: pageElement.classList.contains('pagedjs_right_page') ? 'right' : 'left'
		}))
	}
	
	afterPreview (pages) {
		PagedExtenderHandler.handlers.afterPreview.forEach(this.execute(pages))
	}
}
Paged.registerHandlers(PagedExtenderHandler)

function beforeParsed (f) {
	PagedExtenderHandler.handlers.beforeParsed.push(f)
}

function afterPageLayout (f) {
	PagedExtenderHandler.handlers.afterPageLayout.push(f)
}

function afterFinished (f) {
	PagedExtenderHandler.handlers.afterPreview.push(f)
}