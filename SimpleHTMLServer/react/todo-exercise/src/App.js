import React, { Component } from 'react';
import './App.css';

const TodoList = (props) => {
    const todos = props.todos.map((todo,i) => <li key={i}>{todo}</li>);
    return (
      <ol>
        {todos}
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
    return (
      <div className="App">
        <h1>Simple Todo App</h1>
        <form onSubmit={this.submitForm}>
          <input name="inputText" type="text" value={this.state.inputText} onChange={(e) => this.setState({[e.target.name]: e.target.value})} />
          <button type="submit">Submit!</button>
        </form>
        <TodoList todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
