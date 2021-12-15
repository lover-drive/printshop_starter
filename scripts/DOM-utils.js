function createElement (el) {
	const output = document.createElement(el.tag)
	if (el.id) output.id = el.id
	el.classList && el.classList.forEach(_ => output.classList.add(_))
	el.attributes && Object.keys(el.attributes).forEach(
		attr => output.setAttribute(attr, el.attributes[attr])
	)

	if (el.innerHTML) output.innerHTML = el.innerHTML
	else if (el.innerText) output.innerText = el.innerText


	return output
}