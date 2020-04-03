const TASK_COUNT = 3;

import {createSiteMenuTemplate} from "./components/menu.js";
import {createFiltersTemplate} from "./components/filters.js";
import {createSortFiltersTemplate} from "./components/sortfilters.js";
import {createTaskTemplate} from "./components/task.js";
import {createTaskEditTemplate} from "./components/taskedit.js";
import {createLoadMoreButtonTemplate} from "./components/loadmorebutton.js";

const render = (container, template, place = `beforeend`) => {
  container.insertAdjacentHTML(place, template);
};

const siteMainElement = document.querySelector(`.main`);
const siteHeaderElement = siteMainElement.querySelector(`.main__control`);

render(siteHeaderElement, createSiteMenuTemplate());
render(siteHeaderElement, createFiltersTemplate(), `afterend`);

const boardElement = siteMainElement.querySelector(`.board`);
const taskListElement = siteMainElement.querySelector(`.board__tasks`);

render(boardElement, createSortFiltersTemplate(), `afterbegin`);

render(taskListElement, createTaskEditTemplate());

for (let i = 0; i < TASK_COUNT; i++) {
  render(taskListElement, createTaskTemplate());
}

render(boardElement, createLoadMoreButtonTemplate());
