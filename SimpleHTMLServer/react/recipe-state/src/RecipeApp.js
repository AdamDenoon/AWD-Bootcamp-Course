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
      nextRecipeId: 3,
      showForm: false
    }
    this.handleSave = this.handleSave.bind(this)
    this.toggleForm = this.toggleForm.bind(this)
    this.onDelete = this.onDelete.bind(this)
  }

  handleSave(recipe) {
    this.setState((prevState, props) => {
      const newRecipe = {...recipe, id: this.state.nextRecipeId};
      return {
        nextRecipeId: prevState.nextRecipeId + 1,
        recipes: [...this.state.recipes, newRecipe],
        showForm: false
      }
    })
  }

  toggleForm() {
    this.setState((prevState, props) => ({showForm: !prevState.showForm}))
  }

  onDelete(id) {
    const recipes = this.state.recipes.filter((recipe) => (recipe.id !== id))
    this.setState({recipes})
  }

  render() {
    const navItems = [
      {
        text: "New Recipe",
        url: "#",
        callback: this.toggleForm
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
        <Nav title="Recipe App" items={navItems} onNewRecipe={this.toggleForm} />
        <section>
          <h3>Featured Recipes</h3>
          {this.state.showForm ? <RecipeInput onSave={this.handleSave} onClose={this.toggleForm} /> : null }
          <RecipeList recipes={this.state.recipes} onDelete={this.onDelete} />
        </section>
      </div>
    );
  }
}

export default RecipeApp;
