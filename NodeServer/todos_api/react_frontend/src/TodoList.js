import React, {Component} from 'react';
import TodoItem from './TodoItem';
import TodoForm from './TodoForm';
import * as apiCalls from './api';

class TodoList extends Component {
  constructor(props) {
    super(props)
    this.state = { todos: [] }
    this.addTodo = this.addTodo.bind(this)
  }

  async addTodo(value) {
    let newTodo = await apiCalls.addTodo(value)
    this.setState({todos: [...this.state.todos, newTodo]})
  }

  async loadTodos() {
    let todos = await apiCalls.getTodos()
    this.setState({todos})
  }

  async toggleTodo(todo) {
    let updatedTodo = await apiCalls.toggleTodo(todo)
    const todos = this.state.todos.map(todo =>
        (todo._id === updatedTodo._id) ? {...todo, completed: !todo.completed} : todo
      )
    this.setState({todos: todos})
  }

  async deleteTodo(id) {
    await apiCalls.deleteTodo(id)
    const todos = this.state.todos.filter(todo => todo._id !== id)
    this.setState({todos: todos})
  }

  componentDidMount() {
    this.loadTodos();
  }

  render() {
    const todos = this.state.todos.map(todo => (
      <TodoItem
        key={todo._id}
        {...todo}
        onToggle={this.toggleTodo.bind(this,todo)}
        onDelete={this.deleteTodo.bind(this,todo._id)} />
    ))
    return (
      <div>
        <header>
          <h1>todo<span>list</span></h1>
          <h2>A simple todo list app</h2>
        </header>
        <TodoForm addTodo={this.addTodo} />
        <ol class="list">
          {todos}
        </ol>
      </div>
    )
  }
}

export default TodoList;
