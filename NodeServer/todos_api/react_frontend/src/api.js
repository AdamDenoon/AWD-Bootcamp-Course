const APIURL = '/api/todos/';

export async function getTodos() {
  return fetch(APIURL)
  .then(resp => {
    if (!resp.ok) {
      if (resp.status >= 400 && resp.status < 500) {
        return resp.json().then(data => {
          let err = {errorMessage: data.message};
          throw err;
        })
      } else {
        let err = {errorMessage: 'Server unavailable. Please try again later.'};
        throw err;
      }
    }
    return resp.json();
  })
  .catch(err => console.log(err.errorMessage))
}

export async function addTodo(value) {
  return fetch(APIURL, {
    method: 'post',
    headers: new Headers({
      'Content-Type': 'application/json'
    }),
    body: JSON.stringify({name: value})
  })
  .then(resp => {
    if (!resp.ok) {
      if (resp.status >= 400 && resp.status < 500) {
        return resp.json().then(data => {
          let err = {errorMessage: data.message};
          throw err;
        })
      } else {
        let err = {errorMessage: 'Server unavailable. Please try again later.'};
        throw err;
      }
    }
    return resp.json();
  })
  .catch(err => console.log(err.errorMessage))
}

export async function toggleTodo(todo) {
  const updateUrl = `${APIURL}${todo._id}`
  return fetch(updateUrl, {
    method: 'put',
    headers: new Headers({
      'Content-Type': 'application/json'
    }),
    body: JSON.stringify({completed: !todo.completed})
  })
  .then(resp => {
    if (!resp.ok) {
      if (resp.status >= 400 && resp.status < 500) {
        return resp.json().then(data => {
          let err = {errorMessage: data.message};
          throw err;
        })
      } else {
        let err = {errorMessage: 'Server unavailable. Please try again later.'};
        throw err;
      }
    }
    return resp.json();
  })
  .catch(err => console.log(err.errorMessage))
}

export async function deleteTodo(id) {
  const deleteUrl = `${APIURL}${id}`
  return fetch(deleteUrl, {
    method: 'delete'
  })
  .then(resp => {
    if (!resp.ok) {
      if (resp.status >= 400 && resp.status < 500) {
        return resp.json().then(data => {
          let err = {errorMessage: data.message};
          throw err;
        })
      } else {
        let err = {errorMessage: 'Server unavailable. Please try again later.'};
        throw err;
      }
    }
    return resp.json();
  })
  .catch(err => console.log(err.errorMessage))
}
