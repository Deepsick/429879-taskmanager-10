import {getBoardTemplate} from './components/board';
import {getFiltersTemplate} from './components/filters';
import {getLoadMoreButtonTemplate} from './components/load-more-button';
import {getMenuTemplate} from './components/menu';
import {getTaskTemplate} from './components/task';
import {getTaskEditTemplate} from './components/task-edit';

const TASK_COUNT = 3;

const render = (container, template, position = `beforeend`) => container.insertAdjacentHTML(position, template);

const mainElement = document.querySelector(`.main`);
const mainControlElement = mainElement.querySelector(`.main__control`);

render(mainControlElement, getMenuTemplate());
render(mainElement, getFiltersTemplate());
render(mainElement, getBoardTemplate());

const boardElement = mainElement.querySelector(`.board`);
const taskListElement = boardElement.querySelector(`.board__tasks`);

render(taskListElement, getTaskEditTemplate());
render(boardElement, getLoadMoreButtonTemplate());
new Array(TASK_COUNT).fill(``).forEach(() => render(taskListElement, getTaskTemplate()));
