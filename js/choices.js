const defaultSelect = () => {
	const element = document.querySelector('.js-choice');
	const choices = new Choices(element, {
		searchEnabled: false,
		duplicateItemsAllowed: false
	});

	let ariaLabel = element.getAttribute('aria-label');
	element.closest('.choices').setAttribute('aria-label', ariaLabel);
};

defaultSelect();
