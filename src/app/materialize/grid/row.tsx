import React, { Component } from 'react'

export class Row extends Component {
    public render() {
        return (
            <div className="row">
                {this.props.children}
            </div>
        );
    }
}
