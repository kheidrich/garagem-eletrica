import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { FormSelect } from 'materialize-css';
import SelectOption from './select-option';

type SelectProps = {
    selected: string;
    options: Array<SelectOption>
    onChange: (selected: string) => void
}

export default class Select extends Component<SelectProps> {
    private select: HTMLSelectElement;

    public render() {
        return (
            <select
                ref={(select: HTMLSelectElement) => this.select = select}
                value={this.props.selected}
                onChange={(e) => this.props.onChange(e.target.value)}
                {...this.props.options.map(
                    option =>
                        (
                            <option
                                key={option.value}
                                value={option.value}
                            >
                                {option.label}
                            </option>
                        )
                )}
            />
        );
    }

    componentDidMount() {
        FormSelect.init(this.select);
    }

    static propTypes = {
        selected: PropTypes.string,
        options: PropTypes.arrayOf(
            PropTypes.shape({
                text: PropTypes.string.isRequired,
                value: PropTypes.string.isRequired
            })
        ).isRequired,
        onChange: PropTypes.func
    }
}
