import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './IngredientsList.css'

class IngredientsList extends Component {
  static propTypes = {
    ingredients: PropTypes.arrayOf(PropTypes.string).isRequired
  }
  render() {
    const ingredients = this.props.ingredients.map((ing, i) => <li key={i}>{ing}</li>);
    return (
      <ul>
        {ingredients}
      </ul>
    )
  }
}

export default IngredientsList
