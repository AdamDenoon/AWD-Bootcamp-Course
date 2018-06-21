import React, { Component } from 'react'
import Todo from './Todo'
import NewTodoForm from './NewTodoForm'
import { connect } from "react-redux"
import { getTodos, addTodo, removeTodo } from "./actionCreators"
import { Route } from 'react-router-dom'

class TodoList extends Component {
  constructor(props) {
    super(props)
    this.handleAdd = this.handleAdd.bind(this)
  }

  handleAdd(task) {
    this.props.addTodo(task)
  }

  removeTodo(id) {
    this.props.removeTodo(id)
  }

  componentDidMount() {
    this.props.getTodos()
  }

  render() {
    const todos = this.props.todos.map(todo => <Todo removeTodo={this.removeTodo.bind(this, todo._id)} task={todo.task} key={todo._id}/>)
    return (
      <div>
        <Route path="/todos/new" component={props => (
          <NewTodoForm {...props} handleSubmit={this.handleAdd}/>
        )}/>
        <Route exact path="/todos" component={() => <div>{todos}</div>}/>
      </div>
    )
  }
}

const mapStateToProps = (reduxState) => ({ todos: reduxState.todos })

export default connect(mapStateToProps, {getTodos, addTodo, removeTodo})(TodoList)
