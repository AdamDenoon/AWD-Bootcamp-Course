const initialState = {
	count: 0
}

rootReducer = (state=initialState,action) => {
  let newState = {...state}
  switch (action.type) {
    case "INCREMENT":
      newState.count++
      return newState
    case "DECREMENT":
      newState.count--
      return newState
    default:
      return state
  }
	return state
}

var store = Redux.createStore(rootReducer)

$(document).ready(() => {
  $("#increment").on('click', () => {
    store.dispatch({type: "INCREMENT"})
    updateUI()
  })

  $("#decrement").on('click', () => {
    store.dispatch({type: "DECREMENT"})
    updateUI()
  })

  updateUI = () => {
    const currentState = store.getState()
    $("#counter").text(currentState.count)
  }

  updateUI()
})
