import React, { Component } from 'react';
import './Nav.css';

class Nav extends Component {
  static defaultProps = {
    title: "My App",
    items: [
      { text: 'Home', url: '/' },
      { text: 'About', url: '#' },
      { text: 'Contact', url: '#' }
    ]
  }
  render() {
    const navItems = this.props.items.map((item,index) =>(
      <div key={index} className="nav-item">
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
