import React, { Component } from 'react'

class CardContent extends Component {
    render() {
        return (
            <div className={`card-content ${this.props.textColor} ${this.props.textColorIntensity}`}>
                {this.props.children}
            </div>
        );
    }
}

export default CardContent;