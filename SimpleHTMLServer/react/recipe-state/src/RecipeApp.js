import React, { Component } from 'react';
import './RecipeApp.css';
import Nav from './Nav'
import RecipeList from './RecipeList'

class RecipeApp extends Component {
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
    const recipes = [{
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
    },
    {
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
    return (
      <div>
        <Nav title="Recipe App" items={navItems}/>
        <section>
          <h3>Featured Recipes</h3>
          <RecipeList recipes={recipes}/>
        </section>
      </div>
    );
  }
}

export default RecipeApp;
