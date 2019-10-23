import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { FormSelect } from 'materialize-css';

export default class Select extends Component {
    public render() {
        return (
            <select ref={(select) => this.select = select}
                value={this.props.selected}
                onChange={(e) => this.props.onChange(e.target.value)}>
                {
                    this.props.options.map(
                        option =>
                            <option key={option.value}
                                value={option.value}>
                                {option.text}
                            </option>
                    )
                }
            </select>
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
