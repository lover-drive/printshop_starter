beforeParsed(content => {
	const container = content.querySelector('#index')

	const index = {}

	for (let entry of Array.from(content.querySelectorAll('span.index'))) {
		const pageNumber = window.getComputedStyle(entry).getPropertyValue('--page-number')
		const category = entry.getAttribute('data-index-category')
		const description = entry.getAttribute('data-index-description')
		const letter = category[0]

		if (!index[letter]) index[letter] = {}
		if (!index[letter][category]) index[letter][category] = {}

		if (!description) index[letter][category]['__main__'] = {
			id: `#${entry.id}`,
			pageNumber
		}
		else index[letter][category][description] = {
			id: `#${entry.id}`,
			pageNumber
		}
	}

	for (let letter in index) {
		const section = createElement({
			tag: 'div',
			classList: ['index-section']
		})

		section.appendChild(createElement({
			tag: 'h2',
			innerText: letter
		}))

		for (let [categoryName, category] of Object.entries(index[letter])) {
			section.appendChild(createElement({
				tag: 'a',
				attributes: {
					href: category['__main__'].id,
				},
				innerText: categoryName
			}))
			for (let [entry, value] of Object.entries(index[letter][categoryName])) {
				if (entry == '__main__') continue
				section.appendChild(createElement({
					tag: 'a',
					attributes: {
						href: value.id,
					},
					classList: ['subcategory'],
					innerText: entry
				}))
			}
		}

		container.appendChild(section)
	}
})