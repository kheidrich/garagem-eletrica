import React, { Component } from 'react';
import MaterializeColor from '../color/MaterializeColor';
import BackgroundColorShape from '../color/BackgroundColorShape';

type CardProps = {
    backgroundColor: MaterializeColor
}

export default class Card extends Component<CardProps> {
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
            color: '',
            intensity: ''
        }
    }
}