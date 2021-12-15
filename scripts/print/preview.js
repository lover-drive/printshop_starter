afterFinished(() => {
	const pages = document.querySelector('.pagedjs_pages')
	pages.addEventListener('scroll', _ => {
		localStorage.setItem('scroll-x', pages.scrollLeft)
	})

	pages.scrollLeft = Number.parseInt(localStorage.getItem('scroll-x'))

	document.body.setAttribute('data-loaded', '')
})

var socket = io('http://localhost:8080');

socket.on('reload', () => window.location.reload())