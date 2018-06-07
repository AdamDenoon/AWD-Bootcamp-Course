import React, { Component } from "react"

class HobbyList extends Component {
  render() {
    const liStyle = {fontSize: '1.5em'};
    const hobbies = ["Sleeping", "Eating", "Cuddling"];
    return (
      <ul>
        {hobbies.map((h,i) => <li key={i} style={liStyle}>{h}</li>) /*WARNING: if array changes, key will be wrong */}
      </ul>
    );
  }
}

export default HobbyList
