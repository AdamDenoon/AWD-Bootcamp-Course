import React, { Component } from 'react';
import './Quiz.css';
import PropTypes from 'prop-types';
import Ionicon from 'react-ionicons'

class Quiz extends Component {
  static propTypes = {
    choices: PropTypes.arrayOf(PropTypes.string),
    answerFlag: PropTypes.string,
    answerName: PropTypes.string
  }

  constructor(props) {
    super(props)
    this.state = {
      choices: [''],
      answerFlag: '',
      answerName: ''
    }
  }

  componentDidMount() {
    const allFlags = 'https://restcountries.eu/rest/v2/all?fields=name;flag'
    fetch(allFlags)
      .then(data => data.json())
      .then(data => {
        const randCountries = []
        for (let i = 0; i<4; i++) {
          randCountries.push(data[Math.floor(Math.random() * data.length) - 1]);
        }
        const choices = randCountries.map(country => country.name)
        const answerId = Math.floor(Math.random() * 4)
        this.setState({
          choices,
          answerName: randCountries[answerId].name,
          answerFlag: randCountries[answerId].flag,
        });
      })
      .catch(err => console.log(err.message))
  }
  render() {
    let form = <Ionicon icon="ios-refresh" rotate={true} fontSize="35px" color="rgb(125, 176, 24)"/>
    const {choices, answerName, answerFlag} = this.state;
    if (choices && choices.length === 4) {
      const choiceList = choices.map((choice,i) => (
        <div key={i} className="quiz-choice">
          <input type="radio" name="choice" value={choice}/>
          <label> {choice}</label>
        </div>
      ))
      form = (
        <form>
          <img src={answerFlag} alt="Mystery Flag"/>
          <div className="choice-list">
            {choiceList}
          </div>
          <button type="submit">Guess</button>
          <p>{answerName}</p>
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
