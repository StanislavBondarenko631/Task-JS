import { markup, markupList } from './markup-tasks';
import refs from './refs';

export function renderTask(data) {
  refs.list.insertAdjacentHTML('afterbegin', markup(data));
}
export function renderTaskList(array) {
  refs.list.innerHTML = markupList(array);
}
