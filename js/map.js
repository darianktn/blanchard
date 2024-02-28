let center = [55.760357, 37.614384];

function init() {
	let map = new ymaps.Map('map', {
		center: center,
		zoom: 15
	});

	let placemark = new ymaps.Placemark(
		center,
		{ hintContent: 'Отметка галереи' },
		{
			iconLayout: 'default#image',
			iconImageHref: '../assets/icons/placemark.svg',
			iconImageSize: [20, 20],
			iconImageOffset: [-10, -7]
		}
	);

	map.controls.remove('searchControl');
	map.controls.remove('trafficControl');
	map.controls.remove('typeSelector');
	map.controls.remove('fullscreenControl');
	map.controls.remove('rulerControl');
	map.behaviors.disable(['scrollZoom']);

	map.geoObjects.add(placemark);
}

ymaps.ready(init);
