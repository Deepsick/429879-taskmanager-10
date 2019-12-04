import BoardComponent from './components/board';
import FilterComponent from './components/filter';
import LoadMoreButtonComponent from './components/load-more-button';
import TaskEditComponent from './components/task-edit';
import TaskComponent from './components/task';
import SiteMenuComponent from './components/site-menu';
import {generateTasks} from './mock/task';
import {generateFilters} from './mock/filter';
import {render, RenderPosition} from './utils';

const TASK_COUNT = 22;
const SHOWING_TASKS_COUNT_ON_START = 8;
const SHOWING_TASKS_COUNT_BY_BUTTON = 8;

const renderTask = (task, container) => {
  const taskComponent = new TaskComponent(task);
  const taskEditComponent = new TaskEditComponent(task);

  const editButton = taskComponent.getElement().querySelector(`.card__btn--edit`);
  editButton.addEventListener(`click`, () => {
    container.replaceChild(taskEditComponent.getElement(), taskComponent.getElement());
  });

  const editForm = taskEditComponent.getElement().querySelector(`form`);
  editForm.addEventListener(`submit`, () => {
    container.replaceChild(taskComponent.getElement(), taskEditComponent.getElement());
  });

  render(container, taskComponent.getElement(), RenderPosition.BEFOREEND);
};

const siteMainElement = document.querySelector(`.main`);
const siteHeaderElement = siteMainElement.querySelector(`.main__control`);

render(siteHeaderElement, new SiteMenuComponent().getElement(), RenderPosition.BEFOREEND);

const filters = generateFilters();
render(siteMainElement, new FilterComponent(filters).getElement(), RenderPosition.BEFOREEND);

const boardComponent = new BoardComponent();
render(siteMainElement, boardComponent.getElement(), RenderPosition.BEFOREEND);

const taskListElement = siteMainElement.querySelector(`.board__tasks`);
const tasks = generateTasks(TASK_COUNT);

let showingTasksCount = SHOWING_TASKS_COUNT_ON_START;
tasks
  .slice(0, showingTasksCount)
  .forEach((task) => renderTask(task, taskListElement));

const loadMoreButtonComponent = new LoadMoreButtonComponent();
render(boardComponent.getElement(), loadMoreButtonComponent.getElement(), RenderPosition.BEFOREEND);


loadMoreButtonComponent.getElement().addEventListener(`click`, () => {
  const prevTasksCount = showingTasksCount;
  showingTasksCount = showingTasksCount + SHOWING_TASKS_COUNT_BY_BUTTON;

  tasks.slice(prevTasksCount, showingTasksCount)
    .forEach((task) => renderTask(task, taskListElement));

  if (showingTasksCount >= tasks.length) {
    loadMoreButtonComponent.removeElement();
    loadMoreButtonComponent.getElement().remove();
  }
});
