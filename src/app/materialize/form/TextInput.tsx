import React, { Component, Fragment, ChangeEvent } from 'react';
import PropTypes from 'prop-types';

type TextInputProps = {
  label: string,
  name: string,
  type: string,
  value: string,
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

    this.handleChange = this.handleChange.bind(this);
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
          value={this.props.value}
          onChange={this.handleChange}
        />
        <label htmlFor={this.props.name}>{this.props.label}</label>
      </Fragment>
    )
  }

  private handleChange(event: ChangeEvent<HTMLInputElement>) {
    if (this.props.onChange)
      this.props.onChange(event.target.value);
  }

  static propTypes = {
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    icon: PropTypes.string,
    pattern: PropTypes.string,
    step: PropTypes.number,
    min: PropTypes.number,
    max: PropTypes.number,
    maxLength: PropTypes.number,
    onChange: PropTypes.func
  }
}
