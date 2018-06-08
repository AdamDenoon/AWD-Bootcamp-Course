import React, { Component } from 'react';
import './App.css';
import Box from './Box';

class App extends Component {
  static defaultProps = {
  allColors: ["AliceBlue","AntiqueWhite","Aqua","Aquamarine","Azure","Beige","Bisque","Black","BlanchedAlmond",
              "Blue","BlueViolet","Brown","BurlyWood","CadetBlue","Chartreuse","Chocolate",
              "Coral","CornflowerBlue","Cornsilk","Crimson","Cyan","DarkBlue","DarkCyan","DarkGoldenRod",
              "DarkGray","DarkGrey","DarkGreen","DarkKhaki","DarkMagenta","DarkOliveGreen","Darkorange",
              "DarkOrchid","DarkRed","DarkSalmon","DarkSeaGreen","DarkSlateBlue","DarkSlateGray","DarkSlateGrey",
              "DarkTurquoise","DarkViolet","DeepPink","DeepSkyBlue","DimGray","DimGrey","DodgerBlue",
              "FireBrick","FloralWhite","ForestGreen","Fuchsia","Gainsboro","GhostWhite","Gold","GoldenRod",
              "Gray","Grey","Green","GreenYellow","HoneyDew","HotPink","IndianRed","Indigo","Ivory","Khaki",
              "Lavender","LavenderBlush","LawnGreen","LemonChiffon","LightBlue","LightCoral","LightCyan",
              "LightGoldenRodYellow","LightGray","LightGrey","LightGreen","LightPink","LightSalmon",
              "LightSeaGreen","LightSkyBlue","LightSlateGray","LightSlateGrey","LightSteelBlue","LightYellow",
              "Lime","LimeGreen","Linen","Magenta","Maroon","MediumAquaMarine","MediumBlue","MediumOrchid",
              "MediumPurple","MediumSeaGreen","MediumSlateBlue","MediumSpringGreen","MediumTurquoise",
              "MediumVioletRed","MidnightBlue","MintCream","MistyRose","Moccasin","NavajoWhite","Navy",
              "OldLace","Olive","OliveDrab","Orange","OrangeRed","Orchid","PaleGoldenRod","PaleGreen",
              "PaleTurquoise","PaleVioletRed","PapayaWhip","PeachPuff","Peru","Pink","Plum","PowderBlue",
              "Purple","Red","RosyBrown","RoyalBlue","SaddleBrown","Salmon","SandyBrown","SeaGreen",
              "SeaShell","Sienna","Silver","SkyBlue","SlateBlue","SlateGray","SlateGrey","Snow","SpringGreen",
              "SteelBlue","Tan","Teal","Thistle","Tomato","Turquoise","Violet","Wheat","White","WhiteSmoke",
              "Yellow","YellowGreen"]
  };
  constructor(props) {
    super(props)
    this.state = {
      boxes: []
    };

    const getRandomColor = () => this.props.allColors[Math.floor(Math.random() * this.props.allColors.length)];

    for (let i=0;i<96;i++) {
      this.state.boxes.push({color: getRandomColor()});
    }

    setInterval(() => {
      /* All boxes at once */
      /*const boxes = this.state.boxes.map(box => {
        let color = box.color;
        color = getRandomColor();
        return {...box, color};
      });*/

      /* One box at a time */
      const boxes = this.state.boxes.slice();
      const randIdx = Math.floor(Math.random() * this.state.boxes.length);
      //boxes[randIdx] = Object.assign({}, boxes[randIdx]); // Unnecessary... Strings are included in shallow clone
      boxes[randIdx].color = getRandomColor();

      this.setState({boxes});
    }, 300);


  }
  render() {
    const boxes = this.state.boxes.map((box,i) => <Box key={i} {...box} />);
    return (
      <div className="grid">
        {boxes}
      </div>
    );
  }
}

export default App;
