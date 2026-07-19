import {
  saveToLocalStorageTask,
  getTasksFromLocalStorage,
} from './local-storage-api';
import { renderTask, renderTaskList } from './render-tasks';

export function onFormSubmit(event) {
  event.preventDefault();
  const { taskName, taskDescription } = event.target.elements;

  if (taskName.value.trim() === '' || taskDescription.value.trim() === '') {
    alert('Будь-ласка заповніть всі поля!');
    return;
  }

  const newTask = {
    name: taskName.value,
    description: taskDescription.value,
  };
  saveToLocalStorageTask(newTask);

  renderTask(newTask);

  event.currentTarget.reset();
}

export function initPage() {
  renderTaskList(getTasksFromLocalStorage() || []);
}
