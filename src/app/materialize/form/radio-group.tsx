import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import SelectableOption from './radio-option';

type RadioGroupProps = {
    name: string,
    options: Array<RadioOption>,
    optionsPerLine?: number,
    initiallyCheckedOption?: string,
    onOptionChecked?: ({ checked: boolean }) => void
}

type RadioGroupState = {
    checked: string
}

export default class RadioGroup extends Component<RadioGroupProps, RadioGroupState> {
    constructor(props) {
        super(props);
        this.state = {
            checked: props.initiallyCheckedOption || ''
        };
    }

    public render() {
        return (
            <Fragment>
                {
                    this.props.options.map((option, index) => {
                        const oneOptionPerLine = (!this.props.optionsPerLine || this.props.optionsPerLine === 1);
                        const lastOptionOfTheLine = (
                            this.props.optionsPerLine &&
                            (index + 1) % this.props.optionsPerLine === 0
                        );
                        const hasToBreakLine = (oneOptionPerLine || lastOptionOfTheLine);

                        return (
                            <Fragment key={index}>
                                <span>
                                    <label>
                                        <input name={this.props.name}
                                            type="radio"
                                            value={option.value}
                                            checked={this.state.checked === option.value}
                                            onChange={this.handleOptionChecked.bind(this)} />
                                        <span>{option.label}</span>
                                    </label>
                                </span>
                                {hasToBreakLine && <br />}
                            </Fragment>
                        );
                    })
                }
            </Fragment>
        )
    }

    private handleOptionChecked(event) {
        const checkedOption = event.target.value;

        this.setState({ checked: checkedOption });
        if (this.props.onOptionChecked)
            this.props.onOptionChecked(checkedOption);
    }

    static propTypes = {
        name: PropTypes.string.isRequired,
        options: PropTypes.array.isRequired,
        initiallyCheckedOption: PropTypes.string,
        optionsPerLine: PropTypes.number,
        onOptionChecked: PropTypes.func
    }
}
