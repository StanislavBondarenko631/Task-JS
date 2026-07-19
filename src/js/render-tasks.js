import { markup } from "./markup-tasks"
import refs from "./refs"

export function renderTask(data) {
  refs.list.insertAdjacentHTML("afterbegin", markup(data))
}
