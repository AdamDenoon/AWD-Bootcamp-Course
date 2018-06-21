import React, { Component } from "react"
import { Link } from "react-router-dom"
import { connect } from "react-redux"
import "./Navbar.css"
import Logo from "../images/warbler-logo.png"

class Navbar extends Component {
  render() {
    return (
      <nav>
        <div className="brand">
          <Link to="/">
            <img src={ Logo } alt="Warbler Home" />
            <h3>Warbler</h3>
          </Link>
        </div>
        <ul className="links">
          <li><Link to="/signup">Sign up</Link></li>
          <li><Link to="/signin">Log in</Link></li>
        </ul>
      </nav>
    )
  }
}

function mapStateToProps(state) {
  return {
    currentUser: state.currentUser
  }
}

export default connect(mapStateToProps, null)(Navbar)
