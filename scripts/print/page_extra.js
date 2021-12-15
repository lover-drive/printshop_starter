
afterPageLayout(_ => {
	const template = document.querySelector('template#page-extra').content.cloneNode(true)
	_.root.append(template)
	// console.log(_)
})