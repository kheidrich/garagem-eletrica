import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

type TextInputProps = {
  label: string,
  name: string,
  type: string,
  value?: string,
  icon?: string,
  pattern?: string,
  step?: number,
  min?: number,
  max?: number,
  maxLength?: number,
  onChange?: (value: string) => void
}

type TextInputState = {
  value: string
}

export class TextInput extends Component<TextInputProps, TextInputState> {
  constructor(props) {
    super(props);
    this.state = {
      value: props.value || ''
    }
  }

  public render() {
    const hasToRenderIcon = Boolean(this.props.icon);

    return (
      <Fragment>
        {hasToRenderIcon && <i className="material-icons prefix">{this.props.icon}</i>}
        <input
          name={this.props.name}
          type={this.props.type}
          step={this.props.step}
          min={this.props.min}
          max={this.props.max}
          pattern={this.props.pattern}
          maxLength={this.props.maxLength}
          value={this.state.value}
          onChange={(event) => this.handleInputValueChange.bind(this)}
        />
        <label htmlFor={this.props.name}>{this.props.label}</label>
      </Fragment>
    )
  }

  handleInputValueChange(event) {
    const value = event.target.value;

    this.setState({ value })
    if (this.props.onChange) this.props.onChange(value);
  }

  static propTypes = {
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    value: PropTypes.string,
    icon: PropTypes.string,
    pattern: PropTypes.string,
    step: PropTypes.number,
    min: PropTypes.number,
    max: PropTypes.number,
    maxLength: PropTypes.number,
    onChange: PropTypes.func
  }
}
