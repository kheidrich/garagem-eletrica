import React, { Component } from 'react';
import { MaterializeColor, BackgroundColorShape } from '../color';

type CardProps = {
    backgroundColor: MaterializeColor
}
export class Card extends Component<CardProps> {
    constructor(props) {
        super(props);
    }

    public render() {
        return (
            <div className={`card ${this.props.backgroundColor.color} ${this.props.backgroundColor.intensity}`}>
                {this.props.children}
            </div>
        );
    }

    static propTypes = {
        backgroundColor: BackgroundColorShape
    }

    static defaultProps = {
        backgroundColor: {
            color: ''
        }
    }
}
