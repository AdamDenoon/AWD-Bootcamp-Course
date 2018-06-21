import { apiCall } from "../../services/api"
import { SET_CURRENT_USER } from "../actionTypes"

function setCurrentUser(user) {
  return {
    type: SET_CURRENT_USER,
    user
  }
}

export function authUser(type, userData){
  return dispatch =>{
    return new Promise((res,rej) => {
      return apiCall("POST", `/api/auth/${type}`, userData).then()
    })
  }
}
