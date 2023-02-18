// Write your JS code here

import {Component} from 'react'

import './index.css'

class RegistrationForm extends Component {
  state = {
    username: '',
    password: '',
    success: false,
    userfill: false,
    passfill: false,
  }

  username = event => {
    this.setState({username: event.target.value})
  }

  password = event => {
    this.setState({password: event.target.value})
  }

  submitForm = event => {
    event.preventDefault()
    const {username, password} = this.state

    if (username !== '' && password !== '') {
      this.setState({success: true})
    } else if (username === '' && password === '') {
      this.setState({userfill: true, passfill: true})
    } else if (username !== '' && password === '') {
      this.setState({passfill: true})
    } else if (username === '' && password !== '') {
      this.setState({userfill: true})
    }
  }

  userBlur = event => {
    if (event.target.value === '') {
      this.setState({userfill: true})
    } else {
      this.setState({userfill: false})
    }
  }

  passBlur = event => {
    if (event.target.value === '') {
      this.setState({passfill: true})
    } else {
      this.setState({passfill: false})
    }
  }

  changeLogin = () => {
    this.setState({success: false})
  }

  render() {
    const {success, userfill, passfill} = this.state

    const userClass = userfill ? 'blured' : 'input-blur'
    const passClass = passfill ? 'blured' : 'input-blur'
    return (
      <div className="main">
        <h1>Registration</h1>
        {success ? (
          <div className="form">
            <img
              src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
              alt="success"
            />
            <p className="para">Submitted Successfully</p>
            <button className="button" type="button" onClick={this.changeLogin}>
              Submit Another Response
            </button>
          </div>
        ) : (
          <div className="form">
            <form onSubmit={this.submitForm} className="inside">
              <div className="inputs">
                <label htmlFor="user">FIRST NAME</label>
                <br />
                <input
                  type="text"
                  onChange={this.username}
                  placeholder="First Name"
                  id="user"
                  className={userClass}
                  onBlur={this.userBlur}
                />
                <br />
                {userfill ? <p>Required</p> : ''}
              </div>
              <div className="inputs">
                <label htmlFor="pass">LAST NAME</label>
                <br />
                <input
                  type="text"
                  onChange={this.password}
                  placeholder="Last Name"
                  id="pass"
                  className={passClass}
                  onBlur={this.passBlur}
                />
                <br />
                {passfill ? <p>Required</p> : ''}
              </div>
              <button type="submit" className="button">
                Submit
              </button>
            </form>
          </div>
        )}
      </div>
    )
  }
}

export default RegistrationForm
