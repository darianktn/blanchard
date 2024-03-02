const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav');
const navLinks = document.querySelectorAll('.nav__link');

const form = document.querySelector('.search-form');
const openFormBtn = form.querySelector('.search-form__btn-open');
const closeFormBtn = form.querySelector('.search-form__btn-close');

const mediaQuery = window.matchMedia('(max-width: 1024px)');

function handleScreenSizeChange(e) {
	if (e.matches) {
		openFormBtn.type = 'button';
		openFormBtn.addEventListener('click', () => {
			form.classList.add('search-form--opened');
		});

		closeFormBtn.addEventListener('click', () => {
			form.classList.remove('search-form--opened');
		});
	} else {
		openFormBtn.type = 'submit';
		openFormBtn.removeEventListener('click', () => {
			form.classList.add('search-form--opened');
		});

		closeFormBtn.removeEventListener('click', () => {
			form.classList.remove('search-form--opened');
		});
	}
}

mediaQuery.addEventListener('change', handleScreenSizeChange);

handleScreenSizeChange(mediaQuery);

const closeNav = () => {
	burger.setAttribute('aria-expanded', 'false');
	document.body.classList.remove('stop-scroll');
	nav.classList.remove('nav--open');
	burger.classList.remove('burger--active');
};

burger.addEventListener('click', () => {
	const expanded = burger.getAttribute('aria-expanded') === 'true' || false;
	burger.setAttribute('aria-expanded', !expanded);
	document.body.classList.toggle('stop-scroll');
	nav.classList.toggle('nav--open');
	burger.classList.toggle('burger--active');
});

navLinks.forEach((link) => {
	link.addEventListener('click', () => {
		closeNav();
	});
});

document.addEventListener('keydown', (e) => {
	if (e.key === 'Escape') {
		closeNav();
		nav.classList.remove('nav--open');
		form.classList.remove('search-form--opened');
	}
});
