import React, {Component} from 'react';
import './Box.css';

class Box extends Component {
  static defaultProps = {
    colorShowing: false,
    onCheck() {}
  }
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    const {id, color} = this.props
    this.props.onCheck(id, color)
  }

  render() {
    const {color, colorShowing} = this.props;
    return (
      <div className="box" color={color} onClick={this.handleClick} style={colorShowing ? {background: color} : null}>
      </div>
    );
  }
}

export default Box;
