import { apiCall } from "../../services/api"
import { addError } from "./errors"
import { LOAD_MESSAGES, REMOVE_MESSAGE } from "../actionTypes"

const loadMessages = messages =>({
  type: LOAD_MESSAGES,
  messages
})

export const fetchMessages = messages => {
  return dispatch => {
    return apiCall("GET", "/api/messages")
      .then(res => dispatch(loadMessages(res)))
      .catch(err => dispatch(addError(err.message)))
  }
}
