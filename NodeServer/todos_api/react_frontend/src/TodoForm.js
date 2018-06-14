import React, { Component } from 'react'

class TodoForm extends Component {
  constructor(props) {
    super(props)
    this.state = {inputValue: ''}
    this.updateInput = this.updateInput.bind(this)
    this.handleKeyPress = this.handleKeyPress.bind(this)
  }

  updateInput(e) {
    this.setState({inputValue: e.target.value})
  }

  handleKeyPress(e) {
    if (e.key === 'Enter') {
      this.props.addTodo(this.state.inputValue)
      this.setState({inputValue: ''})
    }
  }

  render() {
    return (
      <section className="form">
        <input
          id="todoInput"
          type="text"
          value={this.state.inputValue}
          onChange={this.updateInput}
          onKeyPress={this.handleKeyPress}
        />
      </section>
    )
  }
}

export default TodoForm
