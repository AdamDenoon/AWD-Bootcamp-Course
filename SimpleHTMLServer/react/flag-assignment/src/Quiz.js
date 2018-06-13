import React, { Component } from 'react';
import './Quiz.css';
import PropTypes from 'prop-types';
import Ionicon from 'react-ionicons'

class Quiz extends Component {
  static propTypes = {
    choices: PropTypes.arrayOf(PropTypes.string),
    answerFlag: PropTypes.string,
    answerName: PropTypes.string,
    response: PropTypes.string,
    selectedAnswer: PropTypes.string
  }

  constructor(props) {
    super(props)
    this.state = {
      choices: [''],
      answerFlag: '',
      answerName: '',
      response: '',
      selectedAnswer: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.changeRadio = this.changeRadio.bind(this);
    this.loadQuestion = this.loadQuestion.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault()
    const selectedAnswer = this.state.selectedAnswer;
    if (selectedAnswer === '') {
      this.setState({response: 'Please make a selection above'})
    } else {
      if (selectedAnswer === this.state.answerName) {
        this.setState({response: 'Correct!'})
      } else {
        this.setState({response: 'That\'s incorrect. Please try again!'})
      }
    }
  }

  changeRadio(e) {
    this.setState({selectedAnswer: e.target.value});
  }

  loadQuestion() {
    const allFlags = 'https://restcountries.eu/rest/v2/all?fields=name;flag'
    fetch(allFlags)
      .then(data => data.json())
      .then(data => {
        const randCountries = []
        for (let i = 0; i<4; i++) {
          randCountries.push(data[Math.floor(Math.random() * data.length)]);
        }
        const choices = randCountries.map(country => country.name)
        const answerId = Math.floor(Math.random() * 4)
        this.setState({
          choices,
          answerName: randCountries[answerId].name,
          answerFlag: randCountries[answerId].flag,
          response: ''
        }, () => {

        });
      })
      .catch(err => console.log(err.message))
  }

  componentDidMount() {
    this.loadQuestion()
  }
  render() {
    let form = <Ionicon icon="ios-refresh" rotate={true} fontSize="35px" color="rgb(125, 176, 24)"/>
    const {choices, response, answerFlag} = this.state;
    if (choices && choices.length === 4) {
      const choiceList = choices.map((choice,i) => (
        <div key={i} className="quiz-choice">
          <input type="radio" name="choice" checked={this.state.selectedAnswer === choice} onChange={this.changeRadio} value={choice}/>
          <label> {choice}</label>
        </div>
      ))
      form = (
        <form onSubmit={this.handleSubmit}>
          <img src={answerFlag} alt="Mystery Flag"/>
          <div className="choice-list">
            {choiceList}
          </div>
          <p>{response}</p>
          <div className="button-group">
            <button type="submit">Guess</button>
            <button onClick={this.loadQuestion} type="button">Next</button>
          </div>
        </form>
      )


    }
    return (
      <div id="quiz-container">
        {form}
      </div>
    );
  }
}

export default Quiz;
