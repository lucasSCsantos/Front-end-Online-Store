import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class RenderComments extends Component {
  render() {
    const { comentario: { email, comment, rate } } = this.props;
    return (
      <div>
        <p>{ email }</p>
        <p>{ comment }</p>
        <p>{ rate }</p>
      </div>
    );
  }
}

RenderComments.propTypes = {
  comentario: PropTypes.shape({
    email: PropTypes.string,
    comment: PropTypes.string,
    rate: PropTypes.number,
  }).isRequired,
};
