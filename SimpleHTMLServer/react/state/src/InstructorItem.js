import React, { Component } from 'react';
import './InstructorItem.css';
import PropTypes from 'prop-types';

class InstructorItem extends Component {
  static defaultProps = {
    name: "Test Instructor",
    hobbies: ["test", "hobbies"]
  }
  static propTypes = {
    name: PropTypes.string,
    hobbies: PropTypes.arrayOf(PropTypes.string)
  }
  render() {
    return (
      <li>
        <h3>{this.props.name}</h3>
        <h4>Hobbies: {this.props.hobbies.join(", ")}</h4>
      </li>
    );
  }
}

export default InstructorItem;
