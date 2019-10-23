import React, { Component } from 'react';

export default class Section extends Component {
    public render() {
        return (
            <div className="section">
                {this.props.children}
            </div>
        )
    }
}
