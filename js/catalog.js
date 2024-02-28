const tabs = document.querySelector('.tabs');
const tabsContents = document.querySelectorAll('.catalog__tabs-content');
const tabBtns = document.querySelectorAll('.tabs__btn');

if (tabs) {
	tabs.addEventListener('click', (e) => {
		if (e.target.classList.contains('tabs__btn')) {
			const tabsPath = e.target.dataset.tabsPath;
			tabBtns.forEach((btn) => {
				btn.setAttribute(
					'aria-selected',
					btn === e.target ? 'true' : 'false'
				);
			});
			tabsHandler(tabsPath);
		}
	});
}

const tabsHandler = (path) => {
	tabsContents.forEach((el) => {
		el.classList.remove('catalog__tabs-content--active');
		el.setAttribute('aria-expanded', 'false');
		el.setAttribute('aria-hidden', 'true');
	});
	const target = document.querySelector(`[data-tabs-target="${path}"]`);
	target.classList.add('catalog__tabs-content--active');
	target.setAttribute('aria-expanded', 'true');
	target.setAttribute('aria-hidden', 'false');
};

new Accordion('.accordion-container', {
	openOnInit: [0]
});
