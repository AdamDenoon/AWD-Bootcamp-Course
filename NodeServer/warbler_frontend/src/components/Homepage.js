import React, { Component } from "react"
import { Link } from "react-router-dom"
import MessageTimeline from "./MessageTimeline"

class Homepage extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { currentUser, errors, history, removeError } = this.props
    const { profileImageUrl, username } = currentUser.user

    history.listen(() => {
      removeError()
    })
    
    if(!currentUser.isAuthenticated) {
      return (
        <div className="home-hero">
          <h1>What's happening?</h1>
          <h4>New to Warbler?</h4>
          <Link to="/signup" className='btn btn-primary'>
            Sign up here
          </Link>
        </div>
      )
    }

    return (
      <div className="container">
        <MessageTimeline profileImageUrl={ profileImageUrl } username={username} errors={errors} removeError={removeError} />
      </div>
    )
  }
}

export default Homepage
