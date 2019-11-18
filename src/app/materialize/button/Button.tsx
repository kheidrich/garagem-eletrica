import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { MaterializeColor, BackgroundColorShape } from '../color';

type ButtonProps = {
    label: string;
    color?: MaterializeColor;
    submit?: boolean,
    onClick?: () => void
}

export class Button extends Component<ButtonProps> {

    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    public render() {
        let isSubmit = this.props.submit;

        return (
            <button
                className={`waves-effect waves-light btn ${this.props.color.toString()}`}
                type={isSubmit ? 'submit' : undefined}
                onClick={this.handleClick}
            >
                {this.props.label}
            </button>
        );
    }

    private handleClick() {
        if (this.props.onClick)
            this.props.onClick();
    }

    static propTypes = {
        label: PropTypes.string.isRequired,
        color: BackgroundColorShape,
        submit: PropTypes.bool,
        onClick: PropTypes.func
    }

    static defaultProps = {
        color: new MaterializeColor()
    }
}