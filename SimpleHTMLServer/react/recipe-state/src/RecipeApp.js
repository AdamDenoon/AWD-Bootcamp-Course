import React, { Component } from 'react';
import './RecipeApp.css';
import Nav from './Nav'
import RecipeInput from './RecipeInput'
import RecipeList from './RecipeList'

class RecipeApp extends Component {
  constructor(props) {
    super(props)
    this.state = {
      recipes: [{
        id: 0,
        title: "Spaghetti",
        ingredients: ["1 jar spaghetti sauce", "8 cups water", "1 box spaghetti"],
        instructions: "Open jar of spaghetti sauce. Bring to simmer. Boil water. Cook pasta until done. Combine sauce and pasta.",
        img: "spaghetti.jpg"
      },
      {
        id: 1,
        title: "Milkshake",
        ingredients: ["2 scoops ice cream", "8 ounces milk"],
        instructions: "Combine ice cream and milk. Blend until creamy. Mmm.",
        img: "milkshake.jpg"
      },
      {
        id: 2,
        title: "Avocado Toast",
        ingredients: ["2 slices of bread", "1 avocado", "1 tbsp olive oil", "1 pinch of salt", "pepper"],
        instructions: "Toast bread. Slice avocado and spread on bread. Add salt, oil, and pepper to taste.",
        img: "avocadotoast.jpg"
      }],
      nextRecipeId: 4
    }
  }
  render() {
    const navItems = [
      {
        text: "New Recipe",
        url: "#"
      },
      {
        text: "Home",
        url: "/"
      },
      {
        text: "About",
        url: "#"
      },
      {
        text: "Contact Us",
        url: "#"
      }
    ]
    return (
      <div>
        <Nav title="Recipe App" items={navItems}/>
        <section>
          <h3>Featured Recipes</h3>
          <RecipeInput />
          <RecipeList recipes={this.state.recipes}/>
        </section>
      </div>
    );
  }
}

export default RecipeApp;
