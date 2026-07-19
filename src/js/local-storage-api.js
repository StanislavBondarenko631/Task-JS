export function saveToLocalStorageTask(task) {
  const arrayForStorage = getTasksFromLocalStorage() || [];
  arrayForStorage.push(task);
  localStorage.setItem('tasks', JSON.stringify(arrayForStorage));
}
export function getTasksFromLocalStorage() {
  const result = localStorage.getItem('tasks');
  return JSON.parse(result);
}
