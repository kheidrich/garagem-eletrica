import React, { Component } from 'react'
import PropTypes from 'prop-types';

export default class CardTitle extends Component {
    public render() {
      return (
        <span className={`card-title ${this.props.center && 'center'}`}>{this.props.children}</span>
      );
    }

    static propTypes = {
      center: PropTypes.bool
    }
}
