const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav');
const navLinks = document.querySelectorAll('.nav__link');

const form = document.querySelector('.search-form');
const openFormBtn = form.querySelector('.search-form__btn-open');
const closeFormBtn = form.querySelector('.search-form__btn-close');

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

openFormBtn.addEventListener('click', () => {
	form.classList.add('search-form--opened');
});

closeFormBtn.addEventListener('click', () => {
	form.classList.remove('search-form--opened');
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
	}
});

document.addEventListener('keydown', (e) => {
	if (e.key === 'Escape') {
		form.classList.remove('search-form--opened');
	}
});
