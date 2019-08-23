import React, { Component } from 'react';

import { graphql } from 'react-apollo';
import query from '../queries/current-user';

import { withRouter } from 'react-router-dom';

export default function(ComposedComponent) {
  class Auth extends Component {
    componentDidMount() {
      if (!this.props.data.loading && !this.props.data.user) {
        this.props.history.push('/login');
      }
    }

    componentWillUpdate(nextProps) {
      if (!this.props.data.loading && !nextProps.data.user) {
        this.props.history.push('/login');
      }
    }

    render() {
      return <ComposedComponent {...this.props} />;
    }
  }

  return graphql(query)(withRouter(Auth));
}
