const mainPicture = document.querySelector('.main-picture img');
const carouselInner = document.querySelector('.carousel-inner');
const carouselControllers = document.querySelector('.carousel-controllers');

const imagesLength = 12;
const buttonLength = Math.ceil(imagesLength / 3);
let translateNumber;

window.addEventListener('load', () => {
	for (let i = 1; i <= imagesLength; i++) {
		let card = `
			<button type="button" class="carousel-card">
				<img src="./assets/images/img${i}.jpg" />
			</button>
		`;
		carouselInner.innerHTML += card;
	}

	for (let i = 0; i < buttonLength; i++) {
		let button = `
			<button class="carousel-controller" data-translate="${i}"></button>
		`;
		carouselControllers.innerHTML += button;
	}

	const carouselCard = document.querySelectorAll('.carousel-card');
	const firstCarouselCard = document.querySelector('.carousel-card');
	const firstCarouselController = document.querySelector(
		'.carousel-controller'
	);

	firstCarouselCard.classList.add('active');
	firstCarouselController.classList.add('active', 'first');

	carouselControllers.addEventListener('click', (e) => {
		if (e.target.nodeName === 'BUTTON') {
			Array.from(carouselControllers.children).forEach((item) =>
				item.classList.remove('active')
			);
			if (e.target.classList.contains('first')) {
				carouselInner.style.transform = 'translateX(-0%)';
				e.target.classList.add('active');
			} else {
				if (imagesLength % 3 === 0) {
					translateNumber =
						(-100 / buttonLength) *
						e.target.getAttribute('data-translate');
				} else {
					translateNumber =
						(-100 / buttonLength - 1) *
						e.target.getAttribute('data-translate');
				}
				carouselInner.style.transform = `translateX(${translateNumber}%)`;
				e.target.classList.add('active');
			}
		}
	});

	carouselInner.addEventListener('click', (e) => {
		Array.from(carouselCard).forEach((item) =>
			item.classList.remove('active')
		);
		mainPicture.src = e.target.getAttribute('src');
		e.target.parentElement.classList.add('active');
	});
});
