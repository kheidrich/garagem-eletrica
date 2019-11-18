import React, { Component } from 'react';
import { MaterializeColor, BackgroundColorShape, BackgroundColor } from '../color';

type CardProps = {
    backgroundColor: MaterializeColor
}
export class Card extends Component<CardProps> {
    constructor(props) {
        super(props);
    }

    public render() {
        return (
            <div className={`card ${this.props.backgroundColor.toString()}`}>
                {this.props.children}
            </div>
        );
    }

    static propTypes = {
        backgroundColor: BackgroundColorShape
    }

    static defaultProps = {
        backgroundColor: new MaterializeColor(BackgroundColor.White)
    }
}
