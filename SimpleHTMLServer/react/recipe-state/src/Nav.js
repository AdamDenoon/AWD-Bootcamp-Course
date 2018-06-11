import React, { Component } from 'react';
import './Nav.css';
import PropTypes from "prop-types"

class Nav extends Component {
  static defaultProps = {
    title: "My App",
    items: [
      { text: 'Home', url: '/' },
      { text: 'About', url: '#' },
      { text: 'Contact', url: '#' }
    ],
    onNewRecipe() {}
  }

  static propTypes = {
    title: PropTypes.string.isRequired,
    items: PropTypes.arrayOf(PropTypes.object),
    onNewRecipe: PropTypes.func
  }
  constructor(props) {
    super(props)
    this.handleNewRecipe = this.handleNewRecipe.bind(this)
  }

  handleNewRecipe() {
    this.props.onNewRecipe();
  }
  render() {
    const navItems = this.props.items.map((item,index) =>(
      <div key={index} className="nav-item" onClick={item.callback}>
        <a href={item.url}>{item.text}</a>
      </div>
    ))
    return (
      <nav>
        <h2>{this.props.title}</h2>
        <div className="nav-item-list">
          {navItems}
        </div>
      </nav>
    );
  }
}

export default Nav;
