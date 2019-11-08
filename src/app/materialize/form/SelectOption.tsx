import React, { Component } from "react";
import PropTypes from 'prop-types';

type SelectOptionProps = {
    value: string;
    label: string;
}

export class SelectOption extends Component<SelectOptionProps> {

    public render() {
        return (
            <option value={this.props.value}>
                {this.props.label}
            </option>
        );
    }

    static propTypes = {
        value: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired
    }
}