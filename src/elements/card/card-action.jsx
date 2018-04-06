import React, { Component } from 'react'

class CardAction extends Component {
    render() {
        return (
            <div className="card-action">
                {this.props.children}
            </div>
        );
    }
}

export default CardAction;