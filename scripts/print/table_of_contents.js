beforeParsed(content => {
	const container = content.querySelector('#table-of-contents')
	const headings = content.querySelectorAll('h2, h3, h4, h5, h6')
	let currentSection = createElement({
		tag: 'div',
		classList: ['toc-section']
	})

	for (let h of Array.from(headings)) {	
		h.id = h.id || h.innerText
			.replace(/[^А-Яа-яA-Za-zЁё|\s]/g, '')
			.replace(/\s/g, '_')
		const depth = Number.parseInt(h.tagName.substr(1)) - 1

		if (depth == 1 && currentSection.children.length > 0) {
			container.appendChild(currentSection)
			currentSection = createElement({
				tag: 'div',
				classList: ['toc-section']
			})
		}
		
		const a = currentSection.appendChild(createElement({
			tag: 'a',
			attributes: {
				'href': `#${h.id}`,
				'data-depth': depth
			},
			innerText: h.innerText.replace(/\n/g, '')
		}))
	}
	container.appendChild(currentSection)
})