import {createElement} from '../utils';

const createSortTemplate = () => (
  `<div class="board__filter-list">
    <a href="#" class="board__filter">SORT BY DEFAULT</a>
    <a href="#" class="board__filter">SORT BY DATE up</a>
    <a href="#" class="board__filter">SORT BY DATE down</a>
  </div>
  <div class="board__tasks"></div>`
);

export default class Sort {
  constructor() {
    this._element = null;
  }

  getTemplate() {
    return createSortTemplate();
  }

  getElement() {
    if (!this._element) {
      this._element = createElement(this.getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}
