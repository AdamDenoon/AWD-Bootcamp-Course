import React, { Component } from 'react';
import './App.css';
import Box from './Box'
import PropTypes from 'prop-types'

class App extends Component {
  static defaultProps = {
  allColors: ["Crimson","DarkSeaGreen","Fuchsia","MistyRose","MediumSlateBlue","GreenYellow","DarkGray","DarkKhaki"]
  };

  static propTypes = {
    boxes: PropTypes.arrayOf(PropTypes.object),
    boxToMatchId: PropTypes.number
  }

  constructor(props) {
    super(props)
    this.onCheck = this.onCheck.bind(this)
    let initBoxes = [] // Prepare array to initialize with 8 pairs of matching boxes

    const getRandomColor = () => this.props.allColors[Math.floor(Math.random() * this.props.allColors.length)];

    let usedColors = [];
    for (let i=0;initBoxes.length < 16;i += 2) { // Create 8 pairs of random colors
      const randColor = getRandomColor();
      if (!usedColors.includes(randColor)) {
        initBoxes.push({color: randColor});
        initBoxes.push({color: randColor});
        usedColors.push(randColor);
      }
    }

    const shuffleArray = (arr) => (
      arr
        .map(a => [Math.random(), a])
        .sort((a, b) => a[0] - b[0])
        .map(a => a[1])
    )

    const boxes = shuffleArray(initBoxes).map((box,i) => ({...box, id: i})) // Randomize initialized boxes and add ids

    this.state = { // Init object state
      boxes: boxes,
      boxToMatchId: null
    }
  }

  onCheck(id,color) {

    if (this.state.boxes.some(box => box.id === id && box.colorShowing)) { return } // Same box was clicked twice or box was already matched

    const boxes = this.state.boxes.map(box => { // Show clicked box
      if (box.id === id) {
        box.colorShowing = true;
      }
      return box;
    })

    const boxToMatchId = this.state.boxToMatchId;
    let newMatchId = 0;
    if (boxToMatchId === null) { // First box selected. Prepare for "second" guess
      newMatchId = id;
    } else {
      if (boxes.find(box => box.id === boxToMatchId && box.color === color) !== undefined) { // Check for match
        newMatchId = null // Match found. Leave boxes as-is and prepare for next "first" guess.
      } else { // No match found. Wait 2 seconds and hide both clicked boxes
        const firstId = boxToMatchId
        const secondId = id
        setTimeout(() => {
          const boxes = this.state.boxes.map(box => {
            if ((box.id === firstId && firstId === boxToMatchId) || (box.id === secondId && secondId === id)) {
              box.colorShowing = false;
            }
            return box
          })
          this.setState({boxes})
        }, 500, firstId, secondId)

        newMatchId = null // Prepare for next "first" guess
      }
    }

    this.setState({ // Update state with new object
        boxes,
        boxToMatchId: newMatchId
      }, this.checkGame);
  }

  checkGame() {
    setTimeout(() => { // Let user admire their work for a split second
      if (this.state.boxes.every(box => box.colorShowing)) {
        alert("Well done!");
      }
    }, 500)

  }

  render() {
    const boxes = this.state.boxes.map((box,i) => <Box key={i} id={i} {...box} onCheck={this.onCheck} />);
    return (
      <div className="App">
        {boxes}
      </div>
    );
  }
}

export default App;
