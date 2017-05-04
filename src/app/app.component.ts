import { Component } from '@angular/core';

import { createStore, Store } from 'redux'
import { todoApp, Todo, State } from './reducers'
import { addTodo, removeTodo, toggleTodo, setVisibilityFilter, VisibilityFilter } from './actions'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  text: string = ''
  todos: Todo[]
  visibilityFilter: string
  store: Store<State>

  constructor() {
    this.store = createStore(todoApp)

    let unsubscribe = this.store.subscribe(() => {
      this.getState()
    })

    this.getState()
  }

  addTodo() {
    if (this.text !== '') {
      this.store.dispatch(addTodo(this.text))
      this.text = ''
    }
  }

  removeTodo(index: number) {
    this.store.dispatch(removeTodo(index))
  }

  toggleTodo(index: number) {
    this.store.dispatch(toggleTodo(index))
  }

  setVisibilityFilter(filter: string) {
    this.store.dispatch(setVisibilityFilter(filter))
  }

  private getState() {
    const state = this.store.getState()

    this.visibilityFilter = state.visibilityFilter
    this.todos = this.getVisibleTodos(state.todos, state.visibilityFilter)
  }

  private getVisibleTodos(todos: Todo[], filter: string) {
    switch (filter) {
      case VisibilityFilter.SHOW_ALL:
        return todos
      case VisibilityFilter.SHOW_COMPLETED:
        return todos.filter(todo => todo.completed)
      case VisibilityFilter.SHOW_ACTIVE:
        return todos.filter(todo => !todo.completed)
      default:
        return todos
    }
  }
}
