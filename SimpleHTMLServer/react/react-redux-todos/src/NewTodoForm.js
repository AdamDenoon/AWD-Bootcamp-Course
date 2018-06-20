import React, { Component } from 'react'
import { connect } from "react-redux"
import { addTodo, removeTodo } from "./actionCreators"

class NewTodoForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      task: ""
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault()
    this.props.handleSubmit(this.state.task)
    e.target.reset()
    this.props.history.push("/todos")
  }
  handleChange(e) {
    this.setState({[e.target.name]: e.target.value})
  }
  removeTodo(id) {
    this.props.removeTodo(id)
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="task">Task </label>
        <input type="text" name="task" id="task" onChange={this.handleChange}/>
        <button>Add a Todo!</button>
      </form>
    )
  }
}

const mapStateToProps = (reduxState) => ({ todos: reduxState.todos })

export default connect(mapStateToProps, {addTodo, removeTodo})(NewTodoForm)
