document.addEventListener('DOMContentLoaded', function () {
	const telInput = document.querySelector('input[type="tel"]');
	const im = new Inputmask('+7 (999) 999-99-99');
	im.mask(telInput);

	const validation = new JustValidate('.callback');
	validation
		.addField('#cb-name', [
			{
				rule: 'minLength',
				value: 2,
				errorMessage: 'Введите минимум два символа'
			},
			{
				rule: 'maxLength',
				value: 15,
				errorMessage: 'Введите максимум 15 символов'
			},
			{
				rule: 'required',
				errorMessage: 'Введите имя'
			}
		])
		.addField('#cb-tel', [
			{
				rule: 'minLength',
				value: 10
			},
			{
				rule: 'required',
				errorMessage: 'Введите номер телефона'
			},
			{
				rule: 'function',
				validator: function () {
					const phone = telInput.inputmask.unmaskedvalue();
					return phone.length === 10;
				},
				errorMessage: 'Недопустимый формат'
			}
		])
		.onSuccess((event) => {
			console.log('Validation passes and form submitted', event);

			let formData = new FormData(event.target);

			console.log(...formData);

			let xhr = new XMLHttpRequest();

			xhr.onreadystatechange = function () {
				if (xhr.readyState === 4) {
					if (xhr.status === 200) {
						console.log('Отправлено');
					}
				}
			};

			xhr.open('POST', 'mail.php', true);
			xhr.send(formData);

			event.target.reset();
		});
});
