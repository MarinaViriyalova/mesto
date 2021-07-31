export default class Section {
    constructor({ renderer }, containerSelector) {
        this._renderer = renderer;

        this._container = document.querySelector(containerSelector);
    }

    renderItems(data, userId) {
        data.forEach(item => this._renderer(item, userId));
    }

    setItem(element) {
        this._container.prepend(element);
    }
}