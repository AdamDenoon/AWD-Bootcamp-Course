import React, { Component } from 'react';
import './RecipeList.css';
import PropTypes from 'prop-types'
import Recipe from './Recipe';

class RecipeList extends Component {
  static defaultProps = {
    recipes: [{
      title: "Spaghetti",
      ingredients: ["1 jar spaghetti sauce", "8 cups water", "1 box spaghetti"],
      instructions: "Open jar of spaghetti sauce. Bring to simmer. Boil water. Cook pasta until done. Combine sauce and pasta.",
      img: "spaghetti.jpg"
    },
    {
      title: "Milkshake",
      ingredients: ["2 scoops ice cream", "8 ounces milk"],
      instructions: "Combine ice cream and milk. Blend until creamy. Mmm.",
      img: "milkshake.jpg"
    },
    {
      title: "Avocado Toast",
      ingredients: ["2 slices of bread", "1 avocado", "1 tbsp olive oil", "1 pinch of salt", "pepper"],
      instructions: "Toast bread. Slice avocado and spread on bread. Add salt, oil, and pepper to taste.",
      img: "avocadotoast.jpg"
    }]
  }
  static propTypes = {
    recipes: PropTypes.arrayOf(PropTypes.object).isRequired
  }
  render() {
    const recipes = this.props.recipes.map((r, i) => <Recipe key={i} {...r} />)
    return (
      <div className="recipe-list">
        {recipes}
      </div>
    );
  }
}

export default RecipeList;
