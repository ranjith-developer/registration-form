// Write your JS code here
import {Component} from 'react'

import './index.css'

class RegistrationFrom extends Component {
  state = {
    firstName: '',
    lastName: '',
    firstNameError: false,
    lastNameError: false,
    formSubmitted: false,
  }

  onBlurLastName = () => {
    const isValidLastName = this.validateLastName()

    this.setState({lastNameError: !isValidLastName})
  }

  onChangeLastName = event => {
    // this.setState({lastName: event.target.value})
    const {target} = event
    const {value} = target
    this.setState({lastName: value})
  }

  renderLastNameField = () => {
    const {lastName, lastNameError} = this.state
    const className = lastNameError ? 'name-input error' : 'name-input'

    return (
      <div className="input-container">
        <label className="input-label" htmlFor="lastName">
          LAST NAME
        </label>
        <input
          type="text"
          id="lastName"
          className={className}
          value={lastName}
          placeholder="Last name"
          onChange={this.onChangeLastName}
          onBlur={this.onBlurLastName}
        />
      </div>
    )
  }

  onBlurFirstName = () => {
    const isValidFirstName = this.validateFirstName()

    this.setState({firstNameError: !isValidFirstName})
  }

  onChangeFirstName = event => {
    // this.setState({firstName: event.target.value})
    const {target} = event
    const {value} = target
    this.setState({firstName: value})
  }

  renderFirstNameField = () => {
    const {firstName, firstNameError} = this.state
    const className = firstNameError ? 'name-input error' : 'name-input'

    return (
      <div className="input-container">
        <label className="input-label" htmlFor="firstName">
          FIRST NAME
        </label>
        <input
          type="text"
          id="firstName"
          className={className}
          value={firstName}
          onChange={this.onChangeFirstName}
          onBlur={this.onBlurFirstName}
          placeholder="First name"
        />
      </div>
    )
  }

  validateLastName = () => {
    const {lastName} = this.state

    return lastName !== ''
  }

  validateFirstName = () => {
    const {firstName} = this.state

    return firstName !== ''
  }

  onSubmitForm = event => {
    event.preventDefault()
    const isValidFirstName = this.validateFirstName()
    const isValidLastName = this.validateLastName()

    if (isValidFirstName && isValidLastName) {
      this.setState({formSubmitted: true})
    } else {
      this.setState({
        firstNameError: !isValidFirstName,
        lastNameError: !isValidLastName,
        formSubmitted: false,
      })
    }
  }

  renderRegistrationForm = () => {
    const {firstNameError, lastNameError} = this.state

    return (
      <form className="form-container" onSubmit={this.onSubmitForm}>
        {this.renderFirstNameField()}
        {firstNameError && <p className="error-msg">Required</p>}
        {this.renderLastNameField()}
        {lastNameError && <p className="error-msg">Required</p>}
        <button
          type="button"
          className="submit-btn"
          onClick={this.onSubmitForm}
        >
          Submit
        </button>
      </form>
    )
  }

  onClickSubmitAnotherResponse = () => {
    this.setState(prevState => ({
      formSubmitted: !prevState.formSubmitted,
      firstName: '',
      lastName: '',
    }))
  }

  renderSubmissionSuccessView = () => (
    <>
      <img
        src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        alt="success"
        className="success-image"
      />
      <p>Submitted Successfully</p>
      <button
        type="button"
        className="submit-btn"
        onClick={this.onClickSubmitAnotherResponse}
      >
        Submit Another Response
      </button>
    </>
  )

  render() {
    const {formSubmitted} = this.state

    return (
      <div className="registration-form-container">
        <h1 className="form-title">Registration</h1>
        <div className="view-container">
          {formSubmitted
            ? this.renderSubmissionSuccessView()
            : this.renderRegistrationForm()}
        </div>
      </div>
    )
  }
}

export default RegistrationFrom
