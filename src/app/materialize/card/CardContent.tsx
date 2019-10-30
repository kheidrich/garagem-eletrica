import React, { Component } from 'react';
import { TextColorShape, MaterializeColor } from '../color';

type CardContentProps = {
    textColor: MaterializeColor
}

export class CardContent extends Component<CardContentProps> {
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
            color: ''
        }
    }
}
