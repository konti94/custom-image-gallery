const mainPicture = document.querySelector('.main-picture img');
const carouselControllers = document.querySelector('.carousel-controllers');
const carouselInner = document.querySelector('.carousel-inner');
const carouselCard = document.querySelectorAll('.carousel-card');

carouselControllers.addEventListener('click', (e) => {
	if (e.target.nodeName === 'BUTTON') {
		Array.from(carouselControllers.children).forEach((item) =>
			item.classList.remove('active')
		);
		if (e.target.classList.contains('first')) {
			carouselInner.style.transform = 'translateX(-0%)';
			e.target.classList.add('active');
		} else if (e.target.classList.contains('second')) {
			carouselInner.style.transform = 'translateX(-33.33333333333333%)';
			e.target.classList.add('active');
		} else if (e.target.classList.contains('third')) {
			carouselInner.style.transform = 'translatex(-66.6666666667%)';
			e.target.classList.add('active');
		}
	}
});

carouselInner.addEventListener('click', (e) => {
	Array.from(carouselCard).forEach((item) => item.classList.remove('active'));
	mainPicture.src = e.target.getAttribute('src');
	e.target.parentElement.classList.add('active');
});
