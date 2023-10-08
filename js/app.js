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
var _CustomImage_src, _CustomImage_title, _CustomImage_description, _CustomImage_date, _CarouselController_id;
class CustomElement {
    constructor(parent, child) {
        this.parent = parent;
        this.child = child;
    }
    render() {
        this.parent += this.child;
    }
}
class CustomImage {
    constructor(src, title, description, date) {
        _CustomImage_src.set(this, void 0);
        _CustomImage_title.set(this, void 0);
        _CustomImage_description.set(this, void 0);
        _CustomImage_date.set(this, void 0);
        __classPrivateFieldSet(this, _CustomImage_src, src, "f");
        __classPrivateFieldSet(this, _CustomImage_title, title ? title : '', "f");
        __classPrivateFieldSet(this, _CustomImage_description, description ? description : '', "f");
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
_CustomImage_src = new WeakMap(), _CustomImage_title = new WeakMap(), _CustomImage_description = new WeakMap(), _CustomImage_date = new WeakMap();
class CustomCard {
    createCard() {
        return '<button type="button" class="carousel-card"></button>';
    }
}
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
const tesztImage = new CustomImage('./assets/images/img1.jpg');
const tesztCard = new CustomCard();
const tesztController = new CarouselController(1);
console.log(tesztImage.createImage());
console.log(tesztCard.createCard());
console.log(tesztController.createController());
