import React from 'react'

const Todo = ({task, id, removeTodo}) => (
  <li>
    {task}
    <button onClick={removeTodo}> X</button>
  </li>
)

export default Todo
