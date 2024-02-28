const heroSwiper = new Swiper('.hero__swiper', {
	allowTouchMove: false,
	loop: true,
	effect: 'fade',
	crossFade: true,
	speed: 5000,
	autoplay: {
		delay: 10000
	}
});

const gallerySwiper = new Swiper('.gallery__swiper', {
	a11y: {
		prevSlideMessage: 'Предыдущий слайд',
		nextSlideMessage: 'Следующий слайд'
	},

	navigation: {
		nextEl: '.gallery__swiper-button-next',
		prevEl: '.gallery__swiper-button-prev'
	},

	pagination: {
		el: '.gallery-pagination',
		type: 'fraction'
	},

	breakpoints: {
		320: {
			slidesPerView: 1,
			slidesPerGroup: 1
		},

		376: {
			slidesPerView: 2,
			spaceBetween: 38,
			slidesPerGroup: 2
		},

		768: {
			slidesPerView: 2,
			spaceBetween: 34,
			slidesPerGroup: 2
		},

		1440: {
			slidesPerView: 3,
			spaceBetween: 50,
			slidesPerGroup: 3
		}
	}
});

const eventsSwiper = new Swiper('.events__swiper', {
	loop: false,

	a11y: {
		prevSlideMessage: 'Предыдущий слайд',
		nextSlideMessage: 'Следующий слайд'
	},

	navigation: {
		nextEl: '.events__swiper-button-next',
		prevEl: '.events__swiper-button-prev',
		ariaLabel: {
			next: 'Следующий слайд',
			prev: 'Предыдущий слайд'
		}
	},

	pagination: {
		el: '.events-pagination',
		clickable: true
	},

	breakpoints: {
		767: {
			slidesPerView: 1,
			slidesPerGroup: 1
		},

		768: {
			slidesPerView: 2,
			spaceBetween: 34,
			slidesPerGroup: 2
		},

		1024: {
			slidesPerView: 3,
			spaceBetween: 27,
			slidesPerGroup: 3
		},

		1440: {
			slidesPerView: 3,
			spaceBetween: 50
		}
	}
});

const projectsSwiper = new Swiper('.partners__swiper', {
	a11y: {
		prevSlideMessage: 'Предыдущий слайд',
		nextSlideMessage: 'Следующий слайд'
	},

	navigation: {
		nextEl: '.partners__swiper-button-next',
		prevEl: '.partners__swiper-button-prev'
	},

	breakpoints: {
		570: {
			slidesPerView: 2,
			spaceBetween: 32,
			slidesPerGroup: 2
		},

		769: {
			slidesPerView: 2,
			spaceBetween: 50,
			slidesPerGroup: 2
		},

		1440: {
			slidesPerView: 2,
			spaceBetween: 50,
			slidesPerGroup: 2
		},

		1650: {
			slidesPerView: 3,
			spaceBetween: 50,
			slidesPerGroup: 3
		}
	}
});
