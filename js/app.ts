class CustomImage {
	#src: string;
	#description: string;
	#title: string;
	#date: Date;

	constructor(
		src: string,
		description?: string,
		title?: string,
		date?: Date
	) {
		this.#src = src;
		this.#description = description ? description : '';
		this.#title = title ? title : '';
		this.#date = date ? date : new Date();
	}

	getSrc(): string {
		return this.#src;
	}

	getTitle(): string {
		return this.#title;
	}

	getDesc(): string {
		return this.#description;
	}

	getDate(): Date {
		return this.#date;
	}

	createImage(): string {
		return `<img src="${this.getSrc()}" alt="${this.getDesc()}" />`;
	}
}

class CustomCard {
	#element: string;

	constructor(element: string) {
		this.#element = element;
	}

	createCard(): string {
		return `<button type="button" class="carousel-card">${
			this.#element
		}</button>`;
	}
}

class CarouselController {
	#id: number;

	constructor(id: number) {
		this.#id = id;
	}

	getId(): number {
		return this.#id;
	}

	createController(): string {
		return `<button type="button" class="carousel-controller" data-translate="${this.getId()}"></button>`;
	}
}

class CustomGallery {
	#images;

	constructor(images: any) {
		this.#images = images;
	}

	getImages(): object[] {
		return this.#images;
	}

	getImagesLength(): number {
		return this.#images.length;
	}

	#createMainImg(): void {
		const mainPictureSrc: string = './assets/images/img1.jpg';
		const mainImg: CustomImage = new CustomImage(mainPictureSrc);

		mainPictureContainer.innerHTML += mainImg.createImage();
	}

	#createCarousel(): void {
		this.#images.forEach((item: any) => {
			let image = new CustomImage(item.src, item.description);
			let card = new CustomCard(image.createImage());
			carouselInner.innerHTML += card.createCard();
		});

		const buttonLength: number = Math.ceil(this.getImagesLength() / 3);
		for (let i = 0; i < buttonLength; i++) {
			let controller = new CarouselController(i);
			carouselControllers.innerHTML += controller.createController();
		}
	}

	createGallery() {
		this.#createMainImg();
		this.#createCarousel();

		Array.from(carouselControllers.children).forEach((item) =>
			item.addEventListener(
				'click',
				function (this: HTMLElement, e: Event) {
					const current = document.querySelector(
						'.carousel-controller.active'
					);
					current?.classList.remove('active');
					if (this.nodeName === 'BUTTON') {
						if (this.classList.contains('first')) {
							carouselInner.style.transform = 'translateX(-0%)';
							this.classList.add('active');
						} else {
							let translateNumber;
							const buttonLength: number = Math.ceil(
								images.length / 3
							);
							const translate: any = this.getAttribute(
								'data-translate'
							)
								? this.getAttribute('data-translate')
								: 0;
							if (images.length % 3 === 0) {
								translateNumber =
									(-100 / buttonLength) * translate;
							} else {
								translateNumber =
									(-100 / buttonLength - 1) * translate;
							}
							carouselInner.style.transform = `translateX(${translateNumber}%)`;
							this.classList.add('active');
						}
					}
				}
			)
		);

		const mainPicture = document.querySelector(
			'.main-picture img'
		) as HTMLImageElement;
		const carouselCard = document.querySelectorAll('.carousel-card');
		Array.from(carouselCard).forEach((item) => {
			item.addEventListener(
				'click',
				function (this: HTMLElement, e: Event) {
					const current = document.querySelector(
						'.carousel-card.active'
					);
					current?.classList.remove('active');
					const child: any = this.firstChild;
					const src: any = child.getAttribute('src');

					mainPicture.setAttribute('src', src);
					this.classList.add('active');
				}
			);
		});
	}
}

const images = [
	{
		src: './assets/images/img1.jpg',
		description: 'tenger',
	},
	{
		src: './assets/images/img2.jpg',
		description: 'hegyek',
	},
	{
		src: './assets/images/img3.jpg',
		description: 'tengerpart',
	},
	{
		src: './assets/images/img4.jpg',
	},
	{
		src: './assets/images/img5.jpg',
	},
	{
		src: './assets/images/img6.jpg',
	},
	{
		src: './assets/images/img7.jpg',
	},
	{
		src: './assets/images/img8.jpg',
	},
	{
		src: './assets/images/img9.jpg',
	},
];

const mainPictureContainer = document.querySelector(
	'.main-picture'
) as HTMLDivElement;
const carouselInner = document.querySelector(
	'.carousel-inner'
) as HTMLDivElement;
const carouselControllers = document.querySelector(
	'.carousel-controllers'
) as HTMLDivElement;

window.addEventListener('load', () => {
	const gallery = new CustomGallery(images);
	gallery.createGallery();

	const firstCarouselCard = document.querySelector(
		'.carousel-card'
	) as HTMLButtonElement;
	const firstCarouselController = document.querySelector(
		'.carousel-controller'
	) as HTMLButtonElement;

	firstCarouselCard.classList.add('active');
	firstCarouselController.classList.add('active', 'first');
});
