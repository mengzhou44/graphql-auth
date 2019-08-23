import React, { Component } from 'react';

class AuthForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
  }

  renderErrors() {
    return this.props.errors.map(err => (
      <div className="error" key={err}>
        {err}{' '}
      </div>
    ));
  }

  render() {
    return (
      <form
        onSubmit={e => {
          e.preventDefault();
          this.props.onSubmit({
            email: this.state.email,
            password: this.state.password
          });
        }}
      >
        <div className="col s6">
          <div className="input-field">
            <label>Email</label>
            <input
              onChange={e => {
                this.setState({
                  email: e.target.value
                });
              }}
            />
          </div>
          <div className="input-field">
            <label>Password</label>
            <input
              onChange={e => {
                this.setState({
                  password: e.target.value
                });
              }}
            />
          </div>

          {this.renderErrors()}
          <button type="submit" className="btn">
            SUBMIT
          </button>
        </div>
      </form>
    );
  }
}

export default AuthForm;
