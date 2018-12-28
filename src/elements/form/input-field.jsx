import React, { Component } from 'react'

export default class InputField extends Component {
  render() {
    return (
      <div className="input-field">
        {this.props.children}
      </div>
    )
  }
}
