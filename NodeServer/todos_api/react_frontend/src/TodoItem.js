import React from 'react';

const TodoItem  = ({name, completed, onToggle, onDelete}) => (
  <li className="task">
    <span onClick={onToggle} className={completed ? 'done' : ''}>
      {name}
    </span>
    <span className="close" onClick={onDelete}> X </span>
  </li>
)

export default TodoItem
