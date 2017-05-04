import { ActionTypes, VisibilityFilter } from './actions'

export interface Todo {
  text: string,
  completed: boolean
}

export interface State {
  todos: Todo[]
  visibilityFilter: string
}

const initialState: State = {
  todos: [],
  visibilityFilter: VisibilityFilter.SHOW_ALL
}

export function todoApp(state: State = initialState, action): State {
  switch (action.type) {
    case ActionTypes.ADD_TODO:
      return Object.assign({}, state, {
        todos: [...state.todos, {
          text: action.text,
          completed: false
        }]
      })

    case ActionTypes.REMOVE_TODO:
      const remainingTodos = state.todos.filter((todo, index) => {
        return action.index !== index
      })

      return Object.assign({}, state, { todos: remainingTodos })

    case ActionTypes.TOGGLE_TODO:
      const toggledTodos = state.todos.map((todo, index) => {
        if (action.index === index) {
          return Object.assign({}, todo, {
            completed: !todo.completed
          })
        }

        return todo
      })

      return Object.assign({}, state, { todos: toggledTodos })

    case ActionTypes.SET_VISIBILITY_FILTER:
      return Object.assign({}, state, { visibilityFilter: action.filter })

    default:
      return state
  }
}