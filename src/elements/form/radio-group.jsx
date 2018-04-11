import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'

export default class RadioGroup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            checked: props.checked || ''
        };
    }

    render() {
        return (
            <Fragment>
                {
                    this.props.options.map((option, index) => {
                        const onePerLine = (!this.props.optionsPerLine || this.props.optionsPerLine === 1);
                        const lastRadioOfTheLine = (this.props.optionsPerLine && (index + 1) % this.props.optionsPerLine === 0);
                        const hasToBreakLine = (onePerLine || lastRadioOfTheLine);

                        return (
                            <Fragment key={index}>
                                <span>
                                    <label>
                                        <input name={this.props.name}
                                            type="radio"
                                            value={option.value}
                                            checked={this.state.checked === option.value}
                                            onChange={this.handleRadioChecked.bind(this)} />
                                        <span>{option.text}</span>
                                    </label>
                                </span>
                                {hasToBreakLine ? <br /> : ''}
                            </Fragment>
                        );
                    })
                }
            </Fragment>
        )
    }

    handleRadioChecked(event) {
        const checked = event.target.value;

        this.setState({ checked });
        if (this.props.onRadioChecked) this.props.onRadioChecked(checked);
    }

    static propTypes = {
        name: PropTypes.string.isRequired,
        options: PropTypes.array.isRequired,
        checked: PropTypes.string,
        optionsPerLine: PropTypes.number,
        onRadioChecked: PropTypes.func
    }
}
