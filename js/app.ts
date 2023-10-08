class CustomElement {
	parent: string;
	child: string;

	constructor(parent: string, child: string) {
		this.parent = parent;
		this.child = child;
	}

	render() {
		this.parent += this.child;
	}
}

class CustomImage {
	#src: string;
	#title: string;
	#description: string;
	#date: Date;

	constructor(
		src: string,
		title?: string,
		description?: string,
		date?: Date
	) {
		this.#src = src;
		this.#title = title ? title : '';
		this.#description = description ? description : '';
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
	createCard(): string {
		return '<button type="button" class="carousel-card"></button>';
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
