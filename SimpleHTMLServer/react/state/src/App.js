import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      instructors: [
        {
          name: 'Tim',
          hobbies: ['sailing', 'react']
        }, {
          name: 'Matt',
          hobbies: ['math', 'd3']
        }, {
          name: 'Colt',
          hobbies: ['css', 'hiking']
        }, {
          name: 'Elie',
          hobbies: ['music', 'es2015']
        }
      ]
    };

    setTimeout(() => {
      removeRandHobby(this);
    }, 5000);

    const removeRandHobby = (app) => {

      const randInstIdx = Math.floor(Math.random() * app.state.instructors.length);
      const randHobbyIdx = Math.floor(Math.random() * app.state.instructors[randInstIdx].hobbies.length);

      /*const instructors = app.state.instructors.slice();
      instructors[randInstIdx] = Object.assign({}, instructors[randInstIdx]);
      instructors[randInstIdx].hobbies = instructors[randInstIdx].hobbies.slice();
      instructors[randInstIdx].hobbies.splice(randHobbyIdx, 1);
      */

      const instructors = app.state.instructors.map((inst,i) => {
        if (i === randInstIdx) {
          const hobbies = [...inst.hobbies];
          hobbies.splice(randHobbyIdx, 1);
          return {...inst, hobbies};
        }

        return inst;
      });

      app.setState({instructors});

      /*
      * Pure function: What's going on here?
      * 1. Copy original state array (via slice() or map, which returns new array)
      * 2. Get a random object from new copy array
      * 3. Make a copy of the random object's property to amend (neither slice nor map perform deep clone)
      * 4. Amend copy of property (or return new object with amended property to map)
      * 5. Update state with modified copy
      * NOTE: This function does not modify state directly. It copies it, modifies it, and updates it. This is a pure function.
      */
    }
  }
  render() {
    const instructors = this.state.instructors.map((instructor, index) => (
      <li key={index}>
        <h3>{instructor.name}</h3>
        <h4>Hobbies: {instructor.hobbies.join(", ")}</h4>
      </li>
    ));
    return (
      <div className="App">
        <ul>
          {instructors}
        </ul>
      </div>
    );
  }
}

export default App;
