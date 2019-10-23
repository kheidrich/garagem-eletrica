import React, { Component } from 'react'

export default class CardAction extends Component {
    public render() {
        return (
            <div className="card-action">
                {this.props.children}
            </div>
        );
    }
}
