import {Component} from 'react'

import './index.css'

class LoginForm extends Component {
  state = {username: '', password: '', errorMsg: ''}

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onSubmit = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const option = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, option)
    const data = await response.json()
    console.log(data)
    console.log(response)
    if (response.ok === true) {
      this.onSubmitSuccess()
    } else {
      this.setState({errorMsg: data.error_msg})
    }
  }

  onSubmitSuccess = () => {
    const {history} = this.props
    history.replace('/')
  }

  renderUsername = () => {
    const {username} = this.state
    return (
      <>
        <label htmlFor="username" className="lbl">
          USERNAME
        </label>
        <input
          id="username"
          value={username}
          type="text"
          className="input-box"
          placeholder="Username"
          onChange={this.onChangeUsername}
        />
      </>
    )
  }

  renderPassword = () => {
    const {password} = this.state
    return (
      <>
        <label htmlFor="password" className="lbl">
          PASSWORD
        </label>
        <input
          type="password"
          placeholder="Password"
          className="input-box"
          id="password"
          value={password}
          onChange={this.onChangePassword}
        />
      </>
    )
  }

  render() {
    const {errorMsg} = this.state
    return (
      <div className="login-page">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
          alt="website login"
          className="login-logo"
        />
        <form className="login-form" onSubmit={this.onSubmit}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png "
            alt="website logo"
            className="nxt-login-logo"
          />
          <div className="input-container-username">
            {this.renderUsername()}
          </div>
          <div className="input-container-password">
            {this.renderPassword()}
          </div>
          <button type="submit" className="login-btn">
            Login
          </button>
          <p className="error">{errorMsg}</p>
        </form>
      </div>
    )
  }
}

export default LoginForm
