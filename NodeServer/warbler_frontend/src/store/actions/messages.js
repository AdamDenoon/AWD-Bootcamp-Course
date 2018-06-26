import { apiCall } from "../../services/api"
import { addError } from "./errors"
import { LOAD_MESSAGES, REMOVE_MESSAGE } from "../actionTypes"

const loadMessages = messages =>({
  type: LOAD_MESSAGES,
  messages
})

const remove = id => ({
  type: REMOVE_MESSAGE,
  id
})

export const fetchMessages = messages => {
  return dispatch => {
    return apiCall("GET", "/api/messages")
      .then(res => dispatch(loadMessages(res)))
      .catch(err => dispatch(addError(err.message)))
  }
}

export const postNewMessage = text => (dispatch, getState) => {
  let { currentUser } = getState()
  const id = currentUser.user.id
  return apiCall("POST", `/api/users/${id}/messages`, { text })
    .then(res => {})
    .catch(err => dispatch(addError(err.message)))
}

export const removeMessage = (user_id, message_id) => dispatch => {
  return apiCall("DELETE", `/api/users/${user_id}/messages/${message_id}`)
    .then(res => dispatch(remove(message_id)))
    .catch(err => dispatch(addError(err.message)))
}
