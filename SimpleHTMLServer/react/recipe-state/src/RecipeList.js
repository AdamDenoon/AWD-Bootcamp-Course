import React, { Component } from 'react';
import './RecipeList.css';
import PropTypes from 'prop-types'
import Recipe from './Recipe';

class RecipeList extends Component {
  static propTypes = {
    recipes: PropTypes.arrayOf(PropTypes.object).isRequired,
    id: PropTypes.number,
    onDelete: PropTypes.func.isRequired
  }
  render() {
    const recipes = this.props.recipes.map(r => <Recipe key={r.id} onDelete={this.props.onDelete} {...r} />)
    return (
      <div className="recipe-list">
        {recipes}
      </div>
    );
  }
}

export default RecipeList;
