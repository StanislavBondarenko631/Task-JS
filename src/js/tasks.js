import {
  saveToLocalStorageTask,
  getTasksFromLocalStorage,
  filterList,
} from './local-storage-api';
import { renderTask, renderTaskList } from './render-tasks';
import {nanoid} from "nanoid"


export function onFormSubmit(event) {
  event.preventDefault();
  const { taskName, taskDescription } = event.target.elements;

  if (taskName.value.trim() === '' || taskDescription.value.trim() === '') {
    alert('Будь-ласка заповніть всі поля!');
    return;
  }

  const newTask = {
    id: nanoid(),
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

export function deleteTask(event){
  if ( event.target.nodeName !== "BUTTON")return
  const id = event.target.parentElement.dataset.id
  event.target.parentElement.remove()
  filterList(id)
}
