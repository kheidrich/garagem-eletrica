import React, { Component } from 'react'
import PropTypes from 'prop-types';

type CardTitleProps = {
  center: boolean;
}

export default class CardTitle extends Component<CardTitleProps> {
  public render() {
    return (
      <span className={`card-title ${this.props.center && 'center'}`}>{this.props.children}</span>
    );
  }

  static propTypes = {
    center: PropTypes.bool
  }
}
