"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _CustomImage_src, _CustomImage_description, _CustomImage_title, _CustomImage_date, _CustomCard_element, _CarouselController_id, _CustomGallery_instances, _CustomGallery_images, _CustomGallery_createMainImg, _CustomGallery_createCarousel;
class CustomImage {
    constructor(src, description, title, date) {
        _CustomImage_src.set(this, void 0);
        _CustomImage_description.set(this, void 0);
        _CustomImage_title.set(this, void 0);
        _CustomImage_date.set(this, void 0);
        __classPrivateFieldSet(this, _CustomImage_src, src, "f");
        __classPrivateFieldSet(this, _CustomImage_description, description ? description : '', "f");
        __classPrivateFieldSet(this, _CustomImage_title, title ? title : '', "f");
        __classPrivateFieldSet(this, _CustomImage_date, date ? date : new Date(), "f");
    }
    getSrc() {
        return __classPrivateFieldGet(this, _CustomImage_src, "f");
    }
    getTitle() {
        return __classPrivateFieldGet(this, _CustomImage_title, "f");
    }
    getDesc() {
        return __classPrivateFieldGet(this, _CustomImage_description, "f");
    }
    getDate() {
        return __classPrivateFieldGet(this, _CustomImage_date, "f");
    }
    createImage() {
        return `<img src="${this.getSrc()}" alt="${this.getDesc()}" />`;
    }
}
_CustomImage_src = new WeakMap(), _CustomImage_description = new WeakMap(), _CustomImage_title = new WeakMap(), _CustomImage_date = new WeakMap();
class CustomCard {
    constructor(element) {
        _CustomCard_element.set(this, void 0);
        __classPrivateFieldSet(this, _CustomCard_element, element, "f");
    }
    createCard() {
        return `<button type="button" class="carousel-card">${__classPrivateFieldGet(this, _CustomCard_element, "f")}</button>`;
    }
}
_CustomCard_element = new WeakMap();
class CarouselController {
    constructor(id) {
        _CarouselController_id.set(this, void 0);
        __classPrivateFieldSet(this, _CarouselController_id, id, "f");
    }
    getId() {
        return __classPrivateFieldGet(this, _CarouselController_id, "f");
    }
    createController() {
        return `<button type="button" class="carousel-controller" data-translate="${this.getId()}"></button>`;
    }
}
_CarouselController_id = new WeakMap();
class CustomGallery {
    constructor(images) {
        _CustomGallery_instances.add(this);
        _CustomGallery_images.set(this, void 0);
        __classPrivateFieldSet(this, _CustomGallery_images, images, "f");
    }
    getImages() {
        return __classPrivateFieldGet(this, _CustomGallery_images, "f");
    }
    getImagesLength() {
        return __classPrivateFieldGet(this, _CustomGallery_images, "f").length;
    }
    createGallery() {
        __classPrivateFieldGet(this, _CustomGallery_instances, "m", _CustomGallery_createMainImg).call(this);
        __classPrivateFieldGet(this, _CustomGallery_instances, "m", _CustomGallery_createCarousel).call(this);
        Array.from(carouselControllers.children).forEach((item) => item.addEventListener('click', function (e) {
            const current = document.querySelector('.carousel-controller.active');
            current === null || current === void 0 ? void 0 : current.classList.remove('active');
            if (this.nodeName === 'BUTTON') {
                if (this.classList.contains('first')) {
                    carouselInner.style.transform = 'translateX(-0%)';
                    this.classList.add('active');
                }
                else {
                    let translateNumber;
                    const buttonLength = Math.ceil(images.length / 3);
                    const translate = this.getAttribute('data-translate')
                        ? this.getAttribute('data-translate')
                        : 0;
                    if (images.length % 3 === 0) {
                        translateNumber =
                            (-100 / buttonLength) * translate;
                    }
                    else {
                        translateNumber =
                            (-100 / buttonLength - 1) * translate;
                    }
                    carouselInner.style.transform = `translateX(${translateNumber}%)`;
                    this.classList.add('active');
                }
            }
        }));
        const mainPicture = document.querySelector('.main-picture img');
        const carouselCard = document.querySelectorAll('.carousel-card');
        Array.from(carouselCard).forEach((item) => {
            item.addEventListener('click', function (e) {
                const current = document.querySelector('.carousel-card.active');
                current === null || current === void 0 ? void 0 : current.classList.remove('active');
                const child = this.firstChild;
                const src = child.getAttribute('src');
                mainPicture.setAttribute('src', src);
                this.classList.add('active');
            });
        });
    }
}
_CustomGallery_images = new WeakMap(), _CustomGallery_instances = new WeakSet(), _CustomGallery_createMainImg = function _CustomGallery_createMainImg() {
    const mainPictureSrc = './assets/images/img1.jpg';
    const mainImg = new CustomImage(mainPictureSrc);
    mainPictureContainer.innerHTML += mainImg.createImage();
}, _CustomGallery_createCarousel = function _CustomGallery_createCarousel() {
    __classPrivateFieldGet(this, _CustomGallery_images, "f").forEach((item) => {
        let image = new CustomImage(item.src, item.description);
        let card = new CustomCard(image.createImage());
        carouselInner.innerHTML += card.createCard();
    });
    const buttonLength = Math.ceil(this.getImagesLength() / 3);
    for (let i = 0; i < buttonLength; i++) {
        let controller = new CarouselController(i);
        carouselControllers.innerHTML += controller.createController();
    }
};
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
const mainPictureContainer = document.querySelector('.main-picture');
const carouselInner = document.querySelector('.carousel-inner');
const carouselControllers = document.querySelector('.carousel-controllers');
window.addEventListener('load', () => {
    const gallery = new CustomGallery(images);
    gallery.createGallery();
    const firstCarouselCard = document.querySelector('.carousel-card');
    const firstCarouselController = document.querySelector('.carousel-controller');
    firstCarouselCard.classList.add('active');
    firstCarouselController.classList.add('active', 'first');
});
