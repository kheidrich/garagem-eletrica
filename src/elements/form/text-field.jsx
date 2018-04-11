import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class TextField extends Component {
  render() {
    const hasToRenderIcon = Boolean(this.props.icon);

    return (
      <div className="input-field">
        {hasToRenderIcon ? <i className="material-icons prefix">{this.props.icon}</i> : ''}
        <input name={this.props.name}
          type={this.props.type}
          step={this.props.step}
          min={this.props.min}
          max={this.props.max}
          pattern={this.props.pattern}
          maxLength={this.props.maxLength} />
        <label htmlFor={this.props.name}>{this.props.label}</label>
      </div>
    )
  }

  static propTypes = {
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    icon: PropTypes.string,
    pattern: PropTypes.string,
    step: PropTypes.number,
    min: PropTypes.number,
    max: PropTypes.number,
    maxLength: PropTypes.number
  }
}
