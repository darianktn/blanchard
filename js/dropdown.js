const buttons = document.querySelectorAll('.dropdowns__button');

buttons.forEach(function (button) {
	const dropdown = button.nextElementSibling;
	const icon = button.querySelector('.dropdowns__icon');

	button.addEventListener('click', function () {
		buttons.forEach(function (btn) {
			const btnIcon = btn.querySelector('.dropdowns__icon');
			if (btn !== button) {
				btn.nextElementSibling.classList.remove('dropdown--visible');
				btnIcon.classList.remove('dropdown__icon--rotate');
				btn.setAttribute('aria-expanded', 'false');
			}
		});

		dropdown.classList.toggle('dropdown--visible');
		icon.classList.toggle('dropdown__icon--rotate');
		button.setAttribute(
			'aria-expanded',
			button.getAttribute('aria-expanded') !== 'true' ? 'true' : 'false'
		);
	});
});

document.addEventListener('click', function (e) {
	const target = e.target;
	const isDropdownButton = target.closest('.dropdowns__button');
	const isDropdown = target.closest('.dropdown');

	if (!isDropdownButton && !isDropdown) {
		buttons.forEach(function (button) {
			button.nextElementSibling.classList.remove('dropdown--visible');
			button
				.querySelector('.dropdowns__icon')
				.classList.remove('dropdown__icon--rotate');
			button.setAttribute('aria-expanded', 'false');
		});
	}
});
