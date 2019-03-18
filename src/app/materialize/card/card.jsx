import React, { Component } from 'react';
import BackgroundColorShape from '../color/BackgroundColorShape';

class Card extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={`card ${this.props.backgroundColor.color} ${this.props.backgroundColor.intensity}`}>
                {this.props.children}
            </div>
        );
    }

    static defaultProps = {
        backgroundColor: {
            color: '',
            intensity: ''
        }
    }

    static propTypes = {
        backgroundColor: BackgroundColorShape
    }
}

export default Card;