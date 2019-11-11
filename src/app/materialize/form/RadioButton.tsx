import React, { Component, ChangeEvent } from "react";
import PropTypes from 'prop-types';

type RadioButtonProps = {
    group: string;
    value: string;
    label: string;
    checked?: boolean;
    onCheck?: (value: string) => void
}

export class RadioButton extends Component<RadioButtonProps> {

    public render() {
        return (
            <span>
                <label>
                    <input
                        name={this.props.group}
                        type="radio"
                        value={this.props.value}
                        defaultChecked={this.props.checked}
                        onChange={this.handleCheck}
                    />
                    <span>{this.props.label}</span>
                </label>
            </span>
        )
    }

    private handleCheck() {
        
    }

    static propTypes = {
        group: PropTypes.string.isRequired,
        value: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        checked: PropTypes.bool,
        onCheck: PropTypes.func
    }
}