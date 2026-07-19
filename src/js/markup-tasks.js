import { getTasksFromLocalStorage } from './local-storage-api';

export function markup({ id, name, description }) {
  return `<li data-id=${id} class="task-list-item">
        <button class="task-list-item-btn">Delete</button>
        <h3>${name}</h3>
        <p>${description}</p>
      </li>`;
}
export function markupList(array) {
  return array.map(item => markup(item)).join('');
}
