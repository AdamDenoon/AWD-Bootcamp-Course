import React, { Component } from "react"
import "./Recipe.css"
import PropTypes from 'prop-types'
import IngredientsList from "./IngredientsList"

class Recipe extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    ingredients: PropTypes.arrayOf(PropTypes.string).isRequired,
    instructions: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired
  }
  render() {
    const {title, img, ingredients, instructions} = this.props;
    return (
      <div className="recipe-card">
        <div className="recipe-card-image">
          <img src={img} alt="Recipe"/>
        </div>
        <div className="recipe-card-content">
          <h3 className="recipe-title">{title}</h3>
            <h4>Ingredients</h4>
          <IngredientsList ingredients={ingredients}/>
          <h4>Instructions</h4>
          <p className="instructions">{instructions}</p>
        </div>

      </div>
    )
  }
}

export default Recipe
