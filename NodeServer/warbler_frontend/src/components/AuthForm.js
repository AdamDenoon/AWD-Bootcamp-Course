import React, { Component } from "react"

class AuthForm extends Component {
  constructor(props){
    super(props)
    this.state = {
      email: "",
      username: "",
      password: "",
      profileImageUrl: ""
    }
  }

  handleSubmit = e => {
    e.preventDefault()
    const { signUp, history } = this.props
    const authType = signUp ? "signup" : "signin"
    this.props.onAuth(authType, this.state).then(() => {
      history.push("/")
    }).catch(() =>{
      return
    })
  }

  handleChange = e => {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value
    })
  }

  render() {
    const { email, username, password, profileImageUrl } = this.state
    const { heading, buttonText, signUp, errors, history, removeError } = this.props

    history.listen(() => {
      removeError()
    })

    return (
      <div className="form-container">
        <form onSubmit={this.handleSubmit}>
          <h2>{heading}</h2>
          {errors.message && <div className="alert alert-danger">{errors.message}</div>}
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            className="form-control"
            id="email"
            name="email"
            onChange={this.handleChange}
            value={email}
          />
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            onChange={this.handleChange}
            value={password}
          />
          { signUp && (
            <div>
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              className="form-control"
              id="username"
              name="username"
              onChange={this.handleChange}
              value={username}
            />
            <label htmlFor="image-url">Avatar URL:</label>
            <input
              type="text"
              className="form-control"
              id="image-url"
              name="profileImageUrl"
              onChange={this.handleChange}
              value={profileImageUrl}
            />
            </div>
          )
        }
        <button className="btn btn-primary btn-block btn-lg" type="submit">{buttonText}</button>
        </form>
      </div>
    )
  }
}

export default AuthForm
