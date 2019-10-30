import React, { Component } from 'react';

export class Section extends Component {
    public render() {
        return (
            <div className="section">
                {this.props.children}
            </div>
        )
    }
}
