import React, { Component } from 'react';
import './App.css';
import Quiz from './Quiz'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Guess The Flag</h1>
        </header>
        <main>
          <Quiz />
        </main>
      </div>
    );
  }
}

export default App;
