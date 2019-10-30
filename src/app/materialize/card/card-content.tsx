import React, { Component } from 'react';
import TextColorShape from '../color/TextColorShape';
import MaterializeColor from '../color/MaterializeColor';

type CardContentProps = {
    textColor: MaterializeColor
}

export default class CardContent extends Component<CardContentProps> {
    public render() {
        return (
            <div className={`card-content ${this.props.textColor.color} ${this.props.textColor.intensity}`}>
                {this.props.children}
            </div>
        );
    }

    static propTypes = {
        textColor: TextColorShape
    }

    static defaultProps = {
        textColor: {
            color: '',
            intensity: ''
        }
    }
}
