import React, { Component } from 'react';
import './App.css';

const TodoList = ({todos}) => {
    const todoItems = todos.map((todo,i) => <li key={i}>{todo}</li>);
    return (
      <ol>
        {todoItems}
      </ol>
    );
}

class App extends Component {
  constructor(props) {
    super(props)
    this.submitForm = this.submitForm.bind(this)
    this.state = {
      todos: [],
      inputText: ""
    }
  }
  submitForm(e) {
    e.preventDefault()
    const todos = [...this.state.todos, this.state.inputText]
    this.setState({todos, inputText: ''})
  }
  render() {
    const {inputText} = this.state // Destructure state object for input (for ease of coding)
    return (
      <div className="App">
        <h1>Simple Todo App</h1>
        <form onSubmit={this.submitForm}>
          <input name="inputText" type="text" value={inputText} onChange={(e) => this.setState({[e.target.name]: e.target.value})} />
          <button type="submit">Submit!</button>
        </form>
        <TodoList todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
