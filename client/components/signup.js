import React, { Component } from 'react';
import AuthForm from './auth-form';
import { graphql } from 'react-apollo';

import mutation from '../queries/signup';

import query from '../queries/current-user';

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errors: []
    };
  }
   
  componentWillUpdate(nextProps) {
    if (!this.props.data.user && nextProps.data.user) {
        this.props.history.push('/dashboard');
      }
  }

  render() {
    return (
      <div>
        <label>Sign up</label>
        <AuthForm
          errors={this.state.errors}
          onSubmit={submitted => {
            this.props
              .mutate({
                variables: submitted,
                refetchQueries: [{ query }]
              })
              .then(()=> {
                this.setState({
                    errors:[]
                  });
              })
              .catch(res => {
                const errors = res.graphQLErrors.map(err => err.message);

                this.setState({
                  errors
                });
              });
          }}
        />
      </div>
    );
  }
}

export default graphql(mutation)(graphql(query)(Signup));
