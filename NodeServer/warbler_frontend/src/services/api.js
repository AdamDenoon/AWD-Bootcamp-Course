import axios from "axios"

export function apiCall(method,path,data){
  return new Promise((res,rej) => {
    return axios[method](path, data)
    .then(res => {
      return resolve(res.data)
    })
    .catch(err=> {
      return reject(err.response.data.error)
    })
  })
}
