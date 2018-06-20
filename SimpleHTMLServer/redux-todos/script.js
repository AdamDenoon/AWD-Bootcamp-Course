const initialState = {
	todos: [],
	id: 0
}

rootReducer = (state=initialState,action) => {
  switch (action.type) {
    case "ADD_TODO":
			let newState = {...state}
      newState.id++
      return {
				...newState,
				todos: [...newState.todos, { task: action.task, id: newState.id}]
			}
    case "REMOVE_TODO":
			let todos = state.todos.filter(todo => todo.id !== +action.id)
      return {
				...state,
				todos
			}
    default:
      return state
  }
	return state
}

var store = Redux.createStore(rootReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

$(document).ready(() => {
	$('ul').on("click", "button", (e) => {
		store.dispatch({
			type: "REMOVE_TODO",
			id: $(e.target).attr("id")
		})
		$(e.target).parent().remove()
	})

  $('form').on("submit", (e) => {
		e.preventDefault()
		let newTask = $("#task").val()
		store.dispatch({
			type: "ADD_TODO",
			task: newTask
		})
		let currentState = store.getState()
		let $newLi = $("<li>", {
			text: newTask
		})
		let $newButton = $("<button>", {
			text: "X",
			id: currentState.id
		})
		$newLi.append($newButton);
		$("#todos").append($newLi)
		$("form").trigger("reset")
	})

  updateUI = () => {
    const currentState = store.getState()
		$("#todos").html("")
		currentState.todos.forEach((todo) => $("#todos").append(`<li class='task'">${todo.task}</li>`))
  }

  updateUI()
})
