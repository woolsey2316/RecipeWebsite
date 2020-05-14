import React from "react";
import Style from "../assets/sass/ContactForm.module.scss";

class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: ""
    };
  }

  resetForm() {
    this.setState({ firstName: "", lastName: "", email: "" });
  }

  render() {
    return (
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        <form
          id="contact-form"
          onSubmit={this.handleSubmit.bind(this)}
          method="POST"
        >
          <div
            style={{ display: "flex", flexWrap: "wrap", alignItems: "center" }}
          >
            <div style={{ width: "50%" }}>
              <input
                type="text"
                className={Style.signupForm__field__firstName}
                value={this.state.name}
                placeholder="First Name"
                onChange={this.onFirstNameChange.bind(this)}
              />
            </div>
            <div style={{ width: "50%" }}>
              <input
                type="text"
                className={Style.signupForm__field__lastName}
                value={this.state.name}
                placeholder="Last Name"
                onChange={this.onLastNameChange.bind(this)}
              />
            </div>
            <div style={{ width: "100%" }}>
              <input
                type="text"
                className={Style.signupForm__field__email}
                aria-describedby="emailHelp"
                value={this.state.email}
                placeholder="Email Address"
                onChange={this.onEmailChange.bind(this)}
              />
            </div>
          </div>
          <div className={Style.miniContainer}>
            <button type="submit" className={Style.signupForm__submitButton}>
              Sign Up
            </button>
          </div>
        </form>
      </div>
    );
  }

  onFirstNameChange(event) {
    this.setState({ firstName: event.target.value });
  }

  onLastNameChange(event) {
    this.setState({ lastName: event.target.value });
  }

  onEmailChange(event) {
    this.setState({ email: event.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.resetForm();
  }
}

export default ContactForm;
