import React, { Component } from "react"
import { Link } from "react-router-dom"
import { connect } from "react-redux"
import { logout } from "../store/actions/auth"
import "./Navbar.css"
import Logo from "../images/warbler-logo.png"

class Navbar extends Component {
  logout = e => {
    e.preventDefault()
    this.props.logout()
  }
  render() {
    const { currentUser } = this.props
    return (
      <nav>
        <div className="brand">
          <Link to="/">
            <img src={ Logo } alt="Warbler Home" />
            <h3>Warbler</h3>
          </Link>
        </div>
        { currentUser.isAuthenticated ? (
          <ul className="links">
            <li><Link to={`/users/${currentUser.user.id}/messages/new`}>New Message</Link></li>
            <li><a onClick={this.logout}>Log Out</a></li>
          </ul>
        ) : (
          <ul className="links">
            <li><Link to="/signup">Sign up</Link></li>
            <li><Link to="/signin">Log in</Link></li>
          </ul>
        )}
      </nav>
    )
  }
}

function mapStateToProps(state) {
  return {
    currentUser: state.currentUser
  }
}

export default connect(mapStateToProps, { logout })(Navbar)
