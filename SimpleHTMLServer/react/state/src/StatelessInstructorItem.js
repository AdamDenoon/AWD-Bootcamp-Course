import React from 'react';
import './StatelessInstructorItem.css';
import PropTypes from 'prop-types';

const StatelessInstructorItem = props => {
  return (
    <li>
      <h3>{props.name}</h3>
      <h4>Hobbies: {props.hobbies.join(", ")}</h4>
    </li>
  );
}

StatelessInstructorItem.defaultProps = {
  name: "Test Instructor",
  hobbies: ["test", "hobbies"]
}

StatelessInstructorItem.propTypes =  {
  name: PropTypes.string,
  hobbies: PropTypes.arrayOf(PropTypes.string)
}

export default StatelessInstructorItem;
