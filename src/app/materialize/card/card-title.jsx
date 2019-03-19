import React, { Component } from 'react'
import PropTypes from 'prop-types';

class CardTitle extends Component {
    render() {
      return (
        <span className={`card-title ${this.props.center && 'center'}`}>{this.props.children}</span>
      );
    }

    static propTypes = {
      center: PropTypes.bool
    }
}

export default CardTitle;