afterFinished(() => {
	const pages = document.querySelector('.pagedjs_pages')
	pages.addEventListener('scroll', _ => {
		localStorage.setItem('scroll-x', pages.scrollLeft)
		localStorage.setItem('scroll-y', pages.scrollTop)
	})

	pages.scrollLeft = Number.parseInt(localStorage.getItem('scroll-x')) || 0
	pages.scrollTop = Number.parseInt(localStorage.getItem('scroll-y')) || 0

	document.body.setAttribute('data-loaded', '')
})

var socket = io('http://localhost:8080')