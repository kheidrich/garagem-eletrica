import React, { Component } from 'react'

export class InputField extends Component {
  public render() {
    return (
      <div className="input-field">
        {this.props.children}
      </div>
    );
  }
}
