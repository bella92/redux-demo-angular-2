export const ActionTypes = {
  ADD_TODO: 'ADD_TODO',
  REMOVE_TODO: 'REMOVE_TODO',
  TOGGLE_TODO: 'TOGGLE_TODO',
  SET_VISIBILITY_FILTER: 'SET_VISIBILITY_FILTER'
}

export const VisibilityFilter = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}

export function addTodo(text: string) {
  return {
    type: ActionTypes.ADD_TODO,
    text
  }
}

export function removeTodo(index: number) {
  return {
    type: ActionTypes.REMOVE_TODO,
    index
  }
}

export function toggleTodo(index: number) {
  return {
    type: ActionTypes.TOGGLE_TODO,
    index
  }
}

export function setVisibilityFilter(filter: string) {
  return {
    type: ActionTypes.SET_VISIBILITY_FILTER,
    filter
  }
}