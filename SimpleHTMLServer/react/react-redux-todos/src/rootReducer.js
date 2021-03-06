import { ADD_TODO, REMOVE_TODO } from './actionCreators'
const initialState = {
  todos: [],
  id: 0
}

export default function rootReducer(state = initialState, action) {
  switch(action.type) {
    case ADD_TODO:
      var newState = {...state}
      newState.id++
      return {
        ...newState,
        todos: [...newState.todos, {task: action.task, id: newState.id}]
      }
    case REMOVE_TODO:
      const todos = state.todos.filter(todo => todo.id !== action.id)
      return {
        ...state,
        todos
      }
    default:
      return state
  }
}
