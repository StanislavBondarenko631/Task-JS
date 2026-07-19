export function saveToLocalStorageTask(task) {
  const arrayForStorage = getTasksFromLocalStorage() || [];
  arrayForStorage.push(task);
  localStorage.setItem('tasks', JSON.stringify(arrayForStorage));
}
export function getTasksFromLocalStorage() {
  const result = localStorage.getItem('tasks');
  return JSON.parse(result);
}
export function filterList(id){
  const array = getTasksFromLocalStorage()
  const filteredArray = array.filter(task => task.id !== id)
  localStorage.setItem('tasks', JSON.stringify(filteredArray))
}