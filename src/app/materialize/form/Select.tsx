import React, { Component, ChangeEvent } from 'react'
import PropTypes from 'prop-types'
import { FormSelect } from 'materialize-css';
import { SelectOption } from './SelectOption';

type SelectProps = {
    name: string;
    selected?: string;
    onChange?: (selected: string) => void
}

export class Select extends Component<SelectProps> {
    private select: HTMLSelectElement;

    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        FormSelect.init(this.select);
    }

    public render() {
        return (
            <select
                ref={(select: HTMLSelectElement) => this.select = select}
                name={this.props.name}
                value={this.props.selected}
                onChange={this.handleChange}
            >
                {this.props.children}
            </select>
        );
    }

    private handleChange(event: ChangeEvent<HTMLSelectElement>) {
        if(this.props.onChange)
            this.props.onChange(event.target.value);
    }

    static propTypes = {
        name: PropTypes.string,
        selected: PropTypes.string,
        onChange: PropTypes.func
    }
}
